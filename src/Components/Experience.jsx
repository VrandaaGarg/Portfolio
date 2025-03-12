import { motion } from "framer-motion";

const experience = [
  {
    company: "Randomize",
    role: "Webmaster",
    duration: "june 2024 - Present",
    description:
      "As the Webmaster of Randomize, I oversee all frontend-related workshops, empowering members with the latest web development technologies. I also manage and maintain the club's website, ensuring a seamless and engaging online presence for our community.",
    technologies: ["React", "Tailwind CSS", "Javascript", "Github"],
    logo: "/Randomize.ico",
  },
];

export default function Experince() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-5xl text-center mb-9 mt-36 font-semibold text-[#FFF2F2]">
        Work Experience
      </h2>
      <div className="">
        {experience.map((exp, index) => (
          <div className="flex">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center mx-5"
            >
              <div className="h-8 w-8 rounded-full bg-[#7886C7]"></div>
              <div className="h-full w-1 bg-white/80"></div>
            </motion.div>
            <div className="mb-8 mt-3">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-6 p-6 border rounded-lg shadow-lg bg-[#7886C7]/10 border-[#FFF2F2]/50 py-9"
              >
                {/* Logo */}
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FFF2F2]">
                    {exp.role} - {exp.company}
                  </h3>
                  <p className="text-gray-300 text-sm">{exp.duration}</p>
                  <p className="text-gray-400 mt-2">{exp.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-md text-white bg-gradient-to-r from-[#A9B5DF]/50 to-[#7886C7]/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
