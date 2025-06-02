import React from "react";
import { motion } from "framer-motion";
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
  "Frontend Developer.",
  "Web Developer.",
];
import { IoMdContacts } from "react-icons/io";

function About() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeoutId;
    const fullText = texts[textIndex];

    if (!isDeleting && charIndex < fullText.length) {
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
      if (!isDeleting && charIndex === fullText.length) {
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

  // Background animation variants
  const bgVariants = {
    initial: { scale: 0.8 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Quote and stats card variants
  const cardVariants = {
    offscreen: { y: 50 },
    onscreen: {
      y: 0,

      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(255, 194, 13, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <div
      id="Home"
      className="relative min-h-screen bg-zinc-900 w-full pt-28 px-6 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        variants={bgVariants}
        initial="initial"
        animate="animate"
        className="absolute top-20 right-10 w-32 h-32 md:w-64 md:h-64 rounded-full bg-amber-400/5 blur-3xl pointer-events-none"
      />
      <motion.div
        variants={bgVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-40 left-10 w-40 h-40 md:w-80 md:h-80 rounded-full bg-amber-300/5 blur-3xl pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      {/* Profile image container - improved responsive sizing */}
      <div className="w-[100%] h-36 md:w-72 md:h-36 lg:w-[35%] lg:h-60 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        {/* Semi-circular background with responsive scaling */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full 
                      bg-gradient-to-t from-yellow-300 to-yellow-600 rounded-t-full shadow-md"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-amber-300 to-amber-400/90 rounded-t-full 
                     shadow-inner mix-blend-overlay"
          />
        </div>

        {/* Profile image with enhanced animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] sm:h-[450px] md:h-[530px] w-max"
        >
          <LazyImage
            src="/1.png"
            alt="Vranda Garg"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Top section with name and introduction */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container text-center mx-auto px-4 sm:px-6 md:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 bg-zinc-800/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full inline-flex items-center"
        >
          <span className="text-amber-50 text-xs sm:text-sm">Hello!</span>
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
          className="text-3xl sm:text-4xl md:text-6xl text-zinc-100 font-bold mb-2"
        >
          <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 text-transparent bg-clip-text">
            Vranda Garg,
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl text-zinc-200 font-bold md:mb-6"
        >
          I'm a {displayText}
          <span className="inline-block w-1 bg-zinc-200 ml-1 animate-blink" />
        </motion.h2>
      </motion.div>

      {/* Middle section with responsive layout */}
      <div className="w-full px-2 sm:px-6 flex flex-col md:flex-row justify-between items-center  sm:gap-10 mb-8 md:mb-0 relative z-10">
        {/* Left card */}
        <motion.div
          variants={cardVariants}
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          className="p-2 md:p-5 sm:p-8 w-full md:w-1/3"
        >
          <FaQuoteLeft className="text-amber-400 text-xl sm:text-2xl mb-3 sm:mb-4" />
          <p className="text-xs md:text-base text-zinc-300">
            Full-stack developer experienced in building responsive, interactive
            user interfaces and seamless web applications. I’m passionate about
            transforming ideas into beautiful, intuitive digital experiences.
          </p>
        </motion.div>

        {/* Right card */}
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          className="sm:p-8 flex md:gap-2.5 flex-col items-end w-full md:w-1/3 "
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
              >
                <FaStar className="text-amber-400 text-base md:text-xl sm:text-2xl mb-2 sm:mb-4" />
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-zinc-300 text-xl sm:text-3xl"
          >
            2+ years
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-zinc-300 text-lg sm:text-2xl"
          >
            Experience
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "25%" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-1.5 md:w-40 h-1 rounded-2xl bg-zinc-300"
          />
        </motion.div>
      </div>

      {/* Bottom buttons with improved responsive design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full sm:w-auto sm:mx-auto px-4 absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
      >
        <div className="absolute z-50 flex  sm:flex-row bottom-6 justify-center bg-white p-1.5 rounded-full gap-1.5 w-[90%] sm:w-auto">
          <Link
            offset={-80}
            smooth={true}
            duration={500}
            className="w-full  sm:w-auto"
          >
            <motion.button
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("Contact").offsetTop - 80,
                  behavior: "smooth",
                });
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 5px 15px rgba(235, 159, 51, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center justify-center gap-2 cursor-pointer
                       bg-gradient-to-br from-amber-500 to-yellow-400 
                       text-zinc-900 font-bold 
                        py-1.5 px-2 md:px-4 md:py-3
                       rounded-full shadow-lg 
                       w-full sm:w-auto"
            >
              <IoMdContacts className="text-xs sm:text-xl" />
              <span>Connect</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <MdArrowForward className="text-lg" />
              </motion.span>
            </motion.button>
          </Link>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center justify-center gap-2 
                     bg-zinc-800 text-zinc-100 md:py-3
                     font-bold py-1.5 px-2 md:px-4 
                     rounded-full shadow-lg 
                     w-full sm:w-auto"
          >
            <HiDocumentDownload className="text-xs sm:text-xl" />
            <span>Resume</span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            >
              <MdArrowForward className="text-lg" />
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
