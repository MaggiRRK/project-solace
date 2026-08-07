"use client";

import { motion } from "framer-motion";
import GiftIllustration from "../svg/GiftIllustration";

export default function Gift() {

  return (
    <motion.div
      className="w-28 cursor-pointer"

      whileHover={{
        scale:1.08,
        rotate:-3,
        y:-6
      }}

      whileTap={{
        scale:0.94
      }}

      animate={{
        y:[0,-3,0]
      }}

      transition={{
        duration:2.5,
        repeat:Infinity,
        ease:"easeInOut"
      }}

      onClick={()=>{
        window.location.href = "/letter";
      }}
    >

      <GiftIllustration />

    </motion.div>
  );
}