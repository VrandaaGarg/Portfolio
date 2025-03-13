import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";

const totalFrames = 44;
const framePath = (index) =>
  `/Twiggy/frame_${String(index).padStart(5, "0")}.png`;

function TwiggyScroll() {
  const [frameIndex, setFrameIndex] = useState(1);
  const containerRef = useRef(null);

  // Adjusted offset for smooth & slow animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["30% start", "80% end"],
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
    <div ref={containerRef} className="md:flex mt-12  items-center md:gap-6">
      <motion.div
        transition={{ delay: 1, ease: "anticipate" }}
        className=" md:h-96 w-full  md:flex-1 flex justify-center items-center"
      >
        <motion.img
          src={framePath(frameIndex)}
          alt="Animation Frame"
          className="h-[500px] w-fit "
        />
      </motion.div>

      <motion.div
        className="md:flex-1 text-xl md:text-3xl text-[#FAFAF9] mt-4 text-center"
        animate={{ x: [-2, 0, -1] }} // Subtle side-to-side movement
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.3, // Slower transition
          ease: "easeInOut", // Smooth motion
        }}
      >
        Food Ordering System
        <br />
        <span className="text-[#db2020] text-3xl md:text-4xl font-bold my-2 block">
          Smartbite
        </span>
        <p className="text-[#FAFAF9]/70 text-sm md:text-sm mt-2 px-16">
          A modern and efficient food ordering solution.SmartBite offers a
          seamless experience for both customers and restaurant owners.
          Streamlining operations and enhancing customer satisfaction.
        </p>
        <div className="flex justify-center gap-4 mt-5 text-sm ">
          <a
            href="https://twiggy.netlify.app/"
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
          <a href="https://github.com/VrandaaGarg/Twiggy" target="_blank">
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
    </div>
  );
}

export default TwiggyScroll;
