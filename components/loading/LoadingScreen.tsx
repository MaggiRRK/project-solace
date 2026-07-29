"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFF8F0]">
      <motion.div
        initial={{ opacity: 0, scale: .95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate:[0,10,-10,0] }}
          transition={{
            repeat: Infinity,
            duration:2
          }}
          className="text-5xl mb-8"
        >
          ✨
        </motion.div>

        <h1 className="text-3xl font-semibold">
          Initializing...
        </h1>

        <p className="mt-4 text-gray-500">
          Preparing something special.
        </p>

      </motion.div>
    </main>
  );
}