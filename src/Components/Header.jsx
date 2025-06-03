import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaBriefcase } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
// import { LuSparks } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiCodeSSlashLine } from "react-icons/ri";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Transform properties based on scroll
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0.95, 1]);
  const headerBlur = useTransform(scrollYProgress, [0, 0.05], [8, 12]);
  const headerScale = useTransform(scrollYProgress, [0, 0.05], [1, 0.98]);

  // Check if page is scrolled for styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links configuration
  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Projects", path: "/projects", icon: <FaBriefcase /> },
  ];

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -3,
      scale: 1.1,
      color: "#FFC20D",
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.header
      style={{
        opacity: headerOpacity,
        scale: headerScale,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className={`fixed top-2 left-0 right-0 z-50 mx-3 md:mx-auto md:w-[75%] max-w-7xl 
                  transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`mx-auto px-4 sm:px-6 bg-zinc-900/70 backdrop-blur-lg
                   rounded-full border border-zinc-700/50 ${
                     scrolled ? "shadow-lg shadow-black/10" : ""
                   }`}
      >
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex-shrink-0 cursor-pointer"
          >
            <RouterLink to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <RiCodeSSlashLine className="text-amber-400 text-2xl md:text-3xl" />
              </motion.div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Vranda Garg
              </span>
            </RouterLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="relative"
                >
                  {link.path === "/" || link.path === "/projects" ? (
                    <RouterLink
                      to={link.path}
                      className="flex items-center space-x-1.5 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-amber-300 transition-colors duration-200"
                    >
                      <motion.span
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {link.icon}
                      </motion.span>
                      <span>{link.name}</span>
                    </RouterLink>
                  ) : (
                    <ScrollLink
                      to={link.path}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-90}
                      className="flex items-center space-x-1.5 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-amber-300 cursor-pointer transition-colors duration-200"
                    >
                      <motion.span
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {link.icon}
                      </motion.span>
                      <span>{link.name}</span>
                    </ScrollLink>
                  )}

                  {/* Animated underline on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-amber-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}

              {/* Resume Button */}
              <motion.a
                href="/VrandaGarg.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFC20D",
                  color: "#121212",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-zinc-800/70 hover:bg-amber-400 text-white hover:text-zinc-900 
                          border border-amber-400/30 flex items-center gap-1.5 px-4 py-1.5 
                          rounded-full text-sm font-medium transform transition-all duration-300"
              >
                <HiDocumentDownload className="text-lg" />
                Resume
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-1"
                >
                  <IoGameControllerOutline className="text-xs" />
                </motion.span>
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-400 hover:text-amber-300 hover:bg-zinc-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <motion.div
          className="md:hidden absolute top-full right-0 w-full mt-2 bg-zinc-900/95 backdrop-blur-lg border border-zinc-800/50 rounded-xl overflow-hidden"
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          exit="exit"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                {link.path === "/" || link.path === "/projects" ? (
                  <RouterLink
                    to={link.path}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-amber-300 hover:bg-zinc-800/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </RouterLink>
                ) : (
                  <ScrollLink
                    to={link.path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-amber-300 hover:bg-zinc-800/50 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </ScrollLink>
                )}
              </motion.div>
            ))}

            {/* Mobile Resume Button */}
            <motion.a
              href="/VrandaGarg.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 mx-3 my-2 px-4 py-2 rounded-lg bg-amber-400 text-zinc-900 font-medium text-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HiDocumentDownload />
              <span>Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>
      {/* Progress bar
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      /> */}
    </motion.header>
  );
};

export default Header;
