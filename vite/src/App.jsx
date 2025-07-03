import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";

export default function App() {
  return (
   <>
     <main>
      <Routes>
        <Route  path="/" element={<Home />} />
      </Routes>
     </main>
   </>
  );
}
