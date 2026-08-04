"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  open: boolean;
  thought: string;
  onClose: () => void;
}

export default function ThoughtModal({
  open,
  thought,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed left-1/2 top-1/2 z-50
                       w-[90%] max-w-md
                       -translate-x-1/2 -translate-y-1/2
                       rounded-3xl bg-[#FFFDF8]
                       p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <h2 className="text-2xl font-semibold text-[#6B4F3B]">
              💭 A Little Thought
            </h2>

            <p className="mt-6 text-lg leading-8 italic text-[#6B4F3B]">
              &quot;{thought}&quot;
            </p>

            <div className="mt-8 flex justify-end">
              <button
                onClick={onClose}
                className="rounded-xl bg-[#E7C7B5] px-4 py-2"
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