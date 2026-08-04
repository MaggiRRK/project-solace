"use client";

import { motion } from "framer-motion";

export default function Plant() {
  return (
    <motion.div
      animate={{
        rotate: [-1.5, 1.5, -1.5],
        y: [0, -2, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative w-20 h-32"
    >
      {/* Shadow */}
      <div className="absolute bottom-0 left-2 h-4 w-16 rounded-full bg-black/10 blur-md" />

      {/* Pot */}
      <div className="absolute bottom-0 left-4 h-10 w-12 rounded-b-xl bg-[#B6845E]" />

      {/* Pot Rim */}
      <div className="absolute bottom-9 left-2 h-3 w-16 rounded-full bg-[#C7966D]" />

      {/* Leaf 1 */}
      <motion.div
        animate={{ rotate: [-3, 3, -3] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1 bottom-8 h-14 w-8 origin-bottom rounded-full bg-[#90AE8C]"
      />

      {/* Leaf 2 */}
      <motion.div
        animate={{ rotate: [4, -4, 4] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-6 bottom-8 h-16 w-9 origin-bottom rounded-full bg-[#7FA77A]"
      />

      {/* Leaf 3 */}
      <motion.div
        animate={{ rotate: [-5, 5, -5] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-12 bottom-8 h-14 w-8 origin-bottom rounded-full bg-[#90AE8C]"
      />

      {/* Center Leaf */}
      <motion.div
        animate={{ rotate: [2, -2, 2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-6 bottom-14 h-16 w-9 origin-bottom rounded-full bg-[#7DA56F]"
      />
    </motion.div>
  );
}