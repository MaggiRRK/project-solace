"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import WindowIllustration from "../svg/WindowIllustration";
import Curtains from "./Curtains";
import RoomShootingStar from "../effects/RoomShootingStar";

const paths = [
  { x1: 40, y1: 40, x2: 180, y2: 90 },
  { x1: 70, y1: 20, x2: 190, y2: 60 },
  { x1: 30, y1: 70, x2: 170, y2: 120 },
  { x1: 90, y1: 50, x2: 210, y2: 100 },
];

export default function Window() {
  const [showStar, setShowStar] = useState(false);

  const [path, setPath] = useState(paths[0]);

  const handleClick = () => {
    const randomPath =
      paths[Math.floor(Math.random() * paths.length)];

    setPath(randomPath);

    setShowStar(true);

    setTimeout(() => {
      setShowStar(false);
    }, 1300);
  };

  return (
    <motion.div
      animate={{
        y: [0, -3, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative w-56 cursor-pointer"
      onClick={handleClick}
    >
      <WindowIllustration glowing={showStar} />

      <Curtains />

      <RoomShootingStar
        show={showStar}
        x1={path.x1}
        y1={path.y1}
        x2={path.x2}
        y2={path.y2}
      />
    </motion.div>
  );
}