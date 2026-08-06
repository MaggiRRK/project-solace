"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const pages = [
  {
    title: "A Little Note",
    text:
      "Hi.\n\nIf you're reading this...\nthen you found the little notebook I left here.\n\nI'm really glad you did.",
  },

  {
    title: "While Building This",
    text:
      "Every little object inside this room was placed with care.\n\nI kept wondering if it would make you smile.\n\nI hope it does.",
  },

  {
    title: "Thank You",
    text:
      "Thank you for every laugh.\nThank you for every conversation.\n\nAnd thank you...\nfor simply being you.",
  },
];

export default function NotebookModal({
  open,
  onClose,
}: Props) {
  const [page, setPage] = useState(0);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-90 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center p-6"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.35,
            }}
          >
          <div className="relative w-full max-w-xl rounded-3xl bg-[#FFF9F2] px-12 pt-14 pb-10 shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
           <div
  className="
    absolute
    right-12
    -top-2
    h-16
    w-5
    rounded-b-full
    bg-[#B6845E]
  "
/>
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <h2 className="heading text-5xl text-[#6B4D3E]">
                    {pages[page].title}
                  </h2>
                    <div className="mt-4 h-px w-28 bg-[#DCCDBD]" />
                  <p
                    className="
                      handwriting
                      mt-10
                      whitespace-pre-line
                      text-[27px]
                      leading-13
                      text-[#5A4638]
                    "
                  >
                    {pages[page].text}
                  </p>
                </motion.div>
              </AnimatePresence>
                <div className="mt-12 flex justify-end">
  <span className="text-sm text-[#A38A75]">
    {page + 1} / {pages.length}
  </span>
</div>
              <div className="mt-16 mb-4 flex justify-center gap-8">

                <button
                  disabled={page === 0}
                  onClick={() => setPage(page - 1)}
                  className="
                    rounded-xl
                    bg-[#EFE5DA]
                    px-6
                    py-3
                    disabled:opacity-40
                  "
                >
                  ← Previous
                </button>

                {page < pages.length - 1 ? (
                  <button
                    onClick={() => setPage(page + 1)}
                    className="
                      rounded-xl
                      bg-[#B6845E]
                      px-6
                      py-3
                      text-white
                    "
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setPage(0);
                      onClose();
                    }}
                    className="
                      rounded-xl
                      bg-[#B6845E]
                      px-6
                      py-3
                      text-white
                    "
                  >
                    Close Notebook
                  </button>
                )}

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}