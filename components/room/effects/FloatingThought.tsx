"use client";

import { AnimatePresence, motion } from "framer-motion";

interface FloatingThoughtProps {
  show: boolean;
  onClose: () => void;
}

export default function FloatingThought({
  show,
  onClose,
}: FloatingThoughtProps) {
  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Background Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-998 backdrop-blur-[2px] bg-black/10"
            onClick={onClose}
          />

          {/* Flying Paper */}
          <motion.div
            initial={{
              x: 340,
              y: -260,
              scale: 0.35,
              rotate: -20,
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
              opacity: 1,
            }}
            exit={{
              x: 340,
              y: -260,
              scale: 0.35,
              rotate: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="fixed left-1/2 top-1/2 z-999 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Floating Shadow */}
            <motion.div
              animate={{
                opacity: [0.18, 0.26, 0.18],
                scaleX: [1, 1.08, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-42.5 h-5 w-44 -translate-x-1/2 rounded-full bg-black/20 blur-md"
            />

            {/* Paper */}
            <motion.button
              initial={{
                width: 70,
                height: 70,
              }}
              animate={{
                width: 330,
                height: 220,
                y: [0, -5, 0],
                rotate: [-0.5, 0.5, -0.5],
              }}
              transition={{
                width: {
                  delay: 0.35,
                  duration: 0.35,
                },
                height: {
                  delay: 0.35,
                  duration: 0.35,
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                },
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                },
              }}
              onClick={onClose}
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#E4D2AF]
                bg-[#FFF9EE]
                p-8
                shadow-2xl
                text-left
              "
            >
              {/* Paper texture */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#d8c6a833_1px,transparent_1px)] bg-[length:12px_12px]" />

              {/* Fold line */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#E9DCC0]" />

              {/* Message */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.75,
                }}
                className="relative"
              >
                <h2 className="mb-4 text-xl font-semibold text-[#6D6257]">
                  A little thought 🌙
                </h2>

                <p className="leading-8 text-[#74695F]">
                  Placeholder message.
                </p>

                <p className="mt-10 text-right text-sm italic text-[#A08F82]">
                  — Alice&apos;s World
                </p>
              </motion.div>
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}