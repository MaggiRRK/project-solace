"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface GiftLetterProps {
  open: boolean;
  onClose: () => void;
}

export default function GiftLetter({
  open,
  onClose,
}: GiftLetterProps) {
  const [reading, setReading] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
        initial={{
    opacity:0
}}

animate={{
    opacity:1
}}

exit={{
    opacity:0
}}

transition={{
    duration:0.25
}}
          className="
fixed
left-1/2
top-1/2
-z-?
w-[90vw]
max-w-md

-translate-x-1/2
-translate-y-1/2

origin-left
rounded-2xl
border
border-[#E7D8C7]
bg-[#FFFCF8]
p-6
shadow-xl
z-50
"
        >
                  <>
          <h3 className="heading text-2xl text-[#6B4F3B]">
            🎁 A Little Gift
          </h3>

          <p className="mt-4 text-[#6B4F3B] leading-7">
            I left something here for you.
          </p>

          {!reading && (
            <button
              onClick={() => setReading(true)}
              className="
                mt-6
                text-[#9C7554]
                hover:underline
              "
            >
              💌 Open Letter
            </button>
          )}

          <AnimatePresence>
  {reading && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6 border-t border-[#EADBCB] pt-6"
    >
      <Image
  src="/images/letter.png"
  alt="Letter"
  width={100}
  height={300}
  className="w-full h-auto rounded-lg shadow-md"
/>

      <button
        onClick={() => setReading(false)}
        className="mt-6 text-[#9C7554] hover:underline"
      >
        ← Fold Letter
      </button>
    </motion.div>
  )}
</AnimatePresence>

          <button
            onClick={onClose}
            className="
              mt-6
              block
              text-[#9C7554]
              hover:underline
            "
          >
            🎁 Put it back
          </button>
        </>
      </motion.div>
    )}
  </AnimatePresence>
);
}