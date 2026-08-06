"use client";

import { motion } from "framer-motion";
import NotebookIllustration from "../room/svg/NotebookIllustration";

interface Props {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function Notebook({
  open,
  onOpen,
}: Props) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{
  scale: 1.05,
  y: -4,
  rotate: -2,
}}
      whileTap={{
        scale: 0.96,
      }}
      animate={{
        y: [0, -3, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="cursor-pointer"
    >
      <div className="w-28 drop-shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
        <NotebookIllustration />
      </div>
    </motion.button>
  );
}