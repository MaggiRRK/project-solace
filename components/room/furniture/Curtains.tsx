"use client";

import { motion } from "framer-motion";

export default function Curtains() {
  return (
    <>
      {/* Left Curtain */}
      <motion.div
        animate={{
          rotate: [-1.2, 1.2, -1.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-18px] top-0 origin-top"
      >
        <div
          className="h-[255px] w-[48px] rounded-b-[28px]"
          style={{
            background:
              "linear-gradient(to right,#FFFDF8,#F5EFE6,#EFE5D8)",
            boxShadow:
              "6px 0 18px rgba(0,0,0,.08)",
          }}
        />

        <div className="absolute inset-y-0 left-3 w-[2px] bg-white/50" />
        <div className="absolute inset-y-0 left-6 w-[2px] bg-white/35" />
        <div className="absolute inset-y-0 left-9 w-[2px] bg-white/50" />
      </motion.div>

      {/* Right Curtain */}

      <motion.div
        animate={{
          rotate: [1.2, -1.2, 1.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-18px] top-0 origin-top"
      >
        <div
          className="h-[255px] w-[48px] rounded-b-[28px]"
          style={{
            background:
              "linear-gradient(to left,#FFFDF8,#F5EFE6,#EFE5D8)",
            boxShadow:
              "-6px 0 18px rgba(0,0,0,.08)",
          }}
        />

        <div className="absolute inset-y-0 right-3 w-[2px] bg-white/50" />
        <div className="absolute inset-y-0 right-6 w-[2px] bg-white/35" />
        <div className="absolute inset-y-0 right-9 w-[2px] bg-white/50" />
      </motion.div>

      {/* Curtain Rod */}

      <div
        className="absolute -top-8 left-[-18px] h-3 rounded-full"
        style={{
          width: "calc(100% + 36px)",
          background: "#B6845E",
        }}
      />
    </>
  );
}