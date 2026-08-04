"use client";

import { AnimatePresence, motion } from "framer-motion";

interface GiftModalProps {
  open: boolean;
  onClose: () => void;
}

export default function GiftModal({
  open,
  onClose,
}: GiftModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
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
              z-50
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
            <h1 className="text-3xl font-bold text-[#6B4F3B]">
              🎁 A Little Gift
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6B4F3B]">
              This is only a placeholder.

              <br />
              <br />

              One day something very special will be here.
            </p>

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