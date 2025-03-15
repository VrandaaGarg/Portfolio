import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
  FaTerminal,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";
import { BsCodeSquare } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

function Footer() {
  const socialVariants = {
    hover: {
      y: -3,
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const nameVariants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const codeIconVariants = {
    animate: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socials = [
    { icon: FaGithub, url: "https://github.com/VrandaaGarg", color: "#f5f5f5" },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/vranda-garg-b68011293/",
      color: "#0A66C2",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/vranda_garg",
      color: "#E4405F",
    },
    { icon: CiMail, url: "mailto:vrandacodz@gmail.com", color: "#38B2AC" },
  ];

  const codingIcons = [
    { icon: FaCode, color: "#61DAFB" },
    { icon: BsCodeSquare, color: "#38B2AC" },
    { icon: FaTerminal, color: "#F7DF1E" },
  ];

  const socialContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const socialItemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
    hover: {
      y: -5,
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-[#121212] border-t border-b-[#1c1c1c] shadow-md shadow-[#1c1c1c]/40"
    >
      <footer className="max-w-7xl mx-auto py-8 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center">
        <motion.h1
          variants={nameVariants}
          initial="initial"
          animate="animate"
          className="text-xl md:text-3xl font-bold mb-4 md:mb-0 
                    bg-gradient-to-r from-[#FFD557] to-[#FFC20D] bg-clip-text text-transparent
                    flex items-center gap-2 tracking-tight"
        >
          <div className="flex gap-2">
            {codingIcons.map((code, index) => (
              <motion.span
                key={index}
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
                className="text-lg md:text-xl"
                style={{ color: code.color }}
              >
                <code.icon />
              </motion.span>
            ))}
          </div>
          Vranda Garg
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{
              scale: [0.8, 1, 0.8],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <GoHeartFill className="text-red-500" />
          </motion.span>
        </motion.h1>

        <div className="flex flex-col items-center gap-5">
          <motion.div
            variants={socialContainerVariants}
            initial="hidden"
            animate="show"
            className="flex gap-5"
          >
            {socials.map((social, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={socialItemVariants}
                whileHover="hover"
              >
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl block p-2 text-[#FAFAF9]"
                  whileHover={{
                    color: social.color,
                    filter: "brightness(1.2)",
                    scale: 1.1,
                  }}
                >
                  <social.icon />
                </motion.a>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[#FAFAF9]/70 whitespace-nowrap bg-[#1c1c1c]/90 px-2 py-1 rounded"
                >
                  {social.url.includes("github")
                    ? "GitHub"
                    : social.url.includes("linkedin")
                    ? "LinkedIn"
                    : social.url.includes("instagram")
                    ? "Instagram"
                    : "Email"}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-[#FAFAF9] text-sm font-semibold tracking-wide">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}

export default Footer;
