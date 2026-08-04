"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import ThoughtJarIllustration from "../svg/ThoughtJarIllustration";
import ThoughtModal from "../../UI/ThoughtModal";

import { thoughtMessages } from "@/constants/messages";

export default function ThoughtJar() {
  const [open, setOpen] = useState(false);
  const [thought, setThought] = useState("");

  const openJar = () => {
    const random =
  thoughtMessages[
    Math.floor(Math.random() * thoughtMessages.length)
  ];

    setThought(random);
    setOpen(true);
  };

  return (
    <>
      <motion.div
        className="w-24 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        onClick={openJar}
      >
        <ThoughtJarIllustration />
      </motion.div>

      <ThoughtModal
        open={open}
        thought={thought}
        onClose={() => setOpen(false)}
      />
    </>
  );
}