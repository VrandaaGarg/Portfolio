import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { subDays, format } from "date-fns";
import { motion } from "framer-motion";

// Load environment variables
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const GITHUB_ACCESS_TOKEN = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

const GitHubHeatmap = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      const query = `
        {
          user(login: "${GITHUB_USERNAME}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      const rawContributions =
        data?.data?.user?.contributionsCollection?.contributionCalendar
          ?.weeks || [];

      // Convert nested weeks data into a flat array
      const formattedData = rawContributions.flatMap(
        (week) => week.contributionDays
      );

      setContributions(formattedData);
    };

    fetchContributions();
  }, []);

  return (
    <motion.div
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
      className="max-w-full z-10 p-2 my-3.5  md:p-9 mx-1 md:mx-auto  border bg-zinc-950/20 border-[#FAF7E7]/20 rounded-lg"
    >
      <h2 className="text-left text-[#EB9F33] text-lg md:text-2xl font-semibold mb-4">
        GitHub Contributions
      </h2>

      <CalendarHeatmap
        startDate={subDays(new Date(), 365)}
        endDate={new Date()}
        values={contributions.map((day) => ({
          date: day.date,
          count: day.contributionCount,
        }))}
        classForValue={(value) => {
          if (!value) return "color-empty";
          return `color-scale-${Math.min(value.count, 4)}`;
        }}
        tooltipDataAttrs={(value) => ({
          "data-tip": `${value.date}: ${value.count} contributions`,
        })}
      />
    </motion.div>
  );
};

export default GitHubHeatmap;
