"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
max-h-[85vh]
-translate-x-1/2
-translate-y-1/2
overflow-y-auto
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
                initial={{
    opacity:0
}}

animate={{
    opacity:1
}}

exit={{
    opacity:0
}}
                className="
                  origin-top
                  mt-6
                  border-t
                  border-[#EADBCB]
                  pt-6
                "
              >
                <h3 className="heading text-2xl text-[#6B4F3B]">
                  Dear You,
                </h3>

                <p
                  className="
                    handwriting
                    mt-5
                    whitespace-pre-line
                    text-[21px]
                    leading-9
                    max-h-96
                    overflow-y-auto
                    pr-2
                    text-[#5B4638]
                  "
                >
                  {`"Some gifts aren't meant to impress.
They're simply meant to remind someone that they mattered."

Dear You,

I wasn't really sure how to begin this.

Maybe by saying thank you.

Thank you for every conversation, every smile, and every little moment that made ordinary days feel a little brighter.

This tiny world is simply my way of giving something back. Every corner, every interaction, every little detail was made with care, hoping it would make you smile.

I understand and respect the decision you made, and I never want this to make you feel pressured in any way.

I just wanted you to know that meeting you was genuinely one of the nicest parts of my year.

I'll continue making dua that Allah guides both of us toward whatever is best. Whether our paths cross again someday or not, I'll always be grateful that they crossed at all.

Whenever life feels a little overwhelming, come back here, read a note, play a song, or just spend a few quiet minutes in this room.

Take care of yourself.

— Kabir`}
                </p>

                <button
                  onClick={() => setReading(false)}
                  className="
                    mt-6
                    text-[#9C7554]
                    hover:underline
                  "
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