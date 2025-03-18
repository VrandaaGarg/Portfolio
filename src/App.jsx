import "./index.css";
import "./App.css";
import Headers from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import CodingStats from "./Components/CodingStats";
import CustomCursor from "./Components/CustomCursor";
import "@fontsource/josefin-sans"; // Default weight (400)
import { useState, useEffect } from "react";

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
    // Show the loader for 2 seconds
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div
      className="bg-[#121212] "
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
    >
      <CustomCursor />
      <Headers />
      <About />
      <Skills />
      <CodingStats />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
