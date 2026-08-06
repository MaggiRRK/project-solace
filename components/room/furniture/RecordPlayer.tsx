"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import RecordPlayerIllustration from "../svg/RecordPlayerIllustration";
import RecordPlayerModal from "@/components/music/RecordPlayerModal";

export default function RecordPlayer() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (sessionStorage.getItem("ignoreNextPlayerClick")) {
      sessionStorage.removeItem("ignoreNextPlayerClick");
      return;
    }

    setOpen(true);
  };

  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          w-40
          cursor-pointer
          transition-all
          hover:drop-shadow-[0_0_12px_rgba(255,216,106,0.45)]
        "
        onClick={handleClick}
      >
        <RecordPlayerIllustration />
      </motion.button>

      <RecordPlayerModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}