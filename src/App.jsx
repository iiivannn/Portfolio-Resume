import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div id="home" className="home-page">
        <Home />
      </div>
      <div id="about" className="about-page">
        <About />
      </div>

      <div id="projects" className="projects-page">
        <Projects />
      </div>
      <div id="contact" className="contact-page">
        <Contact />
      </div>
    </>
  );
}

export default App;
