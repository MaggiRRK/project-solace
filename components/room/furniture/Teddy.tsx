"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import TeddyIllustration from "../svg/TeddyIllustration";

interface TeddyProps {
  onClick?: () => void;
}

export default function Teddy({ onClick }: TeddyProps) {
  const [isHappy, setIsHappy] = useState(false);

  const handleClick = () => {
    onClick?.();

    setIsHappy(true);

    setTimeout(() => {
      setIsHappy(false);
    }, 1200);
  };

  return (
    <motion.div
      animate={{
        y: [0, -3, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      {/* Warm Teddy Glow */}
      <motion.div
        animate={{
          opacity: isHappy ? 0.45 : 0,
          scale: isHappy ? 1.25 : 0.8,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-24
          w-24
          rounded-full
          bg-[#FFE6A5]
          blur-2xl
          pointer-events-none
        "
      />

      <motion.button
        onClick={handleClick}
        whileHover={{
          scale: 1.06,
          rotate: -2,
        }}
        whileTap={{
          scale: 0.92,
        }}
        animate={
          isHappy
            ? {
                scale: [1, 0.93, 1.08, 1],
                rotate: [0, -5, 5, 0],
              }
            : {}
        }
        transition={{
          duration: 0.6,
        }}
        className="relative z-20 cursor-pointer"
      >
        <div className="w-20 drop-shadow-xl">
          <TeddyIllustration />
        </div>
      </motion.button>
    </motion.div>
  );
}