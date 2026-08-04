"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import GiftIllustration from "../svg/GiftIllustration";
import GiftModal from "../../UI/GiftModal";

export default function Gift() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="w-28 cursor-pointer"
        whileHover={{
          scale: 1.08,
          rotate: -3,
        }}
        whileTap={{
          scale: 0.92,
        }}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        onClick={() => setOpen(true)}
      >
        <GiftIllustration />
      </motion.div>

      <GiftModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}