"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LilyBouquet() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.92,
      }}
      animate={{
  opacity: 1,
  y: 0,
  scale: [1, 1.03, 1],
}}
      transition={{
  opacity: {
    duration: 1.8,
  },
  y: {
    duration: 1.8,
  },
  scale: {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  },
}}
      className="relative flex justify-center"
    >
      {/* Soft Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{
          delay: 1,
          duration: 2,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-90
          w-90
          rounded-full
          bg-[#FFF8E7]
          blur-[90px]
        "
      />

      {/* Gentle floating motion */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/lillies.png"
          alt="Lilies"
          width={430}
          height={540}
          priority
          draggable={false}
          className="
            relative
            z-10
            select-none
            pointer-events-none
            drop-shadow-[0_25px_45px_rgba(0,0,0,0.08)]
          "
        />
      </motion.div>
    </motion.div>
  );
}