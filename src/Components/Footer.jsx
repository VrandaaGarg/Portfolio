import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="w-full bg-[#0f0f0f]  border-t-[#252525] border-t-1 shadow-[#0f0f0f]/40 shadow-md ">
      <footer className="text-center text-[#FAFAF9] text-sm p-1 md:p-3 flex justify-between px-4 md:px-11 items-center">
        <div className="text-lg md:text-2xl">
          <h1 className=" text-[#FAFAF9]/90">
            Vranda Garg
            <motion.span
              initial={{
                opacity: 0.4,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="ml-1.5"
            >
              <GoHeartFill className="text-red-500 inline-block " />
            </motion.span>
          </h1>
        </div>
        <div className="">
          <div className="text-lg md:text-2xl flex justify-center gap-2 md:gap-4 my-2 md:my-4">
            <a
              href="https://github.com/VrandaaGarg"
              target="_blank"
              rel="noreferrer"
              className="text-[#FFF2F2]"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vranda-garg-b68011293/"
              target="_blank"
              rel="noreferrer"
              className="text-[#FFF2F2]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/vranda_garg"
              target="_blank"
              rel="noreferrer"
              className="text-[#FFF2F2]"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:vrandacodz@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#FFF2F2]"
            >
              <CiMail />
            </a>
          </div>
          <p className="text-[#FFF2F2]/80">&copy; 2025 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
