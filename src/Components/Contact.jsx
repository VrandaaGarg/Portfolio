import React from "react";
import { motion } from "framer-motion";

const FormInput = ({ type, placeholder, name }) => (
  <motion.input
    whileFocus={{ scale: 1.02 }}
    type={type}
    placeholder={placeholder}
    name={name}
    className="w-full rounded-xl border border-purple-500/50 bg-purple-900/20
             py-3 px-4 text-gray-100 placeholder:text-gray-400
             focus:border-purple-400 focus:outline-none focus:ring-2 
             focus:ring-purple-500/20 transition-all duration-300"
  />
);

const FormTextarea = ({ placeholder, name }) => (
  <motion.textarea
    whileFocus={{ scale: 1.02 }}
    placeholder={placeholder}
    name={name}
    rows="4"
    className="w-full rounded-xl border border-purple-500/50 bg-purple-900/20
             py-3 px-4 text-gray-100 placeholder:text-gray-400
             focus:border-purple-400 focus:outline-none focus:ring-2 
             focus:ring-purple-500/20 transition-all duration-300
             resize-none"
  />
);

function Contact() {
  return (
    <div className="mb-24">
      <h1 className="text-5xl text-center mb-9 mt-36 font-semibold text-[#FFC20D]">
        Lets's Contact
      </h1>
      <div className="flex justify-center items-center gap-4 mt-4 px-16">
        <div className="flex-1 flex justify-center items-center">
          <img src="/contact.webp" alt="image" className="h-80 w-fit" />
        </div>
        <div className="flex-1 bg-gradient-to-r from-[#FFD557] to-[#FFC20D] border-t-[#7886C7] rounded-lg mr-16 max-w-3xl">
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            action="https://formspree.io/f/mvgkovyl"
            method="POST"
            className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-md
                     border border-purple-500/30 p-8 rounded-2xl
                     hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]
                     transition-all duration-300"
          >
            <div className="space-y-6">
              <FormInput type="text" placeholder="Your Name" name="name" />
              <FormInput type="email" placeholder="Your Email" name="email" />
              <FormTextarea placeholder="Your Message" name="message" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl text-white font-semibold
                         bg-gradient-to-r from-purple-600 to-pink-600
                         hover:from-purple-700 hover:to-pink-700
                         transform transition-all duration-300
                         shadow-lg hover:shadow-purple-500/50"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
