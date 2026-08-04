"use client";

import { motion } from "framer-motion";

interface BookCoverProps {
  onOpen: () => void;
}

export default function BookCover({ onOpen }: BookCoverProps) {
  return (
    <motion.main
      className="fixed inset-0 flex items-center justify-center bg-[#F8F2EA]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={onOpen}
        className="w-[280px] h-[380px] rounded-xl bg-[#8B5E3C] shadow-2xl cursor-pointer select-none flex flex-col items-center justify-center border border-[#6d472c]"
      >
        <div className="absolute w-[220px] h-[320px] border border-[#d9c2a8]/30 rounded-lg" />

        <h1 className="titleFont text-4xl text-[#F8F2EA]">
          A Little World
        </h1>

        <p className="mt-6 text-sm tracking-[0.3em] uppercase text-[#E8D9C8]">
          Tap to Open
        </p>
      </motion.div>
    </motion.main>
  );
}