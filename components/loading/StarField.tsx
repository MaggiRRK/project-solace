"use client";

import { motion } from "framer-motion";

const stars = [
  { left: "8%", top: "12%", size: 2, duration: 3 },
  { left: "15%", top: "28%", size: 3, duration: 5 },
  { left: "24%", top: "18%", size: 2, duration: 4 },
  { left: "33%", top: "10%", size: 4, duration: 6 },
  { left: "42%", top: "30%", size: 2, duration: 4 },
  { left: "53%", top: "15%", size: 3, duration: 5 },
  { left: "64%", top: "24%", size: 2, duration: 3 },
  { left: "75%", top: "12%", size: 4, duration: 6 },
  { left: "84%", top: "28%", size: 2, duration: 5 },
  { left: "92%", top: "18%", size: 3, duration: 4 },

  { left: "12%", top: "48%", size: 2, duration: 5 },
  { left: "22%", top: "60%", size: 3, duration: 4 },
  { left: "37%", top: "50%", size: 2, duration: 6 },
  { left: "48%", top: "67%", size: 3, duration: 5 },
  { left: "60%", top: "45%", size: 2, duration: 3 },
  { left: "72%", top: "58%", size: 4, duration: 5 },
  { left: "82%", top: "48%", size: 2, duration: 4 },

  { left: "18%", top: "82%", size: 2, duration: 4 },
  { left: "36%", top: "88%", size: 3, duration: 6 },
  { left: "58%", top: "84%", size: 2, duration: 5 },
  { left: "76%", top: "80%", size: 3, duration: 4 },
];

export default function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 12px rgba(255,255,255,.6)",
          }}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}