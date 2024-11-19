"use client";
import { motion, useScroll } from "framer-motion";

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007aff] via-[#8938e5] to-[#ff00cf] origin-left z-50"
      />
    </>
  );
};
