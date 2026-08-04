"use client";

import { motion } from "framer-motion";
import FairyLightsIllustration from "../svg/FairyLightsIllustration";

export default function FairyLights() {
  return (
    <motion.div
      className="w-90"
      animate={{
        rotate: [-0.6, 0.6, -0.6],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <FairyLightsIllustration />

      {Array.from({ length: 9 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-4 w-4 rounded-full bg-[#FFE8A3] blur-md"
          style={{
            left: `${8 + i * 10}%`,
            top: "38px",
          }}
          animate={{
            opacity: [0.25, 0.9, 0.25],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  );
}
