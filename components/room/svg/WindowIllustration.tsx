"use client";

import { motion } from "framer-motion";

interface WindowIllustrationProps {
  glowing?: boolean;
}

export default function WindowIllustration({
  glowing = false,
}: WindowIllustrationProps) {
  return (
    <svg
      viewBox="0 0 300 380"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wooden Frame */}
      <rect
        x="20"
        y="20"
        width="260"
        height="340"
        rx="28"
        fill="#B98A63"
      />

      {/* Sky */}
      <rect
        x="40"
        y="40"
        width="220"
        height="300"
        rx="18"
        fill="#7CB8F5"
      />

      {/* Moon Glow */}
      <motion.circle
        cx="205"
        cy="90"
        r="42"
        fill="#FFF9D8"
        animate={{
          opacity: glowing ? 0.28 : 0,
          scale: glowing ? 1.15 : 1,
        }}
        transition={{
          duration: 0.8,
        }}
      />

      {/* Moon */}
      <motion.circle
        cx="205"
        cy="90"
        r="28"
        fill="#FFF7D6"
        animate={{
          scale: glowing ? 1.08 : 1,
        }}
        transition={{
          duration: 0.8,
        }}
      />

      {/* Moon Cutout */}
      <circle
        cx="217"
        cy="82"
        r="25"
        fill="#7CB8F5"
      />

      {/* Stars */}
      <circle cx="90" cy="85" r="3" fill="#FFF9E5" />
      <circle cx="65" cy="130" r="2.5" fill="#FFF9E5" />
      <circle cx="140" cy="70" r="2.5" fill="#FFF9E5" />
      <circle cx="175" cy="135" r="2" fill="#FFF9E5" />
      <circle cx="110" cy="165" r="2" fill="#FFF9E5" />

      {/* Trees */}
      <g>
        <polygon
          points="55,280 85,210 115,280"
          fill="#355B3C"
        />

        <polygon
          points="95,290 130,205 165,290"
          fill="#2F5136"
        />

        <polygon
          points="145,280 180,220 215,280"
          fill="#355B3C"
        />

        <polygon
          points="190,290 225,215 255,290"
          fill="#2F5136"
        />
      </g>

      {/* Glass Reflection */}
      <path
        d="M70 55 Q120 120 95 310"
        stroke="white"
        strokeWidth="8"
        strokeOpacity="0.15"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}