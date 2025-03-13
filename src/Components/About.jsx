import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaHandPeace } from "react-icons/fa6";

const text = "I am a Full Stack Developer.";

function About() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
    } else if (isDeleting && index > 0) {
      // Deleting effect
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 50);
    } else {
      // Delay before switching between typing and deleting
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div
      id="Home"
      className="md:flex md:flex-col-2 md:px-24 h-fit mb-9 w-full pt-16 md:pt-36 pb-24"
    >
      <motion.div
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: [0, 120, 240, 360], // Smooth rotation
        }}
        transition={{
          duration: 10, // Adjust speed
          repeat: Infinity, // Infinite rotation
          ease: "linear", // Ensures constant smooth speed
        }}
        className="absolute right-41 top-114 w-[30px] h-[30px] bg-[#FAF7E7]/10 clip-custom"
      ></motion.div>
      {/* fa-icons in bg */}
      <motion.div
        animate={{
          rotate: [0, 120, 240, 360], // Smooth rotation
        }}
        transition={{
          duration: 5, // Adjust speed
          repeat: Infinity, // Infinite rotation
          ease: "linear", // Ensures constant smooth speed
        }}
        className="absolute flex justify-center items-center w-24 h-24  rounded-full mx-auto z-10"
      >
        <FaReact className="text-[#FAF7E7]/10 text-5xl" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 120, 240, 360], // Smooth rotation
        }}
        transition={{
          duration: 5, // Adjust speed
          repeat: Infinity, // Infinite rotation
          ease: "linear", // Ensures constant smooth speed
        }}
        className="absolute top-44 left-1/3 flex justify-center items-center w-24 h-24  rounded-full mx-auto z-10"
      >
        <FaNodeJs className="text-[#FAF7E7]/10 text-5xl" />
      </motion.div>

      {/* about starts */}
      <div className="md:flex-1 p-12 my-auto">
        <h2 className="text-3xl text-[#FAFAF9] font-semibold">
          Hello!!{" "}
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block ml-2"
          >
            <FaHandPeace className="text-[#ffd966]" />
          </motion.span>
        </h2>
        <h1 className="text-4xl md:text-5xl text-[#FAFAF9] font-bold my-3.5">
          My name is{" "}
          <span className="text-6xl font-bold md:text-6xl">Vranda Garg</span>
          ..
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[#FFD557] font-semibold my-4 text-xl font-mono"
        >
          {displayText}
          <span className="animate-blink">|</span> {/* Blinking Cursor */}
        </motion.p>
        <p className="text-[#FFC20D] font-bold text-2xl">
          I'm a passionate developer and creative artist with expertise in
          animation and video editing.
        </p>
      </div>
      <div className="mx-11 md:mx-20 md:flex-1 relative">
        {/* Background Layers */}
        <div className="absolute inset-0 mx-10 flex flex-col">
          <div className="bg-transparent w-full h-[20%]"></div>
          <div className="bg-radial from-[#FFD557] from-40% to-[#FFC20D] w-full h-[80%]"></div>
        </div>

        {/* Motion Div (Animated Border Behind Image) */}
        <motion.div
          initial={{
            x: [0, 30, 30, 0, 0],
            y: [0, 0, 20, 20, 0],
          }}
          animate={{
            x: [0, 30, 30, 0, 0],
            y: [0, 0, 20, 20, 0],
          }}
          transition={{
            duration: 5,
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
          }}
          className="bg-transparent absolute inset-0 border-4 border-[#FAFAF9] z-0 mx-9"
        ></motion.div>

        {/* Image Wrapper */}
        <div className="relative  z-20 flex justify-center items-center pt-7">
          <img
            src="/download.png"
            alt="Vranda Garg"
            className=" h-[270px] md:h-[450px] w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
