"use client";

import { motion } from "framer-motion";

export default function MoonLight() {
  return (
    <motion.div
      animate={{
  opacity: [0.25, 0.35, 0.25],
}}
transition={{
  duration: 10,
  repeat: Infinity,
  ease: "easeInOut",
}}
      className="
        absolute
        left-10
        top-10
        h-150
        w-125
        rounded-full
        bg-[#8FB8FF]
        blur-[170px]
        pointer-events-none
        z-0
      "
    />
  );
}