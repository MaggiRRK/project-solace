"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function NotebookModal({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <div className="w-full max-w-md rounded-3xl bg-[#FFF9F2] p-8 shadow-2xl">
              <h2 className="heading text-3xl text-center">
                Project Solace
              </h2>

              <p className="handwriting mt-8 text-xl leading-9 text-[#5A4638]">
                Hi...
                <br /><br />
                Before anything else,
                <br />
                thank you for being you.
              </p>

              <button
                onClick={onClose}
                className="mt-10 w-full rounded-xl bg-[#B6845E] py-3 text-white transition hover:opacity-90"
              >
                Close Notebook
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}