import React from "react";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Experience from "../Components/Experience";
import CodingStats from "../Components/CodingStats";

export default function Home() {
  return (
    <div>
      <About />
      <Skills />
      <CodingStats />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
