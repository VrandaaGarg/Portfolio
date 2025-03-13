import React from "react";
import AnimatedScroll from "../ProjectAnimation/AarcadiaScroll";
import TwiggyScroll from "../ProjectAnimation/TwiggyScroll";

function Projects() {
  return (
    <div id="Projects" className="">
      <h1 className="text-4xl md:text-5xl text-center mb-7 md:mb-4 mt-24 md:mt-36 font-semibold text-[#FFC20D]">
        Projects
      </h1>
      <AnimatedScroll />
      <TwiggyScroll />
    </div>
  );
}

export default Projects;
