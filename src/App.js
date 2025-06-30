import { useEffect } from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/main.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/ProjectsList";

function App() {
  // Apply the stored theme on initial load
  useEffect(() => {
    // Check if theme exists in localStorage
    const theme = localStorage.getItem('theme');
    // Apply theme or set default
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
