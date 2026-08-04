"use client";

import { motion } from "framer-motion";

export default function MoonGlow() {
  return (
    <motion.div
      className="pointer-events-none absolute right-20 top-16"
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.55, 0.75, 0.55],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Outer Glow */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#FFF5D6]/20 blur-3xl" />

      {/* Middle Glow */}
      <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-[#FFF5D6]/30 blur-2xl" />

      {/* Moon */}
      <div className="h-32 w-32 rounded-full bg-[#FFF6D8] shadow-[0_0_80px_rgba(255,245,214,0.45)]" />
    </motion.div>
  );
}