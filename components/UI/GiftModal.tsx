"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import GiftIllustration from "../room/svg/GiftIllustration";
interface GiftModalProps {
  open: boolean;
  onClose: () => void;
}

export default function GiftModal({
  open,
  onClose,
}: GiftModalProps) {
  const [reading, setReading] = useState(false);
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-99 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            className="
              fixed
              left-1/2
              top-1/2
              z-100
              w-[92%]
              max-w-lg
              -translate-x-1/2
              -translate-y-1/2
              rounded-[36px]
              bg-[#FFF9F4]
              p-10
              shadow-2xl
            "
            initial={{
              opacity: 0,
              scale: 0.6,
              rotate: -6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
          >
            {!reading ? (
  <>
    {/*<div className="mx-auto mb-6 w-36">
      <GiftIllustration />
    </div>*/}
    <div className="text-8xl text-center">
  🎁
</div>


    <h1 className="heading text-center text-4xl text-[#6B4F3B]">
      A Little Gift
    </h1>

    <p className="mt-5 text-center leading-8 text-[#6B4F3B]">
      I wanted to leave one last little thing for you.
    </p>

    <div className="mt-10 flex justify-center">
      <button
        onClick={() => setReading(true)}
        className="
          rounded-full
          bg-[#B6845E]
          px-8
          py-3
          text-white
          transition
          hover:scale-105
        "
      >
        Open Letter
      </button>
    </div>
  </>
) : (
  <>
    <h2 className="heading text-3xl text-[#6B4F3B]">
      Dear You,
    </h2>

    <div
      className="
        mt-6
        rounded-2xl
        bg-[#FFFDF8]
        p-6
        shadow-lg
      "
    >
      <p
        className="
          handwriting
          whitespace-pre-line
          text-[25px]
          leading-11.5
          text-[#5B4638]
        "
      >
        This is placeholder text.

        {"\n\n"}

        We&apos;ll write the real letter together later.
      </p>
    </div>

    <div className="mt-8 flex justify-center">
      <button
        onClick={() => setReading(false)}
        className="
          rounded-full
          bg-[#E7C7B5]
          px-6
          py-2
        "
      >
        Back
      </button>
    </div>
  </>
)}

            <div className="mt-10 flex justify-end">
              <button
                onClick={onClose}
                className="
                  rounded-xl
                  bg-[#E7C7B5]
                  px-5
                  py-2
                  transition-all
                  hover:scale-105
                "
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}