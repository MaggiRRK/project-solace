"use client";

import { motion } from "framer-motion";
import ThoughtJarIllustration from "../svg/ThoughtJarIllustration";

interface ThoughtJarProps {
  onOpen: () => void;
}

export default function ThoughtJar({
  onOpen,
}: ThoughtJarProps) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
        rotate: [-2, 2, -2, 0],
      }}
      transition={{
        duration: 0.35,
      }}
      className="w-24 cursor-pointer bg-transparent border-none p-0"
    >
      <motion.div
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ThoughtJarIllustration />
      </motion.div>
    </motion.button>
  );
}