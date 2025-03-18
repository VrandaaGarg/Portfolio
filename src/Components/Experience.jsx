import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa6";
import LazyImage from './LazyImage';

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
  {
    role: "Certificate of Excellence",
    company: "Manipal University Jaipur",
    duration: "November-2024",
    description:
      "I was awarded the Certificate of Excellence for securing the 9.89 gpa in my 2nd semester of B.Tech in Computer Science and Engineering.",
    technologies: [],
    logo: "/deanList2sem.jpg",
  },
  {
    role: "BrandIT",
    company: "IEEE",
    duration: "july 2024",
    description:
      "I secured 3rd position in the BrandIT competition organized by IEEE, where I developed a website named EvoVatika ",
    technologies: ["React", "Tailwind CSS", "Javascript", "HTML", "CSS"],
    logo: "/BrandIT.jpeg",
  },
  {
    role: "Certificate of Excellence",
    company: "Manipal University Jaipur",
    duration: "April-2024",
    description:
      "I was awarded the Certificate of Excellence for securing the 9.83 gpa in my 1st semester of B.Tech in Computer Science and Engineering.",
    technologies: [],
    logo: "/deanList1sem.jpeg",
  },
];

export default function Experince() {
  return (
    <div id="Experience" className="max-w-6xl mx-auto px-2">
      <h1 className="text-3xl md:text-5xl text-center mb-7 md:mb-9 mt-24 md:mt-36 font-semibold text-[#FFC20D]">
        Experience/ Achievement
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block ml-2"
        >
          <FaAward className=" text-[#FFC20D]" />
        </motion.span>
      </h1>
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
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#ffe493] to-[#FFC20D]"></div>
              <motion.div
                initial={{
                  height: 0,
                }}
                whileInView={{
                  height: "100%",
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: "linear",
                }}
                className="h-full w-1 origin-top bg-white/80"
              ></motion.div>
            </motion.div>
            <div className="mb-8 mt-3">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="md:flex mr-4  items-center gap-6 p-6 border rounded-lg shadow-lg bg-[#141414]/40 border-[#FFF2F2]/50 py-3 md:py-9"
              >
                {/* Logo */}
                <div className="w-36 h-36 flex justify-center items-center md:flex-shrink-0">
                  <LazyImage
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FAFAF9]">
                    {exp.role} - {exp.company}
                  </h3>
                  <p className="text-[#FFD557] text-sm">{exp.duration}</p>
                  <p className="text-[#FAFAF9]/60 mt-2">{exp.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 font-semibold text-xs rounded-md text-[#161616] bg-gradient-to-r from-[#FFD557]/95 to-[#FFC20D]/95"
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
