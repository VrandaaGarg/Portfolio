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
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiDjango,
  SiFramer,
  SiCplusplus,
  SiC,
  SiGithub,
} from "react-icons/si";

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
    name: "Node.js",
    icon: <FaNodeJs />,
    bgColor: "#68A063",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    bgColor: "#030303",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    bgColor: "#4DB33D",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    bgColor: "#F1502F",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    bgColor: "#181717",
  },
];
const Skills = () => {
  return (
    <div className="">
      <h1 className="text-5xl text-center mb-9 mt-36 font-semibold text-[#FFC20D]">
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 p-6 md:px-24 justify-center items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center bg-[#FFC20D]/5 hover:shadow-amber-100/5 hover:bg-[#FFD557]/10 border-[#FAF7E7] border-1 justify-center p-4 rounded-xl shadow-lg cursor-pointer"
          >
            <motion.div
              key={index}
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -20, 0] }} // To and Fro Effect
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1,
                ease: "easeInOut",
              }}
              className="text-white text-4xl"
              style={{
                color: skill.bgColor,
              }}
            >
              {skill.icon}
            </motion.div>

            <p className="text-white mt-2 font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
