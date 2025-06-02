import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheck } from "react-icons/fa";
import { BsEnvelopePaper, BsStars } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { IoSparkles } from "react-icons/io5";
import { TbLineDotted, TbCircleDotted } from "react-icons/tb";
import { MdMessage } from "react-icons/md";
import { TbMessages } from "react-icons/tb";

const FormInput = ({ type, placeholder, name, value, onChange }) => (
  <motion.div className="relative">
    <motion.input
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileFocus={{ scale: 1.02, borderColor: "#FFC20D" }}
      transition={{ duration: 0.3 }}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-[#1a1a1a] bg-[#141414]/40 p-3
             md:py-4 md:px-5 text-[#FAFAF9] placeholder:text-[#FAFAF9]/30
             focus:border-[#FFC20D] focus:outline-none focus:ring-2 
             focus:ring-[#FFC20D]/20 transition-all duration-300
             font-medium tracking-wide text-base shadow-inner shadow-black/10"
    />
    <motion.span
      className="absolute left-4 top-0 px-1 text-xs font-medium text-amber-400/70 opacity-0 bg-[#141414]"
      initial={{ y: 0, opacity: 0 }}
      animate={value ? { y: -10, opacity: 1 } : { y: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {placeholder}
    </motion.span>
  </motion.div>
);

const FormTextarea = ({ placeholder, name, value, onChange }) => (
  <motion.div className="relative">
    <motion.textarea
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileFocus={{ scale: 1.02, borderColor: "#FFC20D" }}
      transition={{ duration: 0.3 }}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      rows="5"
      className="w-full rounded-xl border border-[#1a1a1a] bg-[#141414]/40 p-2
             md:py-4 md:px-5 text-[#FAFAF9] placeholder:text-[#FAFAF9]/30
             focus:border-[#FFC20D] focus:outline-none focus:ring-2 
             focus:ring-[#FFC20D]/20 transition-all duration-300 resize-none
             font-medium tracking-wide text-base shadow-inner shadow-black/10"
    />
    <motion.span
      className="absolute left-4 top-0 px-1 text-xs font-medium text-amber-400/70 opacity-0 bg-[#141414]"
      initial={{ y: 0, opacity: 0 }}
      animate={value ? { y: -10, opacity: 1 } : { y: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {placeholder}
    </motion.span>
  </motion.div>
);

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgkovyl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Particles for animation
  const particles = Array(15).fill(null);
  const floatingStars = Array(5).fill(null);

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div
      id="Contact"
      className="relative md:min-h-screen py-20 px-5 overflow-hidden bg-zinc-900"
    >
      {/* Animated background gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-80 -right-80 w-[600px] h-[600px] bg-amber-400 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -top-80 -left-80 w-[600px] h-[600px] bg-amber-400 rounded-full blur-3xl -z-10"
      />

      {/* Decorative elements */}
      <MdMessage className="text-amber-300/40 rotate-12 text-3xl absolute top-16 right-14 hidden md:block" />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 left-14 hidden md:block"
      >
        <TbCircleDotted className="text-amber-300/40 text-5xl" />
      </motion.div>

      {/* Floating animated stars */}
      {floatingStars.map((_, index) => (
        <motion.div
          key={`star-${index}`}
          initial={{ y: 0, x: 0, opacity: 0.3 }}
          animate={{
            y: [-(20 + index * 5), 20 + index * 5],
            x: [-(20 + index * 5), 20 + index * 5],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            delay: index * 0.5,
            repeatType: "reverse",
          }}
          className={`absolute hidden md:block`}
          style={{
            left: `${20 + index * 15}%`,
            top: `${10 + index * 15}%`,
          }}
        >
          <TbMessages className="text-amber-300/60 text-lg md:text-2xl" />
        </motion.div>
      ))}

      {/* Animated particles */}
      {particles.map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0.1,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: [0.1, 0.3, 0.1],
            scale: [
              Math.random() * 0.5 + 0.5,
              Math.random() * 0.8 + 0.7,
              Math.random() * 0.5 + 0.5,
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className={`absolute w-2 h-2 rounded-full bg-amber-400/30 hidden md:block`}
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
          }}
        />
      ))}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl text-center mb-6 font-extrabold 
                  bg-gradient-to-r from-[#FFD557] via-amber-400 to-[#FFC20D] 
                  bg-clip-text text-transparent tracking-tight"
      >
        Let's Connect
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block ml-2"
        >
          <TbMessages className="inline-block text-3xl md:text-4xl text-[#FFC20D]" />
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-zinc-400 max-w-xl mx-auto mb-10 px-4"
      >
        Have a question or want to work together? Drop me a message and I'll get
        back to you as soon as possible!
      </motion.p>

      <div className="md:flex justify-between items-center gap-12 mt-12 p-2 md:px-20 relative z-10 max-w-8xl mx-auto">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:flex-1 md:flex flex-col items-center gap-2.5 md:gap-8"
        >
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="/contact.webp"
            alt="contact illustration"
            className="h-[450px] w-fit object-contain drop-shadow-2xl 
                      filter brightness-110 contrast-125"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[#FAFAF9]/80 text-center max-w-md text-lg 
                      font-medium tracking-wide leading-relaxed"
          >
            <IoSparkles className="inline-block text-[#FFC20D] mr-2" />
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision
            <IoSparkles className="inline-block text-[#FFC20D] ml-2" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:flex-1 backdrop-blur-xl bg-[#141414]/60 
                     p-3.5 md:p-10 rounded-2xl border border-[#FFF2F2]/10 shadow-2xl
                    shadow-black/20 relative overflow-hidden"
        >
          {/* Glossy effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

          {/* Subtle light beam animation */}
          <motion.div
            initial={{ left: "-100%", opacity: 0.1 }}
            animate={{ left: "200%", opacity: 0.15 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: 1,
            }}
            className="absolute h-full w-1/3 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent transform -skew-x-12 top-0 pointer-events-none"
          />

          <AnimatePresence>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center justify-center h-80"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mb-6"
                >
                  <FaCheck className="text-zinc-900 text-3xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-amber-300 mb-2">
                  Message Sent!
                </h3>
                <p className="text-zinc-400 text-center max-w-md">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible!
                </p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-all duration-300"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-2.5 md:space-y-7 relative"
              >
                <FormInput
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
                <FormTextarea
                  placeholder="Your Message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "#FFC20D",
                    boxShadow: "0 0 20px rgba(255, 194, 13, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500
                           py-2 md:py-4 rounded-xl text-zinc-900 font-semibold
                           flex items-center justify-center gap-2 group text-lg tracking-wide
                           shadow-lg shadow-amber-500/10 transition-all duration-300 border border-amber-300/30"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-zinc-800 border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="group-hover:translate-x-1"
                      >
                        <FaPaperPlane />
                      </motion.div>
                    </>
                  )}

                  {/* Shine effect on hover */}
                  <motion.div
                    initial={{ left: "-100%", opacity: 0 }}
                    whileHover={{ left: "100%", opacity: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12"
                  />
                </motion.button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-xs text-zinc-500 mt-4"
                >
                  Your data is secure and will never be shared with third
                  parties
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
