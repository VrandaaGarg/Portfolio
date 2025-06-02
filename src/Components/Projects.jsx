import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import LazyImage from "./LazyImage";
import { SiGoogleforms } from "react-icons/si";
import { PiHamburgerFill } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    name: "ResuMate",
    image: "/resumate.png",
    icon: <SiGoogleforms />,
    iconColor: "#4394FF",
    liveDemo: "https://resumate.vrandagarg.me/",
    codeUrl: "https://github.com/VrandaaGarg/ResuMate",
    description:
      "ResuMate is an AI-powered platform for building professional, ATS-friendly resumes with live editing, smart formatting, and real-time feedback.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "AI Integration"],
    left: true,
  },
  {
    name: "SmartBite",
    image: "/smartbite.png",
    icon: <PiHamburgerFill />,
    iconColor: "#C30202",
    liveDemo: "https://smartbite.vrandagarg.me/",
    codeUrl: "https://github.com/VrandaaGarg/SmartBite",
    description:
      "SmartBite is a full-stack food ordering app for single restaurants, offering seamless menu browsing, order management, and customer tracking—all ",
    tech: ["Next.js", "Express", "MongoDB", "JWT", "Stripe"],
    left: false,
  },
  {
    name: "Arcadia",
    image: "/aarcadia.png",
    icon: <IoGameControllerOutline />,
    iconColor: "#3CE1FA",
    liveDemo: "https://aarcadia.vercel.app/",
    codeUrl: "https://github.com/VrandaaGarg/Arcadia",
    description:
      "A Gaming hub where users can create a profile and enjoy both single-player and two-player games. Compete with others, track your progress, and climb the leaderboard to see your ranking! 🚀🎮",
    tech: ["React", "Firebase", "Framer Motion", "Socket.io", "Tailwind CSS"],
    left: true,
  },
  {
    name: "SkillCompass",
    image: "/skillcompass.png",
    icon: <RiCompassDiscoverFill />,
    iconColor: "#FFA434",
    liveDemo: "https://skillcompass.glucon-d.xyz/",
    codeUrl: "https://github.com/Glucon-D/SkillCompass",
    description:
      "SkillCompass is an AI-powered platform that personalizes your learning journey with interactive modules, adaptive quizzes, and real-time feedback—helping you achieve your career goals efficiently and earn recognized certificates.",
    tech: ["React", "Gemini API", "Express", "MongoDB", "Tailwind CSS"],
    left: false,
  },
  {
    name: "FinWise",
    image: "/Finwise.png",
    icon: <FaProjectDiagram />,
    liveDemo: "https://finwise.ayush-sharma.in",
    codeUrl: "https://github.com/Glucon-D/FinWise",
    description:
      "FinWise is an AI-powered investment platform that helps beginners understand and plan their investments based on risk, capital, age, and financial goals. Powered by Gemini AI, real-time gold prices, and a clean UI — FinWise explains everything in a way even an 18-year-old can understand.",
    tech: ["React", "Gemini AI", "Financial APIs", "Tailwind CSS", "Chart.js"],
    left: true,
  },
  {
    name: "Intellica",
    image: "/Intellica.png",
    icon: <FaProjectDiagram />,
    liveDemo: "https://intellica.ayush-sharma.in/",
    codeUrl: "https://github.com/CyberBoyAyush/intellica",
    description:
      "Intellica is an AI-powered personalized learning platform designed to enhance user learning through intelligent learning paths, quizzes, and flashcards. With Gemini AI, users get dynamic explanations, and with gamification, learning becomes engaging and fun!",
    tech: ["Next.js", "Gemini API", "MongoDB", "Tailwind CSS", "Framer Motion"],
    left: false,
  },

  // {
  //   name: "EcoVatika",
  //   image: "/Ecovatika.png",
  //   liveDemo: "https://ecovatika.vrandagarg.me/",
  //   codeUrl: "https://github.com/VrandaaGarg/EcoVatika",
  //   description:
  //     "A website designed to help individuals and communities embrace a sustainable lifestyle.",
  // },
];

function Projects({ showAll = false }) {
  const navigate = useNavigate();
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  // Project card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1 },
    },
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4, duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(255, 194, 13, 0.5)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div
      id="Projects"
      className="py-16 md:px-12 lg:px-20 bg-zinc-900 text-white"
    >
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-300 mb-16"
      >
        Projects
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block ml-2"
        >
          <FaProjectDiagram className="inline-block text-4xl md:text-5xl text-[#FFC20D]" />
        </motion.span>
      </motion.h1>

      <div className="flex flex-col space-y-20">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-br from-[#1c1c1c]/90 to-[#252525]/70 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 border border-zinc-700/30"
          >
            <div
              className={`flex flex-col md:flex-row ${
                project.left ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Project Image with shine effect */}
              <motion.div
                className="md:w-1/2 relative overflow-hidden"
                whileHover={() => ({
                  "::after": {
                    content: "''",
                    position: "absolute",
                    top: 0,
                    left: "-60%",
                    width: "30%",
                    height: "100%",
                    background:
                      "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)",
                    transform: "skewX(-25deg)",
                    animation: "shine 1s",
                  },
                })}
              >
                <LazyImage
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 0.7 }}
                />
              </motion.div>

              {/* Project Details with enhanced animations */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                {/* Header with Icon */}
                <motion.div
                  initial={{ x: project.left ? -20 : 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    className="text-3xl bg-gradient-to-br from-zinc-100 to-zinc-200 border border-zinc-500/50 rounded-lg p-2 shadow-lg"
                    style={{ color: project.iconColor }}
                  >
                    {project.icon}
                  </motion.div>
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300">
                    {project.name}
                  </h2>
                </motion.div>

                {/* Description with fade-in animation */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-400 mb-6"
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack with staggered animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-6"
                >
                  <p className="text-zinc-300 font-medium mb-3">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 + 0.4 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#FFC20D20",
                          borderColor: "#FFC20D80",
                        }}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-amber-300 border border-amber-500/30 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Buttons with enhanced hover effects */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex gap-4 mt-auto"
                >
                  <motion.a
                    href={project.liveDemo}
                    whileHover={{
                      scale: 1.05,
                      backgroundImage:
                        "linear-gradient(to right, #FFD557, #FFC20D)",
                      boxShadow: "0 10px 15px -3px rgba(255, 194, 13, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    target="_blank"
                    className="bg-gradient-to-r from-amber-500 to-amber-400 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    Live URL
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#444",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    target="_blank"
                    className="bg-[#333] text-white px-6 py-2 flex items-center justify-center rounded-lg font-semibold transition-all duration-300"
                  >
                    GitHub <FaGithub className="ml-2" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show All button - only visible when not showing all projects */}
      {!showAll && (
        <div className="flex justify-end items-center">
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            whileTap="tap"
            viewport={{ once: true }}
            className="flex justify-center mt-20"
          >
            <motion.button
              type="button"
              onClick={() => navigate("/projects")}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl text-lg font-bold bg-gradient-to-r from-amber-500 to-amber-400 text-zinc-900 shadow-lg shadow-amber-500/20 transition-all duration-300"
            >
              Show All Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <MdArrowForward className="text-xl" />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Projects;
