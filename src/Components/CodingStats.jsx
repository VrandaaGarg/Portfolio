import React from "react";
import { useState, useEffect } from "react";
import GitHubContributions from "./GitHubContributions";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { PiSmileySad } from "react-icons/pi";
import LazyImage from "./LazyImage";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

function CodingStats() {
  const [githubData, setGitHubData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((response) => response.json())
      .then((data) => setGitHubData(data))
      .catch((error) => console.error("Error fetching GitHub data:", error));
  }, []);
  return (
    <div className="bg-zinc-900 py-16 ">
      <h1 className="text-3xl md:text-5xl text-center font-semibold bg-gradient-to-l from-amber-600 to-amber-300 bg-clip-text text-transparent">
        {" "}
        Coding Stats
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block ml-2"
        >
          <FaCode className="inline-block text-4xl md:text-5xl text-amber-600" />
        </motion.span>
      </h1>
      <div className="max-w-4xl mx-auto  rounded-lg">
        <div className="py-12">
          {githubData ? (
            <div className="">
              <div className="flex  flex-col-2 items-center justify-between mx-auto ">
                <motion.picture
                  whileHover={{
                    scale: 1.02,
                    rotate: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    damping: 10,
                    stiffness: 100,
                  }}
                  className="border p-4 bg-zinc-950/20 border-[#FAF7E7]/20 rounded-lg md:px-7"
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
                  whileHover={{
                    scale: 1.02,
                    rotate: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    damping: 10,
                    stiffness: 100,
                  }}
                  className="border bg-zinc-950/20 border-[#FAF7E7]/20 rounded-lg p-4 md:px-7"
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
