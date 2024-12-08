import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/main.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/ProjectsList";

function App() {
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
