"use client";

import { motion } from "framer-motion";

interface RoomGlowProps {
  lampOn: boolean;
}

export default function RoomGlow({
  lampOn,
}: RoomGlowProps) {
  return (
    <>
      {/* Main Warm Glow */}
      <motion.div
        animate={{
          opacity: lampOn ? 0.55 : 0.28,
          scale: lampOn ? 1.15 : 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          absolute
          right-12
          bottom-0
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#FFD88A]
          blur-[140px]
          pointer-events-none
          z-0
        "
      />

      {/* Inner Glow */}
      <motion.div
        animate={{
          opacity: lampOn ? 0.4 : 0.15,
          scale: lampOn ? 1.15 : 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          absolute
          right-32
          bottom-20
          h-65
          w-65
          rounded-full
          bg-[#FFF3C4]
          blur-[90px]
          pointer-events-none
          z-0
        "
      />
    </>
  );
}