import "./App.css";
import Headers from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import CodingStats from "./Components/CodingStats";

function App() {
  return (
    <div className="bg-[#242424]">
      <Headers />
      <About />
      <Skills />
      <CodingStats />
      <Projects />
      <Experience />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
