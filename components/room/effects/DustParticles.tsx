"use client";

import { motion } from "framer-motion";

const particles = [
  {
    id: 1,
    left: "18%",
    top: "30%",
    size: 5,
    duration: 8,
    delay: 0,
  },
  {
    id: 2,
    left: "42%",
    top: "70%",
    size: 4,
    duration: 10,
    delay: 1,
  },
  {
    id: 3,
    left: "70%",
    top: "38%",
    size: 6,
    duration: 9,
    delay: 2,
  },
  {
    id: 4,
    left: "82%",
    top: "62%",
    size: 5,
    duration: 11,
    delay: 3,
  },
  {
    id: 5,
    left: "30%",
    top: "46%",
    size: 4,
    duration: 12,
    delay: 4,
  },
];

export default function DustParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/60"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}