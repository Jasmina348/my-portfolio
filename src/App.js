import Header from "./components/shared/Header";
import Hero from "./components/shared/Hero";
import About from "./components/shared/About";
import Projects from "./components/shared/Project";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;