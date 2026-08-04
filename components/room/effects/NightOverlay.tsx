"use client";

import { motion } from "framer-motion";

export default function NightOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.32, 0.36, 0.32],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none absolute inset-0 z-10"
    >
      {/* Main Night Tint */}
      <div className="absolute inset-0 bg-[#1B2338]/28" />

      {/* Dark Corners */}
      <div
        className="
          absolute
          inset-0
          shadow-[inset_0_0_250px_rgba(0,0,0,0.55)]
        "
      />

      {/* Slight Blue Top */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[45%]
          bg-linear-to-b
          from-[#1D2840]/30
          to-transparent
        "
      />
    </motion.div>
  );
}