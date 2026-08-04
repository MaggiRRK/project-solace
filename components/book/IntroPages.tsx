"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface IntroPagesProps {
  onFinish: () => void;
}

const pages = [
  {
    title: "Hi.",
    text: (
      <>
        I wanted to build something.
        <br />
        <br />
        Not because I had to.
        <br />
        Because I wanted to.
      </>
    ),
  },
  {
    title: "A Little Note",
    text: (
      <>
        Everything inside this little world
        <br />
        reminded me of you.
        <br />
        <br />
        Every page...
        <br />
        Every object...
        <br />
        Every little detail.
      </>
    ),
  },
  {
    title: "Ready?",
    text: (
      <>
        Then...
        <br />
        Let&apos;s step inside.
      </>
    ),
  },
];

export default function IntroPages({ onFinish }: IntroPagesProps) {
  const [page, setPage] = useState(0);

  function nextPage() {
    if (page < pages.length - 1) {
      setPage((prev) => prev + 1);
    } else {
      onFinish();
    }
  }

  return (
    <motion.main
      className="fixed inset-0 bg-[#FDF8F3] flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md aspect-[3/4] rounded-xl bg-[#FFFDF9] border border-[#E7DDD0] shadow-2xl flex flex-col justify-center items-center text-center px-8"
        >
          <h2 className="titleFont text-4xl mb-8">
            {pages[page].title}
          </h2>

          <p className="leading-8 text-[#6A5B50]">
            {pages[page].text}
          </p>

          <button
            onClick={nextPage}
            className="mt-12 rounded-full bg-[#8B5E3C] px-6 py-3 text-white transition hover:scale-105"
          >
            {page === pages.length - 1 ? "Enter →" : "Next →"}
          </button>

          <div className="mt-8 flex gap-2">
            {pages.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === page ? "bg-[#8B5E3C]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.main>
  );
}