"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ProgressBar from "./ProgressBar";
import LoadingMessage from "./LoadingMessage";
import StarField from "./StarField";
import MoonGlow from "./MoonGlow";
import ShootingStar from "./ShootingStar";

const messages = [
  "Preparing something special...",
  "Searching 8.2 Billion Humans...",
  "Finding the prettiest girl in the world...",
  "✓ Match found.",
  "Checking kindness...",
  "Checking smile...",
  "Collecting warm memories...",
  "Building your little world...",
  "Almost ready...",
];

interface LoadingScreenProps {
  onFinish: () => void;
}

export default function LoadingScreen({
  onFinish,
}: LoadingScreenProps) {
  const [index, setIndex] = useState(0);

  const progress = (index / (messages.length - 1)) * 100;

  useEffect(() => {
    if (index >= messages.length - 1) {
      const timer = setTimeout(() => {
        onFinish();
      }, 2200);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 2400);

    return () => clearTimeout(timer);
  }, [index, onFinish]);

  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#111827] via-[#1B2436] to-[#202A3F]">
      <StarField />
      <MoonGlow />
      <ShootingStar />

      <div className="relative z-10 flex flex-col items-center gap-14">
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [-4, 4, -4],
            scale: [1, 0.96, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-6xl"
        >
          🌙
        </motion.div>

        <div className="text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
            }}
            className="heading text-xl md:text-6xl tracking-normal text-[#FFF8F1] drop-shadow-lg"
          >
            Subhana&apos;s World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="bodyFont mt-5 max-w-md text-lg leading-8 text-[#D9D4CF]"
          >
            A tiny handcrafted world,
            <br />
            made especially for you.
          </motion.p>
        </div>

        <ProgressBar progress={progress} />

        <LoadingMessage message={messages[index]} />
      </div>
    </main>
  );
}