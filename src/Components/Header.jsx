import React, { useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, useScroll } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return <div className=""></div>;
};

export default Header;
