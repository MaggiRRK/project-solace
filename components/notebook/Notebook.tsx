"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import NotebookIllustration from "../room/svg/NotebookIllustration";
import NotebookModal from "./NotebookModal";

export default function Notebook() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{
          y: -6,
          rotate: -2,
          scale: 1.03,
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
        <div className="w-28 drop-shadow-xl">
          <NotebookIllustration />
        </div>
      </motion.button>

      <NotebookModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}