"use client";

import { AnimatePresence, motion } from "framer-motion";

interface RoomShootingStarProps {
  show: boolean;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export default function RoomShootingStar({
  show,
  x1,
  y1,
  x2,
  y2,
}: RoomShootingStarProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            x: x1,
            y: y1,
            rotate: -18,
            scale: 0.6,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: x2,
            y: y2,
            scale: [0.6, 1, 0.9],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="absolute top-0 left-0 pointer-events-none z-50"
        >
          <svg
            width="90"
            height="40"
            viewBox="0 0 90 40"
            fill="none"
          >
            {/* Tail */}
            <path
              d="M5 20 C25 20 45 20 68 20"
              stroke="#FFF7C7"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.7"
            />

            <path
              d="M18 20 C34 20 50 20 68 20"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Star */}
            <g transform="translate(70 20)">
              <path
                d="
                  M0 -6
                  L1.6 -1.6
                  L6 0
                  L1.6 1.6
                  L0 6
                  L-1.6 1.6
                  L-6 0
                  L-1.6 -1.6
                  Z
                "
                fill="#FFFBEA"
              />
            </g>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}