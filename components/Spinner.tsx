"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

// Initial colors for the tiles
const initialColors = [
  "#FF008C",
  "#D309E1",
  "#9C1AFF",
  "#7700FF",
  "#FF6600",
  "#0F9D58",
];

// Custom shuffle function
const shuffleArray = (array: string[]): string[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Spinner = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);

    const colorInterval = setInterval(() => {
      if (loading) {
        setColors((prevColors) => shuffleArray(prevColors));
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(colorInterval);
    };
  }, [loading]);

  const tileVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: spring },
    collapse: (index: number) => ({
      scale: 0.2,
      x: [0, (index % 2 === 0 ? -1 : 1) * 50],
      y: [0, index < 2 ? -50 : 50],
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="min-w-full min-h-screen bg-background overflow-hidden p-0 m-0 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-background z-50"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <motion.ul
                layout
                className="relative flex w-[300px] flex-wrap justify-center gap-4"
              >
                {colors.slice(0, 4).map((background, index) => (
                  <motion.li
                    key={index}
                    className="tile"
                    layout
                    custom={index}
                    variants={tileVariants}
                    initial="hidden"
                    animate="visible"
                    exit="collapse"
                    style={{
                      background,
                      borderRadius: "10px",
                      width: "140px",
                      height: "140px",
                    }}
                  />
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && children}
    </>
  );
};

export default Spinner;
