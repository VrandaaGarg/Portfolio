import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";
import { motion } from "framer-motion";
import { RiCodeSSlashLine } from "react-icons/ri";

function Footer() {
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

  const socials = [
    {
      icon: FaGithub,
      url: "https://github.com/VrandaaGarg",
      color: "#f5f5f5",
      bgColor: "#333333",
      label: "GitHub",
      delay: 0,
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/vrandagarg/",
      color: "#ffffff",
      bgColor: "#0A66C2",
      label: "LinkedIn",
      delay: 0.1,
    },
    {
      icon: FaTwitter,
      url: "https://x.com/vranda_garg_",
      color: "#ffffff",
      bgColor: "#1DA1F2",
      label: "Twitter",
      delay: 0.2,
    },
    {
      icon: CiMail,
      url: "mailto:connect@vrandagarg.in",
      color: "#ffffff",
      bgColor: "#FFC20D",
      label: "Email",
      delay: 0.3,
    },
  ];

  const socialItemVariants = {
    hidden: { y: 10, opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
    hover: {
      y: -5,
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
      className="w-full bg-zinc-950/20 border-t border-zinc-800/50"
    >
      <footer className="max-w-5xl mx-auto py-4 px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo and Name */}
        <motion.div
          variants={nameVariants}
          initial="initial"
          animate="animate"
          className="flex items-center mb-3 sm:mb-0"
        >
          <motion.div whileHover={{ rotate: 10 }} className="mr-2">
            <RiCodeSSlashLine className="text-amber-400 text-xl" />
          </motion.div>
          <motion.h2 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Vranda Garg
          </motion.h2>
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
            className="inline-block ml-1.5"
          >
            <GoHeartFill className="text-red-500 text-sm" />
          </motion.span>
        </motion.div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              custom={social.delay}
              variants={socialItemVariants}
              initial="hidden"
              animate="show"
              whileHover="hover"
              className="relative group"
              aria-label={social.label}
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  boxShadow: `0 4px 12px ${social.bgColor}40`,
                }}
                className="p-2 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: social.bgColor,
                  color: social.color,
                }}
              >
                <social.icon className="text-sm" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                         text-xs text-zinc-400 whitespace-nowrap 
                         bg-zinc-800/90 px-1.5 py-0.5 rounded text-center"
              >
                {social.label}
              </motion.span>
            </motion.a>
          ))}
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-zinc-950/5 py-2 text-center">
        <p className="text-zinc-400 text-xs">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </motion.div>
  );
}

export default Footer;
