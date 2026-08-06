"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
        {showGift && (
  <div className="absolute right-full mr-6 bottom-32 z-50">
    <GiftLetter
      open={showGift}
      onClose={() => setShowGift(false)}
    />
  </div>
)}
      
    </>
  );
}