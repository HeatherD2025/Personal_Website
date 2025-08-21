import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {
  return (
   <>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
   </>
  )
}

export default App
