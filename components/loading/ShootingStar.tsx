"use client";

import { motion } from "framer-motion";

export default function ShootingStar() {
  return (
    <motion.div
      className="pointer-events-none absolute -top-10 -left-40 z-0"
      animate={{
        x: [0, 1400],
        y: [0, 700],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        repeatDelay: 10,
        ease: "easeOut",
      }}
    >
      <div
        className="h-[2px] w-44 rounded-full"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,.95))",
          transform: "rotate(25deg)",
          boxShadow: "0 0 12px rgba(255,255,255,.65)",
        }}
      />
    </motion.div>
  );
}