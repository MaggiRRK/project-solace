"use client";

import { motion } from "framer-motion";

interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {
  return (
    <div className="w-[320px] max-w-[85vw]">
      {/* Progress Track */}
      <div className="relative h-3 overflow-hidden rounded-full bg-white/40 shadow-inner backdrop-blur-sm">
        {/* Filled Bar */}
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#EBC7BE] via-[#F3D9CC] to-[#FFF2E9]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />

        {/* Soft Glow */}
        <motion.div
          className="absolute top-0 h-full w-12 rounded-full bg-white/60 blur-md"
          animate={{
            left: `calc(${progress}% - 24px)`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Percentage */}
      <motion.p
        key={progress}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-3 text-center text-sm bodyFont text-[#8A7C73]"
      >
        {Math.round(progress)}%
      </motion.p>
    </div>
  );
}
