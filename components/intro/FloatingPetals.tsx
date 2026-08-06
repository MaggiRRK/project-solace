"use client";

import { motion } from "framer-motion";

const petals = [
  { left: "35%", delay: 2 },
  { left: "50%", delay: 3.5 },
  { left: "65%", delay: 5 },
];

export default function FloatingPetals() {
  return (
    <>
      {petals.map((petal, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: -20,
            rotate: -10,
          }}
          animate={{
            opacity: [0, 0.45, 0],
            y: 650,
            x: [-10, 15, -5],
            rotate: 25,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 8,
            delay: petal.delay,
            ease: "easeInOut",
          }}
          className="absolute top-0"
          style={{ left: petal.left }}
        >
          <div className="h-4 w-2 rounded-full bg-white/70" />
        </motion.div>
      ))}
    </>
  );
}