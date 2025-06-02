import React from "react";
import { useState, useEffect } from "react";
import GitHubContributions from "./GitHubContributions";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

function CodingStats() {
  const [githubData, setGitHubData] = useState(null);

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

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((response) => response.json())
      .then((data) => setGitHubData(data))
      .catch((error) => console.error("Error fetching GitHub data:", error));
  }, []);
  return (
    <div className="bg-zinc-900 pt-16 px-3.5 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        variants={bgVariants}
        initial="initial"
        animate="animate"
        className="absolute top-20 -right-16 z-0 w-32 h-32 md:w-64 md:h-64 rounded-full bg-amber-400/5 blur-3xl pointer-events-none"
      />
      <motion.div
        variants={bgVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-40 -left-36 z-0 w-32 h-32 md:w-80 md:h-80 rounded-full bg-amber-300/5 blur-3xl pointer-events-none"
        style={{ animationDelay: "2s" }}
      />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl text-center font-semibold bg-gradient-to-l from-amber-600 to-amber-300 bg-clip-text text-transparent"
      >
        {" "}
        Coding Stats
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block ml-2"
        >
          <FaCode className="inline-block text-4xl md:text-5xl text-amber-600" />
        </motion.span>
      </motion.h1>
      <div className="max-w-4xl mx-auto  rounded-lg">
        <div className="py-12">
          {githubData ? (
            <div className="">
              <div className="flex flex-wrap gap-3  md:flex-col-2 items-center justify-between mx-auto ">
                <motion.picture
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  whileFocus={{ scale: 1.05 }}
                  whileHover={{
                    scale: 1.02,
                    rotate: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    damping: 10,
                    stiffness: 100,
                  }}
                  className="border p-4 z-10 bg-zinc-950/20 border-[#FAF7E7]/20 rounded-lg md:px-7"
                >
                  <source
                    srcset="https://github-readme-stats.vercel.app/api?username=Vrandaagarg&show_icons=true&bg_color=00000000&text_color=ffffff&icon_color=FFD557&title_color=EB9F33&border_color=FAF7E7&hide_border=true"
                    media="(prefers-color-scheme: dark)"
                  />

                  <img
                    src="https://github-readme-stats.vercel.app/api?username=Vrandaagarg&show_icons=true"
                    className=""
                    loading="lazy"
                  />
                </motion.picture>
                <motion.picture
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileTap={{ scale: 0.95 }}
                  whileFocus={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    rotate: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    damping: 10,
                    stiffness: 100,
                  }}
                  className="border z-10 bg-zinc-950/20 border-[#FAF7E7]/20 rounded-lg p-4 md:px-7"
                >
                  <source
                    srcset="https://nirzak-streak-stats.vercel.app?user=VrandaaGarg&theme=dark&hide_border=true&background=00000000&ring=FFD557&currStreakLabel=EB9F33"
                    media="(prefers-color-scheme: dark)"
                  />

                  <img
                    src="https://github-readme-stats.vercel.app/api?username=Vrandaagarg&show_icons=true"
                    className=""
                    loading="lazy"
                  />
                </motion.picture>
              </div>
              <GitHubContributions />
            </div>
          ) : (
            <p>Loading GitHub stats...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CodingStats;
