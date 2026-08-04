"use client";

import { motion } from "framer-motion";
import ShelfIllustration from "../svg/ShelfIllustration";

export default function Shelf() {
  return (
    <motion.div
      className="absolute left-[10%] top-[22%] w-60"
      animate={{
        y: [0, -2, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ShelfIllustration />
    </motion.div>
  );
}