"use client";

import { motion } from "framer-motion";

interface LampProps {
  lampOn: boolean;
  onToggle: () => void;
}

export default function Lamp({
  lampOn,
  onToggle,
}: LampProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      animate={{
        y: [0, -1.5, 0],
      }}
      transition={{
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative flex flex-col items-center cursor-pointer"
    >
      {/* Lamp Shade */}
      <motion.div
        animate={{
          boxShadow: lampOn
            ? "0 0 35px rgba(255,230,150,0.65)"
            : "0 0 12px rgba(255,230,150,0.18)",
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative h-14 w-16 rounded-t-full rounded-b-lg"
        style={{
          background:
            "linear-gradient(to bottom,#FFF9EF,#F2DFC4)",
        }}
      />

      {/* Pole */}
      <div className="h-20 w-1 bg-[#A98664]" />

      {/* Base */}
      <div className="h-3 w-12 rounded-full bg-[#8D6A4A]" />

      {/* Tiny Bulb Glow */}
      <motion.div
        animate={{
          opacity: lampOn ? 1 : 0.3,
          scale: lampOn ? 1.2 : 0.8,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          absolute
          top-8
          left-1/2
          h-5
          w-5
          -translate-x-1/2
          rounded-full
          bg-[#FFF4BF]
          blur-md
          pointer-events-none
        "
      />
    </motion.button>
  );
}