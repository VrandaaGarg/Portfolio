import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import { TbLineDotted, TbCircleDotted } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiDjango,
  SiFramer,
  SiCplusplus,
  SiC,
  SiGithub,
  SiAppwrite,
  SiFirebase,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoSparkles } from "react-icons/io5";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    bgColor: "#E34F26",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    bgColor: "#1572B6",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    bgColor: "#38B2AC",
  },
  {
    name: "SASS",
    icon: <FaSass />,
    bgColor: "#CC6699",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    bgColor: "#F7DF1E",
  },
  {
    name: "React",
    icon: <FaReact />,
    bgColor: "#61DAFB",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    bgColor: "#E41E64",
  },
  { name: "C", icon: <SiC />, bgColor: "#A8B9CC", borderColor: "#5A9FD4" },
  {
    name: "C++",
    icon: <SiCplusplus />,
    bgColor: "#00599C",
  },
  {
    name: "Python",
    icon: <FaPython />,
    bgColor: "#3776AB",
  },
  {
    name: "Java",
    icon: <FaJava />,
    bgColor: "#007396",
  },
  {
    name: "Django",
    icon: <SiDjango />,
    bgColor: "#037514",
  },
  {
    name: "Appwrite",
    icon: <SiAppwrite />,
    bgColor: "#de2166",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    bgColor: "#FFCA28",
  },
  {
    name: "MySQL",
    icon: <GrMysql />,
    bgColor: "#4479A1",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    bgColor: "#4DB33D",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    bgColor: "#68A063",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    bgColor: "black",
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
    bgColor: "#F1502F",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    bgColor: "black",
  },
];
const Skills = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // Reduced from 0.03
        delayChildren: 0.05, // Reduced from 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 25 }, // Increased stiffness for even faster animation
    },
  };

  // Floating animation elements
  const floatingElements = Array(5).fill(null);

  return (
    <div
      id="Skills"
      className="bg-zinc-900 min-h-screen w-full overflow-hidden"
    >
      <div className="rounded-b-4xl md:rounded-4xl min-h-screen overflow-hidden relative bg-zinc-800 py-16 sm:py-20 md:py-24">
        {/* Decorative elements */}
        <TbLineDotted className="text-amber-300 rotate-12 text-2xl sm:text-3xl absolute top-10 right-10 sm:right-14" />

        {/* Animated background circles */}
        <motion.div
          initial={{ rotate: 0, scale: 0.9 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            duration: 6, // Reduced from 10
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="h-48 sm:h-64 w-48 sm:w-64 bg-gradient-to-br from-amber-200 to-zinc-900 border border-yellow-300 opacity-5 rounded-full absolute -top-7 -right-24"
        ></motion.div>

        <motion.div
          initial={{ rotate: 0, scale: 0.9 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            duration: 6, // Reduced from 10
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="h-60 sm:h-80 w-60 sm:w-80 bg-gradient-to-br from-amber-200 to-zinc-900 border border-yellow-300 opacity-5 rounded-full absolute -bottom-7 -left-24"
        ></motion.div>

        {/* Floating particles */}
        {floatingElements.map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0.1,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: [0.1, 0.3, 0.1],
              scale: [
                Math.random() * 0.5 + 0.5,
                Math.random() * 0.8 + 0.7,
                Math.random() * 0.5 + 0.5,
              ],
            }}
            transition={{
              duration: Math.random() * 5 + 5, // Reduced from 10 + 10
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className={`absolute w-2 h-2 rounded-full bg-amber-400/30`}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
          />
        ))}

        {/* Rotating circle element */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 6, // Reduced from 10
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 left-14 hidden sm:block"
          style={{ display: "inline-block" }}
        >
          <TbCircleDotted className="text-amber-300/55 text-4xl sm:text-5xl" />
        </motion.div>

        {/* Skills header with animations */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }} // Reduced from 0.4
          viewport={{ once: true }}
          className="text-3xl md:text-5xl pb-8 sm:pb-12 text-center font-semibold text-amber-300"
        >
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-300">
            Skills{" "}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }} // Reduced from 2
              className="ml-2 -top-6 -right-10 sm:-right-14 absolute"
            >
              <WiStars className="text-amber-100 text-4xl sm:text-5xl" />
            </motion.span>
          </span>
        </motion.h1>

        {/* Skills grid with improved responsiveness */}
        <div className="flex justify-center items-center px-2.5">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 px-2 md:px-11 max-w-5xl justify-center items-center"
          >
            {skills.map((skill, index) => (
              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  x: -2,
                  y: -2,
                  rotate: 2,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.98, rotate: -2 }}
                key={index}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                style={{ zIndex: 2 }}
                className="flex items-center justify-start h-full bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 backdrop-blur-md border border-yellow-400/40 rounded-xl p-2 sm:p-3"
              >
                <motion.div
                  whileHover={{
                    scale: 1.13,
                    rotate: 8,
                    boxShadow: "0 0 10px rgba(255, 194, 13, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="text-white text-lg sm:text-xl rounded-xl flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 bg-white/10 backdrop-blur-md border border-white/10 shadow-inner"
                  style={{
                    color: skill.bgColor,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 1.5, // Reduced from 2
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: (index * 0.05) % 1, // Reduced delay multiplier
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                </motion.div>
                <span className="text-white font-semibold text-sm sm:text-base">
                  {skill.name}
                </span>

                {/* Subtle shine effect on hover */}
                <motion.div
                  initial={{ opacity: 0, width: "10%" }}
                  whileHover={{
                    opacity: 0.1,
                    width: "100%",
                    transition: { duration: 0.3 },
                  }}
                  className="absolute bottom-0 left-0 h-full bg-gradient-to-r from-transparent via-amber-200/20 to-transparent rounded-xl pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }} // Reduced duration and delay
          viewport={{ once: true }}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2, // Reduced from 3
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-amber-400/50"
          >
            <IoSparkles className="text-2xl sm:text-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
