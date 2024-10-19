import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";

function App() {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setBackgroundPosition(`${clientX}px ${clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: `radial-gradient(circle at ${backgroundPosition},rgba(50, 23, 42, 1),  rgba(0, 0, 0, 1))`,
        transition: "background 0.1s ease-out",
      }}
    >
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
