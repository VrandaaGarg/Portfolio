import "./index.css";
import "./App.css";
import Header from "./Components/Header"; // Updated from Headers to Header to match component name
import Footer from "./Components/Footer";
import "@fontsource/josefin-sans"; // Default weight (400)
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";

function App() {
  const [loading, setLoading] = useState(true);
  const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-[#121212] flex-col">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#FFC20D]"></div>
        <h1 className="text-[#FAFAF9] text-center font-semibold text-2xl mt-3 ">
          Loading...
        </h1>
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
    setTimeout(() => setLoading(false), 1000);

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
