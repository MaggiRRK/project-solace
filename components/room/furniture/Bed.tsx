"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BedIllustration from "../svg/BedIllustration";

interface BedProps {
  onRevealNotebook?: () => void;
}

export default function Bed({
  onRevealNotebook,
}: BedProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;

    setClicked(true);

    setTimeout(() => {
      onRevealNotebook?.();
    }, 350);

    setTimeout(() => {
      setClicked(false);
    }, 900);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.98,
      }}
      animate={
        clicked
          ? {
              scale: [1, 0.98, 1],
              rotate: [0, -0.5, 0.5, 0],
            }
          : {
              y: [0, -2, 0],
            }
      }
      transition={{
        duration: clicked ? 0.8 : 5,
        repeat: clicked ? 0 : Infinity,
        ease: "easeInOut",
      }}
      className="cursor-pointer bg-transparent border-none p-0"
    >
      <div className="w-82 drop-shadow-2xl">
        <BedIllustration />
      </div>
    </motion.button>
  );
}