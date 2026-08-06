"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import thoughts from "../data/thoughts";

interface ThoughtNoteProps {
  open: boolean;
  onClose: () => void;
}

export default function ThoughtNote({
  open,
  onClose,
}: ThoughtNoteProps) {
  const [index, setIndex] = useState(0);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
     initial={{
  opacity: 0,
  x: -35,
  scaleX: 0.2,
  rotate: -2,
}}
       animate={{
  opacity: 1,
  x: 0,
  scaleX: 1,
  rotate: 0,
}}
          exit={{
            opacity: 0,
            x: -20,
            scaleX: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            origin-left
            rounded-2xl
            bg-[#FFFCF8]
            border
            border-[#E7D8C7]
            p-5
            shadow-[0_15px_40px_rgba(0,0,0,0.18)]
            w-64
          "
        >
          <h3 className="heading text-xl text-[#6B4F3B]">
            🌸 A Little Thought
          </h3>

          <AnimatePresence mode="wait">
  <motion.p
    key={index}
    initial={{
      opacity: 0,
      y: 8,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    exit={{
      opacity: 0,
      y: -8,
    }}
    transition={{
      duration: 0.25,
    }}
    className="
      handwriting
      mt-4
      whitespace-pre-line
      text-[22px]
      leading-9
      text-[#5B4638]
    "
  >
    {thoughts[index]}
  </motion.p>
</AnimatePresence>

          <button
  onClick={() =>
    setIndex(
      Math.floor(Math.random() * thoughts.length)
    )
  }
  className="
    mt-6
    text-sm
    text-[#9C7554]
    transition
    hover:underline
  "
>
  Shake Jar ✨
</button>
<button
  onClick={onClose}
  className="
    mt-2
    block
    text-sm
    text-[#9C7554]
    transition
    hover:underline
  "
>
  📜 Fold it back
</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}