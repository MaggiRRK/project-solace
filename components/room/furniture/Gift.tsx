"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GiftLetter from "./GiftLetter";
import GiftIllustration from "../svg/GiftIllustration";


export default function Gift() {
 const [showGift, setShowGift] = useState(false);

  return (
    <>
      <motion.div
        className="w-28 cursor-pointer"
        whileHover={{
          scale: 1.08,
          rotate: -3,
          y: -6,
        }}
        whileTap={{
          scale: 0.94,
        }}
        animate={{
  y: [0, -3, 0],
  scale: showGift ? 1.08 : 1,
}}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => setShowGift(true)}
      >
        <GiftIllustration />
      </motion.div>
<AnimatePresence>
  {showGift && (
    <motion.div
      className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowGift(false)}
    />
  )}
</AnimatePresence>

        {showGift && (
   <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
    <GiftLetter
      open={showGift}
      onClose={() => setShowGift(false)}
    />
  </div>
)}
      
    </>
  );
}