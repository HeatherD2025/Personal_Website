import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactiveButton from "reactive-button";
import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";
import NavBar from "../components/Navbar";
import SingleSelection from "../components/singleSelection";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  // const [recaptchaError, setRecaptchaError] = useState("");

  // const recaptchaRef = useRef(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const token = recaptchaRef.current?.getValue();
    // if (!token) {
    //   setRecaptchaError("please verify you're not a robot");
    //   return;
    // }
    // setRecaptchaError("");
    // setLoading(true);

    try {
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.fullName,
          email_address: formData.email,
          phone_number: formData.phone,
          message: formData.message,
        }
      );
      alert("Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      // recaptchaRef.current.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <div className="background" style={{ minHeight: "100vh" }}>
        <div className="backgroundAccent" style={{ minHeight: "100vh" }}> */}
          <NavBar />
          {/* <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={-1}
          > */}
            {/* <h2
              style={{
                textAlign: "center",
                paddingTop: "150px",
                fontWeight: "175",
              }}
            >
              We'd Love To Hear From You!
            </h2> */}

                <div className="card">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="fullName"
                        className="form-label"
                      >
                        NAME
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="form-control"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="form-label"
                      >
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="phone"
                        className="form-label"
                      >
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="message"
                        className="form-label"
                      >
                        MESSAGE
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows={7}
                        value={formData.message}
                        onChange={handleChange}
                      />
                      <SingleSelection />
                    </div>
                    {/* <div className="mb-3 text-center">
                      {" "}
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                      />
                      {recaptchaError && (
                        <div className="text-danger mt-1">{recaptchaError}</div>
                      )}
                    </div> */}

                    <div>
                      <button
                        variant="secondary"
                        className="submitButton"
                        type="submit"
                      >SUBMIT</button>
                    </div>
                   </form>
                  </div>

        {/* </div>
      </div> */}
    </>
  );
}
