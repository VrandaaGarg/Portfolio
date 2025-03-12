import React from "react";
import { useState, useEffect } from "react";
import GitHubContributions from "./GitHubContributions";
import { FaGithub } from "react-icons/fa";

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
      <h1 className="text-5xl text-center mb-9 mt-36 font-semibold text-[#FFC20D]">
        Coding Stats
      </h1>
      <div className="max-w-5xl mx-auto  rounded-lg">
        {githubData ? (
          <div className="">
            <div className="flex flex-col-2 items-center gap-3 md:gap-8 mx-auto ">
              <div className="flex-1  border-[#FAF7E7] border-[1px] py-3 rounded-xl md:rounded-sm flex flex-col justify-center items-center gap-4">
                <img
                  src={githubData.avatar_url}
                  alt="GitHub Avatar"
                  className="h-28 w-28 md:w-32 md:h-32 rounded-full mx-auto "
                />

                <p className="text-[#FFD557] font-semibold">@VrandaaGarg</p>
              </div>
              <picture>
                <source
                  srcset="https://github-readme-stats.vercel.app/api?username=Vrandaagarg&show_icons=true&theme=gruvbox"
                  media="(prefers-color-scheme: dark)"
                />

                <img
                  src="https://github-readme-stats.vercel.app/api?username=Vrandaagarg&show_icons=true"
                  className=""
                />
              </picture>
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
