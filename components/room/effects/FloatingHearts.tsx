"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  show: boolean;
}

export default function FloatingHearts({ show }: Props) {
  return (
    <AnimatePresence>
      {show &&
        [0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: -80,
              x: i === 0 ? -22 : i === 2 ? 22 : 0,
              scale: [0.6, 1.2, 0.8],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            className="absolute left-1/2 top-0 z-50 -translate-x-1/2 text-3xl pointer-events-none"
          >
            ❤️
          </motion.div>
        ))}
    </AnimatePresence>
  );
}