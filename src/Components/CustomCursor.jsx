import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const element = document.elementFromPoint(mousePosition.x, mousePosition.y);
      const isClickable = element?.closest('a, button, input, textarea, [role="button"]');
      setIsPointer(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousemove', updateCursorType);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousemove', updateCursorType);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 1.4 : isClicking ? 0.7 : 1,
          rotate: isPointer ? 45 : 0,
          background: isPointer 
            ? 'linear-gradient(45deg, #FFC20D, #FFD557)' 
            : 'linear-gradient(45deg, #FFD557, #FFC20D)',
        }}
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 30,
          mass: 0.3,
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.5 : isClicking ? 0.9 : 1,
          borderColor: isPointer ? "#FFD557" : "#FFC20D",
          opacity: isPointer ? 0.8 : 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
          mass: 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor;
