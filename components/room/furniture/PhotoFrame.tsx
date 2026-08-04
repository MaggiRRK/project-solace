"use client";

import { motion } from "framer-motion";
import PhotoFrameIllustration from "../svg/PhotoFrameIllustration";

interface Props {
  rotate?: number;
  type?: "moon" | "flower" | "note";
}

export default function PhotoFrame({
  rotate = 0,
  type = "moon",
}: Props) {
  return (
    <motion.div
      className="w-20"
      style={{
        rotate: `${rotate}deg`,
      }}
      animate={{
        y: [0, -1, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <PhotoFrameIllustration type={type} />
    </motion.div>
  );
}