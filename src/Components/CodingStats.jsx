import React from "react";
import { useState, useEffect } from "react";
import GitHubContributions from "./GitHubContributions";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

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
    <div className=" mx-8">
      <h1 className="text-3xl md:text-5xl text-center mb-3 md:mb-9 mt-24 md:mt-36 font-semibold text-[#FFC20D]">
        Coding Stats
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block ml-2"
        >
          <FaCode className="inline-block text-4xl md:text-5xl text-[#FFC20D]" />
        </motion.span>
      </h1>
      <div className="max-w-5xl mx-auto  rounded-lg">
        {githubData ? (
          <div className="">
            <div className="flex  flex-col-2 items-center gap-3 md:gap-8 mx-auto ">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotate: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  damping: 10,
                  stiffness: 100,
                }}
                className="flex-1 px-1 bg-[#242424] border-[#FAF7E7] border-[1px] py-3  rounded-sm flex flex-col justify-center items-center gap-1 md:gap-4"
              >
                <img
                  src={githubData.avatar_url}
                  alt="GitHub Avatar"
                  className="h-16 w-16 md:w-32 md:h-32 rounded-full mx-auto "
                />

                <p className="text-xs text-[#FFD557] font-semibold">
                  @VrandaaGarg
                </p>
              </motion.div>
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
              >
                <source
                  srcset="https://github-readme-stats.vercel.app/api?username=Vrandaagarg&show_icons=true&theme=gruvbox"
                  media="(prefers-color-scheme: dark)"
                />

                <img
                  src="https://github-readme-stats.vercel.app/api?username=Vrandaagarg&show_icons=true"
                  className=""
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
  );
}

export default CodingStats;
