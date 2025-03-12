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
    <div className="text-[#FFF2F2] mx-8">
      <h1 className="text-5xl text-center mb-9 mt-36 font-semibold text-[#FFF2F2]">
        Coding Stats
      </h1>
      <div className="max-w-5xl mx-auto  rounded-lg">
        {githubData ? (
          <div className="">
            <div className="flex flex-col-2 items-center gap-3 md:gap-8 mx-auto ">
              <div className="flex-1 bg-[#7886C7]/20 border-[#A9B5DF] border-1 py-3 rounded-xl md:rounded-3xl flex flex-col justify-center items-center gap-4">
                <img
                  src={githubData.avatar_url}
                  alt="GitHub Avatar"
                  className="h-28 w-28 md:w-44 md:h-44 rounded-full mx-auto"
                />

                <p>@VrandaaGarg</p>
              </div>
              <div className="flex-1 bg-[#7886C7]/20 border-[#A9B5DF] border-1 min-h-44 md:min-h-60 rounded-xl md:rounded-3xl flex flex-col justify-center items-center gap-4">
                <h2 className="text-lg md:text-2xl font-bold text-left">
                  {githubData.name}
                </h2>
                <p className="text-left text-base md:text-2xl px-1">
                  Public Repositories: {githubData.public_repos}
                </p>
                <div className="flex gap-3.5 text-lg md:text-2xl">
                  <FaGithub size={30} />
                  <a
                    href={githubData.html_url}
                    target="_blank"
                    className="text-blue-400 underline"
                  >
                    View profile
                  </a>
                </div>
              </div>
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
