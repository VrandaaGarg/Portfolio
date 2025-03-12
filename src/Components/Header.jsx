import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed w-full z-50">
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transition: "transform 0.2s ease-linear",
        }}
        className="h-1 absolute  top-0 left-0 origin-left w-full bg-[#7886C7]"
      ></motion.div>

      <header className="bg-[#242424] text-white border-b-[0.2px] border-b-[#171717]/60 shadow-md shadow-[#171717]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link to="home" smooth={true} duration={500} className="r">
              <div className="flex-shrink-0">
                <p className="bg-gradient-to-r from-[#FFD557] to-[#FFC20D] bg-clip-text text-transparent text-2xl font-bold cursor-pointer">
                  VrandaaGarg
                </p>
              </div>
            </Link>

            {/* Navigation Menu */}
            <nav className=" hidden md:flex space-x-10 text-lg">
              {/* About Link with Animated Underline */}
              <div className="relative group flex flex-col ">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="transition-all cursor-pointer text-[#FAFAF9] font-semibold"
                  style={{ transition: "text-shadow 0.3s ease-in-out" }}
                  onMouseEnter={(e) =>
                    (e.target.style.textShadow =
                      "2px 2px 5px rgba(44, 44, 44, 0.1)")
                  }
                  onMouseLeave={(e) => (e.target.style.textShadow = "none")}
                >
                  About
                </Link>

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD557] to-[#FFC20D] transition-all duration-300 group-hover:w-full" />
              </div>

              <div className="relative group flex flex-col ">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="transition-all cursor-pointer text-[#FAFAF9] font-semibold"
                  style={{ transition: "text-shadow 0.3s ease-in-out" }}
                  onMouseEnter={(e) =>
                    (e.target.style.textShadow =
                      "2px 2px 5px rgba(44, 44, 44, 0.1)")
                  }
                  onMouseLeave={(e) => (e.target.style.textShadow = "none")}
                >
                  Skills
                </Link>

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD557] to-[#FFC20D] transition-all duration-300 group-hover:w-full" />
              </div>

              <div className="relative group flex flex-col ">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="transition-all cursor-pointer text-[#FAFAF9] font-semibold"
                  style={{ transition: "text-shadow 0.3s ease-in-out" }}
                  onMouseEnter={(e) =>
                    (e.target.style.textShadow =
                      "2px 2px 5px rgba(44, 44, 44, 0.1)")
                  }
                  onMouseLeave={(e) => (e.target.style.textShadow = "none")}
                >
                  Projects
                </Link>

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD557] to-[#FFC20D] transition-all duration-300 group-hover:w-full" />
              </div>

              <div className="relative group flex flex-col ">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="transition-all cursor-pointer text-[#FAFAF9] font-semibold"
                  style={{ transition: "text-shadow 0.3s ease-in-out" }}
                  onMouseEnter={(e) =>
                    (e.target.style.textShadow =
                      "2px 2px 5px rgba(44, 44, 44, 0.1)")
                  }
                  onMouseLeave={(e) => (e.target.style.textShadow = "none")}
                >
                  Experience
                </Link>

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD557] to-[#FFC20D] transition-all duration-300 group-hover:w-full" />
              </div>

              <div className="relative group flex flex-col ">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="transition-all cursor-pointer text-[#FAFAF9] font-semibold"
                  style={{ transition: "text-shadow 0.3s ease-in-out" }}
                  onMouseEnter={(e) =>
                    (e.target.style.textShadow =
                      "2px 2px 5px rgba(44, 44, 44, 0.1)")
                  }
                  onMouseLeave={(e) => (e.target.style.textShadow = "none")}
                >
                  Achievements
                </Link>

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD557] to-[#FFC20D] transition-all duration-300 group-hover:w-full" />
              </div>
            </nav>

            {/* Call-to-Action Button */}
            {/* <Link to="contact" smooth={true} duration={500} className="">
              <motion.div
                initial={{
                  backgroundColor: "rgba(169, 181, 223, 0.5)", // 50% opacity
                  boxShadow: "0px 0px 0px rgba(169, 181, 223, 0)", // No shadow initially
                }}
                whileHover={{
                  backgroundColor: "rgba(169, 181, 223, 0.76)", // 80% opacity
                  boxShadow: "0px 0px 10px rgba(169, 181, 223, 0.5)", // Soft glow
                  scale: 1.05, // Slightly bigger
                  rotate: 2, // Slightly rotate
                }}
                transition={{ duration: 0.3 }}
                className="hidden md:block rounded-md border border-[#dadff2] px-4 py-2 text-white"
              >
                Contact Me
              </motion.div>
            </Link> */}

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                <motion.div
                  initial={{ rotate: 0, opacity: 1 }}
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="h-6 w-6" />
                  ) : (
                    <FaBars className="h-6 w-6" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-5 space-y-4">
              {["home", "services", "about", "contact"].map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  className="block text-lg hover:text-gray-300 transition-all cursor-pointer text-center"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
