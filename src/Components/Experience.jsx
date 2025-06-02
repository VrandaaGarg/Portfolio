import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa6";
import LazyImage from "./LazyImage";
import { TbLineDotted, TbCircleDotted } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi2";
import { LuCodeXml } from "react-icons/lu";

const experience = [
  {
    name: "Winner in Hackerzstreet 3.0",
    role: "Co-Lead",
    company: "IEEE CS MUJ",
    duration: "April 2025",
    description:
      "We built a web app that guides students on personalized learning paths using AI-driven quizzes, flashcards, and adaptive content tailored to their skills, interests, and goals.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Gemini API",
      "Groq API",
      "Appwrite",
    ],
    logo: "/hackerstreetz.jpg",
    left: true,
  },
  {
    company: "Randomize",
    role: "Webmaster",
    duration: "june 2024 - April 2025",
    description:
      "As the Webmaster of Randomize, I oversee all frontend-related workshops, empowering members with the latest web development technologies. I also manage and maintain the club's website, ensuring a seamless and engaging online presence for our community.",
    technologies: ["React", "Tailwind CSS", "Javascript", "Github"],
    logo: "/Randomize.ico",
    left: false,
  },
  // {
  //   role: "Certificate of Excellence",
  //   company: "Manipal University Jaipur",
  //   duration: "April-2025",
  //   description:
  //     "I was awarded the Certificate of Excellence for securing the 9.6 gpa in my 3rd semester of B.Tech in Computer Science and Engineering.",
  //   technologies: [],
  //   logo: "/deanList3sem.jpeg",
  //   left: true,
  // },
  // {
  //   role: "Certificate of Excellence",
  //   company: "Manipal University Jaipur",
  //   duration: "November-2024",
  //   description:
  //     "I was awarded the Certificate of Excellence for securing the 9.89 gpa in my 2nd semester of B.Tech in Computer Science and Engineering.",
  //   technologies: [],
  //   logo: "/deanList2sem.jpg",
  //   left: false,
  // },
  {
    role: "BrandIT",
    company: "IEEE",
    duration: "july 2024",
    description:
      "I secured 3rd position in the BrandIT competition organized by IEEE, where I developed a website named EvoVatika ",
    technologies: ["React", "Tailwind CSS", "Javascript", "HTML", "CSS"],
    logo: "/BrandIT.jpeg",
    left: true,
  },
  // {
  //   role: "Certificate of Excellence",
  //   company: "Manipal University Jaipur",
  //   duration: "April-2024",
  //   description:
  //     "I was awarded the Certificate of Excellence for securing the 9.83 gpa in my 1st semester of B.Tech in Computer Science and Engineering.",
  //   technologies: [],
  //   logo: "/deanList1sem.jpeg",
  //   left: false,
  // },
];

export default function Experience() {
  return (
    <div className="bg-zinc-900">
      <div id="Experience" className="bg-zinc-800 rounded-4xl py-16">
        <div className="max-w-7xl relative mx-auto px-4">
          <HiAcademicCap className="text-amber-300/25  rotate-12 text-3xl absolute top-10 right-14 " />
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
            initial={{ rotate: 0, scale: 0.9 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="h-80 w-80 bg-gradient-to-br from-amber-200 to-zinc-900 border border-yellow-300 opacity-5 rounded-full absolute bottom-1/2 -translate-y-1/2 -left-48"
          ></motion.div>

          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 -translate-y-1/2 left-6 pointer-events-none"
            style={{ display: "inline-block" }}
          >
            <LuCodeXml className="text-amber-300/55 text-5xl" />
          </motion.div>

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
          <h1 className="text-3xl md:text-5xl text-center mb-16 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300">
            Experience / Achievements
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block ml-2"
            >
              <FaAward className="text-[#FFC20D]" />
            </motion.span>
          </h1>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300/30 via-amber-400/50 to-amber-300/30"></div>

            {experience.map((exp, index) => (
              <div key={index} className="mb-16 relative">
                {/* Timeline node/circle */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-l from-amber-500  z-10 shadow-lg shadow-amber-400/20"
                ></motion.div>

                {/* Yellow pulse animation around the circle */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: [0.8, 1.5, 0.8], opacity: [0.5, 0, 0.5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-amber-400/30 z-0"
                ></motion.div>

                {/* Content card - properly positioned left or right */}
                <div
                  className={`flex w-full ${
                    exp.left ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      exp.left ? "md:pr-12 lg:pr-20" : "md:pl-12 lg:pl-20"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: exp.left ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-zinc-900/70 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 shadow-lg shadow-black/30"
                    >
                      <div className="md:flex items-center gap-4">
                        {/* Logo */}
                        <div className="w-24 h-24 mx-auto md:mx-0 rounded-lg overflow-hidden mb-4 md:mb-0 flex-shrink-0 bg-white/5 p-2">
                          <LazyImage
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-amber-300">
                            {exp.role} {exp.company && `- ${exp.company}`}
                          </h3>
                          <p className="text-amber-200/80 text-sm mt-1">
                            {exp.duration}
                          </p>
                          <p className="text-zinc-300 mt-3 text-sm">
                            {exp.description}
                          </p>

                          {exp.technologies && exp.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {exp.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 text-xs rounded-md bg-zinc-700/50 text-amber-200 border border-amber-500/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Date indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400/10 backdrop-blur-sm
                           border border-amber-400/30 text-amber-200 px-3 py-1 rounded-full text-xs font-medium
                           shadow-lg shadow-amber-400/5 -mt-3 z-20`}
                >
                  {exp.duration}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
