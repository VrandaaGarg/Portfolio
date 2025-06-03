import React from "react";
import { useState, useEffect } from "react";
import GitHubContributions from "./GitHubContributions";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { PiSmileySad } from "react-icons/pi";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

function CodingStats() {
  const [githubData, setGitHubData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((response) => response.json())
      .then((data) => {
        setGitHubData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div
      id="CodingStats"
      className="bg-zinc-900 py-16 px-3 sm:px-6 md:px-8 relative overflow-hidden"
    >
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
        className="text-3xl md:text-5xl text-center font-semibold bg-gradient-to-l from-amber-600 to-amber-300 bg-clip-text text-transparent mb-8"
      >
        Coding Stats
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block ml-2"
        >
          <FaCode className="inline-block text-4xl md:text-5xl text-amber-600" />
        </motion.span>
      </motion.h1>

      <div className="max-w-5xl mx-auto rounded-lg">
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-20"
          >
            <motion.div
              animate={{
                rotate: 360,
                borderColor: ["#FFD557", "#EB9F33", "#FFD557"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-12 h-12 border-t-4 border-amber-400 rounded-full"
            />
            <p className="ml-4 text-zinc-300 text-lg">
              Loading GitHub stats...
            </p>
          </motion.div>
        ) : githubData ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  rotate: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  damping: 10,
                  stiffness: 100,
                }}
                className="border bg-zinc-950/20 border-[#FAF7E7]/20 rounded-lg p-2 md:p-4"
              >
                <picture>
                  <source
                    srcSet="https://github-readme-stats.vercel.app/api?username=Vrandaagarg&show_icons=true&bg_color=00000000&text_color=ffffff&icon_color=FFD557&title_color=EB9F33&border_color=FAF7E7&hide_border=true"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=Vrandaagarg&show_icons=true"
                    className="w-full h-auto"
                    loading="lazy"
                    alt="GitHub Stats"
                  />
                </picture>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  rotate: -0.5,
                }}
                transition={{
                  duration: 0.5,
                  damping: 10,
                  stiffness: 100,
                }}
                className="border bg-zinc-950/20 border-[#FAF7E7]/20 rounded-lg p-2 md:p-4"
              >
                <picture>
                  <source
                    srcSet="https://nirzak-streak-stats.vercel.app?user=VrandaaGarg&theme=dark&hide_border=true&background=00000000&ring=FFD557&currStreakLabel=EB9F33"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    src="https://nirzak-streak-stats.vercel.app?user=VrandaaGarg&theme=dark&hide_border=true&background=00000000&ring=FFD557&currStreakLabel=EB9F33"
                    className="w-full h-auto"
                    loading="lazy"
                    alt="GitHub Streak Stats"
                  />
                </picture>
              </motion.div>
            </div>

            <GitHubContributions />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <PiSmileySad className="text-6xl text-amber-400 mb-4" />
            <p className="text-zinc-300 text-lg">
              Unable to load GitHub stats at this time.
            </p>
            <p className="text-zinc-400 text-sm mt-2">
              Please check your connection and try again later.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default CodingStats;
