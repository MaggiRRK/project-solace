"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedRevealProps {
  show: boolean;
  children: ReactNode;
  delay?: number;
}

export default function AnimatedReveal({
  show,
  children,
  delay = 0,
}: AnimatedRevealProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.9,
            rotate: -6,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.95,
          }}
          transition={{
            duration: 0.8,
            delay,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}