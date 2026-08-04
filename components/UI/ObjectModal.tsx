"use client";

import { AnimatePresence, motion } from "framer-motion";

interface ObjectModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function ObjectModal({
  open,
  title,
  children,
  onClose,
}: ObjectModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            className="
              fixed
              left-1/2
              top-1/2
              z-50
              w-[90%]
              max-w-md
              -translate-x-1/2
              -translate-y-1/2
              rounded-3xl
              bg-[#FFF9F2]
              p-8
              shadow-2xl
            "
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#6B4F3B]">
              {title}
            </h2>

            {children}

            <div className="mt-8 flex justify-end">
  <button
    className="
      rounded-xl
      bg-[#E7C7B5]
      px-4
      py-2
      transition-colors
      hover:bg-[#DDB7A2]
    "
    onClick={onClose}
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