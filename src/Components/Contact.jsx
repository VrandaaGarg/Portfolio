import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { BsEnvelopePaper, BsStars } from "react-icons/bs";

const FormInput = ({ type, placeholder, name }) => (
  <motion.input
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileFocus={{ scale: 1.02, borderColor: "#FFC20D" }}
    transition={{ duration: 0.3 }}
    type={type}
    placeholder={placeholder}
    name={name}
    className="w-full rounded-xl border border-[#1a1a1a] bg-[#141414]/40
             py-4 px-5 text-[#FAFAF9] placeholder:text-[#FAFAF9]/20
             focus:border-[#FFC20D] focus:outline-none focus:ring-2 
             focus:ring-[#FFC20D]/20 transition-all duration-300
             font-medium tracking-wide text-base"
  />
);

const FormTextarea = ({ placeholder, name }) => (
  <motion.textarea
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileFocus={{ scale: 1.02, borderColor: "#FFC20D" }}
    transition={{ duration: 0.3 }}
    placeholder={placeholder}
    name={name}
    rows="4"
    className="w-full rounded-xl border border-[#1a1a1a] bg-[#141414]/40
             py-4 px-5 text-[#FAFAF9] placeholder:text-[#FAFAF9]/20
             focus:border-[#FFC20D] focus:outline-none focus:ring-2 
             focus:ring-[#FFC20D]/20 transition-all duration-300 resize-none
             font-medium tracking-wide text-base"
  />
);

function Contact() {
  const floatingStars = Array(3).fill(null);

  return (
    <div
      id="Contact"
      className="relative md:min-h-screen py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      {floatingStars.map((_, index) => (
        <motion.div
          key={index}
          initial={{ y: 0, x: 0, opacity: 0.3 }}
          animate={{
            y: [-20, 20],
            x: [-20, 20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: index * 2,
            repeatType: "reverse",
          }}
          className={`absolute hidden md:block h-32 w-32 bg-[#FFC20D]/10 rounded-full blur-3xl`}
          style={{
            left: `${index * 30}%`,
            top: `${index * 20}%`,
          }}
        />
      ))}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl text-center mb-6 font-extrabold 
                  bg-gradient-to-r from-[#FFC20D] via-yellow-400 to-[#FFC20D] 
                  bg-clip-text text-transparent tracking-tight"
      >
        Let's Connect
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block ml-2"
        >
          <BsEnvelopePaper className="inline-block  text-[#FFC20D]" />
        </motion.span>
      </motion.h1>

      <div className="md:flex justify-between items-center gap-12 mt-12 px-6 md:px-20 relative z-10 max-w-8xl mx-auto">
        <div className="hidden md:flex-1 md:flex flex-col items-center gap-8">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="/contact.webp"
            alt="contact illustration"
            className="h-[450px] w-fit object-contain drop-shadow-2xl 
                      filter brightness-110 contrast-125"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#FAFAF9]/80 text-center max-w-md text-lg 
                      font-medium tracking-wide leading-relaxed"
          >
            <BsStars className="inline-block text-[#FFC20D] mr-2" />
            Feel free to reach out for collaborations or just a friendly hello
            <BsStars className="inline-block text-[#FFC20D] ml-2" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:flex-1 backdrop-blur-xl bg-[#141414]/40 
                    p-8 md:p-10 rounded-2xl border border-[#FFF2F2]/50 shadow-2xl
                    shadow-black/20"
        >
          <motion.form
            action="https://formspree.io/f/mvgkovyl"
            method="POST"
            className="space-y-7"
          >
            <FormInput type="text" placeholder="Your Name" name="name" />
            <FormInput type="email" placeholder="Your Email" name="email" />
            <FormTextarea placeholder="Your Message" name="message" />
            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: "#FFC20D",
                boxShadow: "0 0 20px rgba(255, 194, 13, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="w-full bg-[#0f0f0f] border-2 border-[#FFC20D] hover:bg-[#FFC20D] 
                       hover:text-[#0f0f0f] py-4 rounded-xl text-[#FAFAF9] font-semibold
                       flex items-center justify-center gap-2 group text-lg tracking-wide
                       shadow-lg shadow-[#FFC20D]/5 transition-all duration-300"
            >
              Send Message
              <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
