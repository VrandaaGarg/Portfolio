import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0.5 : 1 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {isLoading && (
        <div className="animate-pulse bg-gray-200 h-full w-full rounded-lg" />
      )}
      {currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          className={className}
          loading="lazy"
          {...props}
        />
      )}
    </motion.div>
  );
};

export default LazyImage;
