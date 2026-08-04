"use client";

import { AnimatePresence, motion } from "framer-motion";

interface LoadingMessageProps {
  message: string;
}

export default function LoadingMessage({
  message,
}: LoadingMessageProps) {
  return (
    <div className="relative z-20 h-16 w-90 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={message}
          initial={{
            opacity: 0,
            y: 18,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -18,
            filter: "blur(6px)",
          }}
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
          className="absolute w-full text-center"
        >
          <p className="bodyFont text-lg tracking-wide text-[#F8F3EC] drop-shadow-md">
            {message}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}