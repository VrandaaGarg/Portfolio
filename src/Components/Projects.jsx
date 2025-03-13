import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

const projects = [
  {
    name: "Aarcadia",
    image: "/aarcadia.png",
    liveDemo: "https://aarcadia.vercel.app/",
    codeUrl: "https://github.com/VrandaaGarg/Arcadia",
    description:
      "A Gaming hub where users can create a profile and enjoy both single-player and two-player games. Compete with others, track your progress, and climb the leaderboard to see your ranking! 🚀🎮",
  },
  {
    name: "SmartBite",
    image: "/SmartBite.png",
    liveDemo: "https://twiggy.netlify.app/",
    codeUrl: "https://github.com/VrandaaGarg/Twiggy",
    description:
      "A modern and efficient food ordering solution.SmartBite offers a seamless experience for both customers and restaurant owners. Streamlining operations and enhancing customer satisfaction",
  },
  {
    name: "Portfolio",
    image: "/portfolio.png",
    liveDemo: "https://vrandaagarg.vercel.app/",
    codeUrl: "https://github.com/VrandaaGarg/Portfolio",
    description:
      "Explore my portfolio showcasing my dynamic web projects,achievements and Coding stats",
  },

  {
    name: "EcoVatika",
    image: "/Ecovatika.png",
    liveDemo: "https://66b0092895b5971368e46b05--ecovatikaa.netlify.app/",
    codeUrl: "https://github.com/VrandaaGarg/EcoVatika",
    description:
      "A website designed to help individuals and communities embrace a sustainable lifestyle.",
  },
  {
    name: "NexRide",
    image: "/nexride.png",
    liveDemo: "",
    codeUrl: "https://github.com/VrandaaGarg/NexRide",
    description:
      "NexRide revolutionizes electric 2-wheeler delivery logistics with smart model selection . Our system ensures efficiency, transparency, and a seamless user experience for both customers and sellers.",
  },
];

function Projects() {
  return (
    <div id="Projects" className="px-6 md:px-12 mt-28 bg-[#121212] text-white">
      <h1 className="text-4xl md:text-5xl text-center font-semibold text-[#FFC20D] mb-12">
        Projects
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block ml-2"
        >
          <FaProjectDiagram className="inline-block text-4xl md:text-5xl text-[#FFC20D]" />
        </motion.span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: 0.2,
            }}
            key={index}
            className="bg-[#1c1c1c]/70 hover:bg-[#303030]/40  p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-2"
          >
            <motion.img
              src={project.image}
              whileHover={{ zoom: 1.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              alt={project.name}
              className="w-full h-52 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{project.name}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>

            <div className="flex gap-4 mt-4">
              <motion.a
                href={project.liveDemo}
                whileHover={{
                  rotate: 2,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                target="_blank"
                className="bg-[#FFC20D] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#f7c72a] transition"
              >
                Live Demo
              </motion.a>
              <motion.a
                href={project.codeUrl}
                whileHover={{
                  rotate: 2,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  duration: 1,
                }}
                target="_blank"
                className="bg-[#333] text-white px-4 py-2 flex items-center justify-center rounded-lg font-semibold hover:bg-[#555] transition"
              >
                Code <FaGithub className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
