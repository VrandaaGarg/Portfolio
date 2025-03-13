import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";

const totalFrames = 24;
const framePath = (index) =>
  `/Aarcadia/frame_${String(index).padStart(5, "0")}.png`;

function AnimatedScroll() {
  const [frameIndex, setFrameIndex] = useState(1);
  const containerRef = useRef(null);

  // Adjusted offset for smooth & slow animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Full section scroll
  });

  // **Smooth out progress to slow down animation**
  const currentFrame = useTransform(scrollYProgress, [0, 1], [1, totalFrames], {
    clamp: false,
  });

  useEffect(() => {
    let lastFrame = 1;

    const handleFrameChange = (latest) => {
      const frame = Math.min(Math.floor(latest), totalFrames);
      if (frame !== lastFrame) {
        setTimeout(() => {
          setFrameIndex(frame);
          lastFrame = frame;
        }, 2); // Adds a small delay to slow animation
      }
    };

    return currentFrame.onChange(handleFrameChange);
  }, [currentFrame]);

  return (
    <div ref={containerRef} className=" md:flex items-center md:gap-6">
      <motion.div
        transition={{ delay: 1, ease: "easeIn" }}
        className="md:hidden md:h-96 w-fit  md:flex-1 flex justify-center items-center"
      >
        <motion.img
          src={framePath(frameIndex)}
          alt="Animation Frame"
          className="w-full h-fit"
        />
      </motion.div>
      <motion.div
        className="md:flex-1 text-xl md:text-3xl text-[#FAFAF9] text-center"
        animate={{ x: [-2, 0, -1] }} // Subtle side-to-side movement
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.3, // Slower transition
          ease: "easeInOut", // Smooth motion
        }}
      >
        Level Up ur Gaming
        <br /> Experience with
        <br />
        <span className="bg-gradient-to-r text-3xl md:text-4xl font-bold from-[#57c7ff] to-[#5913fc] bg-clip-text text-transparent my-2 block">
          Aarcadia
        </span>
        <p className="text-[#FAFAF9]/70 text-sm md:text-sm mt-2 px-16">
          A Gaming hub where users can create a profile and enjoy both
          single-player and two-player games. Compete with others, track your
          progress, and climb the leaderboard to see your ranking! 🚀🎮
        </p>
        <div className="flex justify-center gap-4 mt-5 text-sm ">
          <a
            href="https://aarcadia.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button
              whileHover={{
                rotate: 2,
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#FFC20D]/30 px-4 py-2 text-[#FAFAF9] border-1 border-[#FFD557] rounded-lg"
            >
              Live Demo
            </motion.button>
          </a>
          <a href="https://github.com/VrandaaGarg/Arcadia" target="_blank">
            <motion.button
              whileHover={{
                rotate: 2,
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#FFC20D]/30 px-4 py-2 text-[#FAFAF9] border-1 border-[#FFD557] rounded-lg"
            >
              Code <FaGithub className="ml-3 inline" />
            </motion.button>
          </a>
        </div>
      </motion.div>

      <motion.div
        transition={{ delay: 1, ease: "easeIn" }}
        className="hidden md:flex md:h-96 w-fit  md:flex-1  justify-center items-center"
      >
        <motion.img
          src={framePath(frameIndex)}
          alt="Animation Frame"
          className="w-full h-fit"
        />
      </motion.div>
    </div>
  );
}

export default AnimatedScroll;
