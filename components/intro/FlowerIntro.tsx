"use client";

import LilyBouquet from "./LilyBouquet";
import FloatingPetals from "./FloatingPetals";
import { motion } from "framer-motion";

interface Props {
  onContinue: () => void;
}

export default function FlowerIntro({
  onContinue,
}: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFFBF7]">
      <FloatingPetals />
      <div className="flex flex-col items-center">

        <LilyBouquet />

        <motion.h1
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 1.6,
    duration: 0.8,
  }}
  className="mt-6 heading text-5xl text-[#6B4D3E]"
>
  Before we step inside...
</motion.h1>

        <motion.p
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 2.2,
    duration: 0.8,
  }}
  className="mt-5 max-w-xl text-center text-xl leading-9 text-[#8D6C59]"
>
  I wanted to build something
  <br />
  that wouldn&apos;t fade with time.
</motion.p>

        <motion.button
  initial={{
    opacity: 0,
    y: 20,
    scale: 0.96,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    delay: 3,
    duration: 0.7,
  }}
  onClick={onContinue}
  className="
    mt-10
    rounded-full
    bg-[#B6845E]
    px-10
    py-4
    text-lg
    text-white
    transition
    hover:scale-105
  "
>
  Step Inside →
</motion.button>

      </div>
    </main>
  );
}