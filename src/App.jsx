import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import About from "./pages/About";

export default function App() {
  return (
   <>
     <main>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
     </main>
   </>
  );
}
