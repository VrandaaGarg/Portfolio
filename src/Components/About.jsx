import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaBriefcase } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaHandPeace, FaArrowRight } from "react-icons/fa6";
import { HiDocumentDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { MdArrowForward } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

import { FaStar } from "react-icons/fa";
const texts = [
  "Full Stack Developer.",
  "Backend Enthusiast.",
  "Video Editor.",
  "Lifelong Learner.",
];
function About() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  // 3) The “displayed” substring (what actually shows on screen):

  // 4) How many characters of the current string have been typed so far:
  const [charIndex, setCharIndex] = useState(0);

  // 5) Whether we are currently deleting instead of typing:

  useEffect(() => {
    let timeoutId;

    // The full string we want to type/delete in this cycle:
    const fullText = texts[textIndex];

    if (!isDeleting && charIndex < fullText.length) {
      // Typing phase: add one character
      timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100); // typing speed: 100ms per character
    } else if (isDeleting && charIndex > 0) {
      // Deleting phase: remove one character
      timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50); // deleting is faster: 50ms per character
    } else {
      // Either we just finished typing the entire string, or finished deleting it:
      if (!isDeleting && charIndex === fullText.length) {
        // Pause for a moment after fully typing
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // hold the full string on‐screen for 1 second
      } else if (isDeleting && charIndex === 0) {
        // We have deleted everything—move to the next string
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 500); // wait half a second before typing next string
      }
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div
      id="Home"
      className="relative h-screen bg-zinc-900 min-h-[90vh] w-full pt-16 md:pt-24 pb-24 overflow-hidden"
    >
      <div className="w-56 h-28 md:w-72 md:h-36 lg:w-[40%] lg:h-60 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2">
        {/* Semi-circular background (bottom-aligned) */}
        <div
          className="
            absolute 
            bottom-0 
            left-1/2 
            -translate-x-1/2 
            w-full 
            h-full 
            bg-gradient-to-t
            from-amber-200
            to-amber-300
            
            rounded-t-full 
            shadow-md
          "
        ></div>

        {/* Profile image sitting “on top” of the arc */}
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="
            absolute 
            bottom-0 
            left-1/2 
            -translate-x-1/2 
            h-[530px] 
           w-max
          "
        >
          <LazyImage
            src="/1.png"
            alt="Vranda Garg"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
      {/* Top section with name, introduction and image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container text-center mx-auto px-6 md:px-12 "
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 bg-zinc-800/30 px-4 py-2 rounded-full inline-flex items-center"
        >
          <span className="text-amber-50 text-sm">Hello!</span>
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block ml-2"
          >
            <FaHandPeace className="text-amber-400" />
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl text-zinc-100 font-bold mb-2"
        >
          I'm{" "}
          <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 text-transparent bg-clip-text">
            Vranda Garg,
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl text-zinc-200 font-bold mb-6"
        >
          I'm a {displayText}
          <span className="inline-block w-1 bg-zinc-200 ml-1 animate-blink" />
        </motion.h2>
      </motion.div>

      {/* Middle section with two divs justified around */}
      <div className=" w-full px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left div */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 w-full md:w-1/3"
          whileHover={{
            scale: 1.02,
          }}
        >
          <FaQuoteLeft className="text-amber-400 text-2xl mb-4" />
          <p className="text-zinc-300">
            Experienced in creating responsive and interactive user interfaces
            using React, Tailwind CSS, and Framer Motion. Passionate about
            crafting beautiful and intuitive web experiences.
          </p>
        </motion.div>

        {/* Right div */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" p-8 flex gap-2.5 flex-col items-end w-full md:w-1/3"
          whileHover={{
            scale: 1.02,
          }}
        >
          <div className="flex gap-1">
            <FaStar className="text-amber-400 text-2xl mb-4" />
            <FaStar className="text-amber-400 text-2xl mb-4" />
            <FaStar className="text-amber-400 text-2xl mb-4" />
            <FaStar className="text-amber-400 text-2xl mb-4" />
            <FaStar className="text-amber-400 text-2xl mb-4" />
          </div>
          <p className="text-zinc-300 text-3xl">5+ years</p>
          <p className="text-zinc-300 text-2xl">Experience</p>
          <div className="w-40 h-1 rounded-2xl bg-zinc-300"></div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-1/3 mx-auto px-4 md:px-8 lg:px-16 absolute bottom-0 left-1/2  -translate-x-1/2 flex flex-col items-center"
      >
        <div className="absolute flex bottom-6 justify-center bg-white p-1.5 rounded-full  gap-1.5 ">
          <Link to="/projects" className="w-full sm:w-auto">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="
              flex items-center justify-center gap-2 
              bg-gradient-to-br from-amber-500 to-yellow-400 
              text-zinc-900 font-bold 
              py-3 px-6 sm:px-8 
              rounded-full shadow-lg 
              w-full sm:w-auto
            "
            >
              <FaBriefcase className="text-xl" />
              <span>Portfolio</span>
              <MdArrowForward className="text-lg" />
            </motion.button>
          </Link>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.98 }}
            className="
             
            flex items-center justify-center gap-2 
            bg-zinc-800 text-amber-400 
            font-bold py-3 px-6 sm:px-8 
            rounded-full shadow-lg 
            w-full sm:w-auto
          "
          >
            <HiDocumentDownload className="text-xl" />
            <span>Resume</span>
            <MdArrowForward className="text-lg" />
          </motion.a>
        </div>

        {/* Buttons below the arc, flex-wrapped and responsive */}
      </motion.div>
    </div>
  );
}

export default About;
