import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "../styles/contactForm.css";
import SingleSelection from "../components/singleSelection";
import "react-phone-number-input/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    TOD: "",
  });
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState("");

  // Dynamically load reCAPTCHA v3 script once
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    // append the script to document body for React - loads only when component mounted
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  // global callback replaced with scoped handleSubmit function for on submission only
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRecaptchaError("");
    setLoading(true);

    try {
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA not loaded yet");
      }

      // Execute reCAPTCHA v3 for this action
      const token = await window.grecaptcha.enterprise.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY,
        { action: "contact_form" }
      );

      // Verify token with your backend / Netlify function
      const verify = await fetch("/.netlify/functions/recaptcha-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      }).then((res) => res.json());

      if (!verify.success) {
        setRecaptchaError("reCAPTCHA verification failed. Please try again.");
        setLoading(false);
        return;
      }

      // Send email with EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: value || formData.phone,
          message: formData.message,
          TOD: formData.TOD,
        }
      );


      // reset form
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "", TOD: "" });
      setValue("");
    } catch (err) {
      console.error("EmailJS / reCAPTCHA error:", err);
      setRecaptchaError("Failed to verify reCAPTCHA or send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="contactFormGreeting" style={{ marginBottom: "2rem" }}>
              I'd love to hear from you!
            </div>

            <div className="row">
              <label htmlFor="name">NAME</label>
              <div className="inputField">
                <input
                  style={{ width: "100%", margin: "0 0 1rem 0" }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
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
                  style={{ width: "100%", margin: "0 0 1rem 0" }}
                  type="email"
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
                  style={{ width: "100%", margin: "0 0 1rem 0" }}
                  defaultCountry="US"
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
                  style={{ width: "100%", margin: "0 0 1rem 0" }}
                  id="message"
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label className="form-label">TIME PREFERRED</label>
              </div>
              <SingleSelection
                value={formData.TOD}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, TOD: e.target.value }))
                }
              />
            </div>

            {recaptchaError && <div className="text-danger mt-1">{recaptchaError}</div>}

            <div className="row">
              <button
                type="submit"
                className="submitButton"
                disabled={loading}
                style={{
                  color: "white",
                  border: "solid 1px #8A38F5",
                  marginTop: "2rem",
                }}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
