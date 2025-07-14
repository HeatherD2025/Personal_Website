import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-number-input";
import NavBar from "../components/Navbar";
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

  const [recaptchaError, setRecaptchaError] = useState("");
  const [value, setValue] = useState(); // Phone input value
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef();


  console.log("EMAILJS ENV CONFIG:", {
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    setLoading(true);

    if (!formData.TOD) {
      alert("Please select a preferred time.");
      setLoading(false);
      return;
    }

    try {
      console.log("executing reCaptcha...");
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!token) {
        setRecaptchaError("Captcha verification failed. Please try again.");
        setLoading(false);
        return;
      }

      console.log("Sending email via emailjs...");

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: value || formData.phone,
          message: formData.message,
          TOD: formData.TOD,
          "g-recaptcha-response": token,
        }
      );
// console.log("Sending Email with:", {
//   serviceID: 'service_erp3z7s',
//   templateID: 'template_wuf7md7',
//   publicKey: '8D3Im9XhR2Lvt98-f',
// });


//       emailjs.send(
//   'service_erp3z7s',        // ✅ Service ID
//   'template_wuf7md7',       // ✅ Template ID
//   {
//     name: formData.name,
//     email: formData.email,
//     phone: value || formData.phone,
//     message: formData.message,
//     TOD: formData.TOD,
//   },
//   'S1im1QcIjNjPdEvq7'        // ✅ Public Key
// );

      console.log("EmailJS: success")
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        TOD: "",
      });
      setValue("");

    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send message. Please try again later.");
    } finally {
      console.log("Resetting loading...")
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
                    <label htmlFor="name">NAME</label>
                  </div>
                  <div className="col-75">
                    <input
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
                      id="message"
                      name="message"
                      rows={7}
                      value={formData.message}
                      onChange={handleChange}
                      style={{ height: "8em" }}
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
                      setFormData((prev) => ({
                        ...prev,
                        TOD: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="row">
                  <button
                    className="submitButton"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
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
