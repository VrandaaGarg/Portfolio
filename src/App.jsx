import "./index.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "@fontsource/josefin-sans";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import { motion } from "framer-motion";
import { RiCodeSSlashLine } from "react-icons/ri";

function App() {
  const [loading, setLoading] = useState(true);

  // Enhanced loader with animations and branding
  const Loader = () => {
    // Text animation for "Loading"
    const loadingText = "Loading...";

    return (
      <div className="flex justify-center items-center h-screen bg-zinc-900 flex-col relative overflow-hidden">
        {/* Background gradient effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-400 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-amber-400 rounded-full blur-3xl -z-10"
        />

        {/* Logo and primary loader */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Circular loader */}
          <div className="relative">
            <motion.div
              className="w-24 h-24 rounded-full border-4 border-zinc-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.div
              className="absolute top-0 left-0 w-24 h-24 rounded-full border-t-4 border-r-4 border-amber-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-0 left-0 w-24 h-24 rounded-full border-t-4 border-amber-300 opacity-60"
              animate={{ rotate: -180 }}
              initial={{ rotate: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            />
          </div>

          {/* Text animation */}
          <div className="h-8 mt-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0.1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex"
            >
              {loadingText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.1, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  }}
                  className="text-xl font-semibold text-amber-300"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-zinc-800 rounded-full overflow-hidden"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-300"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </div>
    );
  };

  useEffect(() => {
    // Add smooth scroll class to body
    document.body.classList.add("smooth-scroll");

    // Configure smooth scroll behavior
    const smoothScroll = (e) => {
      if (e.target.hash) {
        const element = document.querySelector(e.target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }
    };

    // Add event listener for anchor clicks
    document.addEventListener("click", smoothScroll);

    // Show the loader
    setTimeout(() => setLoading(false), 2000); // Increased slightly to show animation

    // Cleanup
    return () => {
      document.removeEventListener("click", smoothScroll);
      document.body.classList.remove("smooth-scroll");
    };
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <div
        className="relative overflow-x-hidden"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects showAll={true} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
