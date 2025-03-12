import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headers from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Achievement from "./Components/Achievement";
import CodingStats from "./Components/CodingStats";

function App() {
  return (
    <div className="bg-[#2D336B]">
      <Headers />
      <About />
      <Skills />
      <CodingStats />
      <Projects />
      <Experience />
      <Achievement />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
