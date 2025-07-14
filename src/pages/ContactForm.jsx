import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactiveButton from "reactive-button";
import emailjs from "@emailjs/browser";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import NavBar from "../components/Navbar";
import SingleSelection from "../components/singleSelection";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    TOD: "",
  });

  const [loading, setLoading] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState("");
  const [value, setValue] = useState()
  const recaptchaRef = useRef();

  
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  if (!formData.TOD) {
  alert("Please select a preferred time.");
  return;
}

  try {
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    if (!token) {
      setRecaptchaError("Captcha verification failed. Please try again.");
      setLoading: false;
      return;
    }

    setRecaptchaError("");

    const data = {
      full_name: formData.fullName,
      email_address: formData.email,
      phone_number: value,
      message: formData.message,
      TOD: formData.TOD || "", // You might need to wire SingleSelection input properly
      token,
    };

    // Send to backend
    const response = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Server error. Try again later.");
    }

    // EmailJS - send as fallback or logging
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      data
    );

    alert("Message sent successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
      TOD: "",
    });
    setValue("");

  } catch (err) {
    console.error("Form submission failed:", err);
    alert("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
   <div className="background">
      <div className="mainBody">
        <NavBar />
          <div className="formContainer">
               <div className="container">
                  <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-25">
                          <label htmlFor="fullName">NAME</label>
                        </div>
                            <div className="col-75">
                              <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                      </div>

                      <div className="row">
                        <div className="col-25">
                          <label htmlFor="email">EMAIL</label>
                        </div>
                            <div className="col-75">
                              <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                      </div>
                      <div className="row">
                        <div className="col-25">
                          <label htmlFor="phone">PHONE NUMBER</label>
                        </div>
                            <div className="col-75">
                              <PhoneInput
                                defaultCountry="US"
                                type="phone"
                                id="phone"
                                name="phone"
                                value={value}
                                onChange={setValue}
                              />
                            </div>
                      </div>
                      <div className="row">
                        <div className="col-25">
                          <label htmlFor="message">MESSAGE</label>
                        </div>
                            <div className="col-75">
                              <textarea
                                id="message"
                                name="message"
                                rows={7}
                                value={formData.message}
                                onChange={handleChange}
                                style={{height: "8em"}}
                              />
                            </div>
                      </div>
                      <div className="row">
                        <div className="col-25">
                          <label htmlFor="email" className="form-label">TIME PREFERRED</label>
                        </div>
                            <SingleSelection  
                              value={formData.TOD}
                              onChange={(e) => setFormData((prev) => ({ ...prev, TOD: e.target.value }))}
                            />
                      </div>      
                      <div className="row">
                        <button
                          variant="secondary"
                          className="submitButton"
                          type="submit"
                        >SUBMIT</button>
                      </div>
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        size="invisible"
                      />
                      {recaptchaError && (
                        <div className="text-danger mt-1">{recaptchaError}</div>
                      )}
                   </form>
                  </div>
             </div>
        </div>
      </div>
    </>
  );
}
