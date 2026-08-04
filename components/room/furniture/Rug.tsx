"use client";

import { motion } from "framer-motion";

export default function Rug() {
  return (
    <motion.div
      className="absolute left-1/2 bottom-[2%] -translate-x-1/2 z-0"
      animate={{
        scale: [1, 1.01, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="h-44 w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,#F9F3EA 0%,#F2E6D5 60%,#E8D8C4 100%)",
          opacity: 0.95,
          boxShadow:
            "0 20px 35px rgba(0,0,0,.10), inset 0 0 30px rgba(255,255,255,.45)",
        }}
      >
        <div className="absolute inset-5 rounded-full border border-[#E4D1BA]/60" />

        <div className="absolute inset-10 rounded-full border border-[#EFE3D4]/60" />
      </div>
    </motion.div>
  );
}