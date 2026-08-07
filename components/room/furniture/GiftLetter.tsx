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
            opacity: 0,
            x: -30,
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
            x: -30,
            scaleX: 0.2,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            origin-left
            w-72
            rounded-2xl
            border
            border-[#E7D8C7]
            bg-[#FFFCF8]
            p-6
            shadow-[0_25px_60px_rgba(0,0,0,0.35)]
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
                  opacity: 0,
                  scaleY: 0,
                }}
                animate={{
                  opacity: 1,
                  scaleY: 1,
                }}
                exit={{
                  opacity: 0,
                  scaleY: 0,
                }}
                transition={{
                  duration: 0.35,
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
                    max-h-105
                    overflow-y-auto
                    pr-2
                    text-[#5B4638]
                  "
                >
                  {`"Some gifts aren't meant to impress.
They're simply meant to remind someone that they mattered."

Dear You,

I don't really know how to begin this.

Maybe by saying thank you.

Thank you for the conversations, the smiles, the little moments you probably didn't think much of, but somehow became special to me. Whether you realized it or not, you made my days brighter.

This little room is my way of saying that.

Every corner, every little interaction, every detail was made with care because I wanted to leave you with something that would hopefully make you smile, even if only for a few minutes.

I know life isn't always simple, and I understand why you made the decision you did. I respect that, and I never want you to feel pressured by anything written here.

I just wanted to be honest about one thing.

Meeting you was a blessing in my life.

I'll continue making dua that Allah guides both of us toward whatever is best for us. If our paths are meant to cross again someday, I'll be grateful. And if they aren't, I'll still be thankful that they crossed at all.

More than anything, I hope you find happiness, peace, and people who remind you every day how valuable you are.

So whenever life feels a little overwhelming, maybe come back to this room, read a note from the jar, play a song, or just sit here for a while.

I hope it brings you even a small amount of comfort.

Thank you... for being part of my story.

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