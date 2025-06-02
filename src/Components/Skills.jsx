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
import { TbLineDotted } from "react-icons/tb";
import { TbCircleDotted } from "react-icons/tb";
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
import { AiOutlineCode } from "react-icons/ai";
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
  return (
    <div
      id="Skills"
      className="bg-zinc-900 min-h-screen w-full overflow-hidden"
    >
      <div className="rounded-4xl min-h-screen  overflow-hidden relative bg-zinc-800 py-24">
        <TbLineDotted className="text-amber-300 rotate-12 text-3xl absolute top-10 right-14 " />
        <motion.div
          initial={{ rotate: 0, scale: 0.9 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="h-64 w-64 bg-gradient-to-br from-amber-200 to-zinc-900 border border-yellow-300 opacity-5 rounded-full absolute -top-7 -right-24"
        ></motion.div>

        <motion.div
          initial={{ rotate: 0, scale: 0.9 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="h-80 w-80 bg-gradient-to-br from-amber-200 to-zinc-900 border border-yellow-300 opacity-5 rounded-full absolute -bottom-7 -left-24"
        ></motion.div>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 left-14"
          style={{ display: "inline-block" }} // ensures the rotation is centered
        >
          <TbCircleDotted className="text-amber-300/55 text-5xl" />
        </motion.div>
        <h1 className="text-3xl   md:text-5xl pb-12 text-center  font-semibold text-amber-300">
          <span className="relative bg-clip-text text-transparent  bg-gradient-to-r from-amber-500 to-amber-300">
            Skills{" "}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2 -top-6 -right-14 absolute"
            >
              <WiStars className=" text-amber-100 text-5xl" />
            </motion.span>
          </span>
        </h1>
        <div className="flex justify-center items-center">
          <div className=" grid grid-cols-2 md:grid-cols-5 align-middle gap-2 px-11 max-w-5xl justify-center items-center">
            {skills.map((skill, index) => (
              <motion.div
                whileHover={{ scale: 1.02, x: -2, y: -2, rotate: 2 }}
                whileTap={{ scale: 0.98, rotate: -2 }}
                key={index}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                style={{
                  zIndex: 2,
                }}
                className="flex  items-center justify-start h-full -bg-linear-60 via-zinc-900 from-zinc-800  to-zinc-900 backdrop-blur-md border border-yellow-400/40 rounded-xl p-2"
              >
                <motion.div
                  whileHover={{ scale: 1.13, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="text-white text-xl rounded-xl  flex items-center justify-center w-12 h-12 mr-4 bg-white/10 backdrop-blur-md border border-white/10 shadow-inner"
                  style={{
                    color: skill.bgColor,
                  }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-white font-semibold text-base">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
