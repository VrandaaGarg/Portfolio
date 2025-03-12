import React from "react";
import { motion } from "framer-motion";

const FormInput = ({ type, placeholder, name }) => (
  <motion.input
    whileFocus={{ scale: 1.02 }}
    type={type}
    placeholder={placeholder}
    name={name}
    className="w-full rounded-xl border border-[#242424]/50 bg-[#d9aa1f]/50
             py-3 px-4 text-[#242424] placeholder:text-amber-200
             focus:border-[#242424]/90 focus:outline-none focus:ring-2 
             focus:ring-[#FFC20D]/20 transition-all duration-300"
  />
);

const FormTextarea = ({ placeholder, name }) => (
  <motion.textarea
    whileFocus={{ scale: 1.02 }}
    placeholder={placeholder}
    name={name}
    rows="4"
    className="w-full rounded-xl border border-[#242424]/50 bg-[#d9aa1f]/50
             py-3 px-4 text-[#242424] placeholder:text-amber-200
             focus:border-[#242424]/90 focus:outline-none focus:ring-2 
             focus:ring-[#FFC20D]/20 transition-all duration-300"
  />
);

function Contact() {
  return (
    <div id="Contact" className="mb-24">
      <motion.div
        initial={{
          x: [300, 0, 300, 100, 300, 0, 300],
          y: [0, 300, 0, 100, 0, 400, 0],
          scale: [1, 0.5, 1, 0.5, 1, 0.5],
          rotate: [0, 90, 180, 270, 360],
        }}
        animate={{
          x: [300, 0, 300, 100, 300, 0, 300],
          y: [0, 300, 0, 100, 0, 400, 0],
          scale: [1, 0.5, 1, 0.5, 1, 0.5],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,

          ease: "linear",
          repeatType: "loop",
        }}
        className="hidden md:flex md:absolute z-0 h-72 w-72 bg-amber-300/10 rounded-full shadow-2xl shadow-amber-300/10 blur-2xl opacity-80"
      ></motion.div>

      <h1 className="text-3xl md:text-5xl text-center mb-7 md:mb-9 mt-24 md:mt-36 font-semibold text-[#FFC20D]">
        Let's Contact
      </h1>
      <div className=" md:flex justify-center items-center gap-4 mt-4 px-6 md:px-16">
        <div className="hidden md:flex-1 md:flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: 0.2,
            }}
            src="/contact.webp"
            alt="image"
            className="h-96 w-fit"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="md:flex-1 bg-radial  from-[rgb(255,221,128)] to-[#FFC20D] rounded-lg md:mr-16 max-w-3xl"
        >
          <motion.form
            action="https://formspree.io/f/mvgkovyl"
            method="POST"
            className=" p-8 rounded-2xl transition-all duration-300"
          >
            <div className="space-y-6">
              <FormInput type="text" placeholder="Your Name" name="name" />
              <FormInput type="email" placeholder="Your Email" name="email" />
              <FormTextarea placeholder="Your Message" name="message" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                type="submit"
                className="w-full bg-[#242424]/80 border-1 border-[#242424] hover:bg-[#242424]/90 ease-in-out transition-all duration-150 py-4 rounded-xl text-white font-semibold"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
