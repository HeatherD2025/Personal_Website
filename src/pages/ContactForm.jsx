import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
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

try {
  // Get reCAPTCHA v3 token
  const token = await grecaptcha.execute(
    import.meta.env.RECAPTCHA_SITE_KEY,
    { action: "submit" }
  );

  // Verify token with Netlify function
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

  alert("Message sent successfully!");
  setFormData({ name: "", email: "", phone: "", message: "", TOD: "" });
  setValue("");
  setRecaptchaError("");
} catch (err) {
  console.error("EmailJS / reCAPTCHA error:", err);
  alert("Failed to send message. Please try again later.");
} finally {
  setLoading(false);
}

};


  // old code for recaptcha //
  //   const recaptchaRef = useRef();

  // console.log("Loaded ENV VARS:", import.meta.env);

  //   console.log("EMAILJS ENV CONFIG:", {
  //   serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //   templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //   publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  // });

  // useEffect(() => {
  //   console.log("EMAILJS ENV CONFIG:", {
  //     serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //     templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //     publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  //     recaptcha: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  //   });
  //   emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  // }, []);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setLoading(true);

  //     if (!formData.TOD) {
  //       alert("Please select a preferred time.");
  //       setLoading(false);
  //       return;
  //     }

  //     try {
  //       console.log("executing reCaptcha...");
  //       const token = await recaptchaRef.current.executeAsync();
  //       recaptchaRef.current.reset();

  //       if (!token) {
  //         setRecaptchaError("Captcha verification failed. Please try again.");
  //         setLoading(false);
  //         return;
  //       }

  // const result = await emailjs.send(
  //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //   {
  //     name: formData.name,
  //     email: formData.email,
  //     phone: value || formData.phone,
  //     message: formData.message,
  //     TOD: formData.TOD,
  //   },
  //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  // );

  //       console.log("EmailJS: success")
  //       alert("Message sent successfully!");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         message: "",
  //         TOD: "",
  //       });
  //       setValue("");

  //     } catch (err) {
  //       console.error("EmailJS error:", err);
  //       alert("Failed to send message. Please try again later.");
  //     } finally {
  //       console.log("Resetting loading...")
  //       setLoading(false);
  //     }
  //   };

  // TEST CODE //
  // const recaptchaRef = useRef(null);

  // useEffect(() => {
  //   emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  // }, []);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // async function handleSubmit(e) {
  //   e.preventDefault();
    // const token = recaptchaRef.current?.getValue();
    // if (!token) {
    //   setRecaptchaError("please verify you're not a robot");
    //   return;
    // }
    // setRecaptchaError("");
    // setLoading(true);

    // TEST CODE //

    // Get ReCAPTCHA token //
    // const token = recaptchaRef.current?.getValue();
    // if (!token) {
    //   setRecaptchaError("Please verify you are not a robot");
    //   setLoading(false);
    //   return;
    // }
    // setRecaptchaError("");

    // use Netlify to verify my token
    // const verify = await fetch("/.netlify/functions/recaptcha-verify", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ token }),
    // }).then((res) => res.json());

    // if (!verify.success) {
    //   setRecaptchaError("reCAPTCHA failed. Please try again");
    //   recaptchaRef.current.reset();
    //   setLoading(false);
    //   return;
    // }

    // END TEST CODE //

  //   try {
  //     emailjs.send(
  //       import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //       {
  //         name: formData.name,
  //         email: formData.email,
  //         phone: formData.phone,
  //         message: formData.message,
  //         TOD: formData.TOD,
  //       }
  //     );

  //     alert("Message sent successfully!");

  //     setFormData({
  //       name: "",
  //       email: "",
  //       message: "",
  //       TOD: "",
  //     });
  //     setValue("");

  //     recaptchaRef.current.reset();
  //   } catch (err) {
  //     console.error("EmailJs error", err);
  //     alert("Failed to send message. Please try again later");
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
    <>
      <div className="container">
        <div className="formContainer">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div 
                className="contactFormGreeting"
                style={{
                  marginBopttom: "2rem",
                }}>
                I'd love to hear from you!
              </div>

              <div className="row">
                  <label htmlFor="name">NAME</label>
                <div className="inputField">
                  <input
                    style={{
                      width: "100%",
                      margin: "0rem 0rem 1rem 0rem",
                    }}
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
                    style={{
                      width: "100%",
                      margin: "0rem 0rem 1rem 0rem",
                    }}
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
                    style={{
                      width: "100%",
                      margin: "0rem 0rem 1rem 0rem",
                    }}
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
                    style={{
                      width: "100%",
                      margin: "0rem 0rem 1rem 0rem",
                    }}
                    id="message"
                    name="message"
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
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

                {recaptchaError && (
                  <div className="text-danger mt-1">{recaptchaError}</div>
                )}
                {/* </div>  */}
                <div className="row">
                  <button
                    className="submitButton"
                    type="submit"
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
    </>
  );
}
