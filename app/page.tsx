"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import LoadingScreen from "@/components/loading/LoadingScreen";
import BookCover from "@/components/book/BookCover";
import IntroPages from "@/components/book/IntroPages";
import Room from "@/components/room/Room";

type Stage = "loading" | "book" | "intro" | "room";

export default function Home() {
  const [stage, setStage] = useState<Stage>("loading");

  return (
    <AnimatePresence mode="wait">
      {stage === "loading" && (
        <LoadingScreen
          key="loading"
          onFinish={() => setStage("book")}
        />
      )}

      {stage === "book" && (
        <BookCover
          key="book"
          onOpen={() => setStage("intro")}
        />
      )}

      {stage === "intro" && (
        <IntroPages
          key="intro"
          onFinish={() => setStage("room")}
        />
      )}

      {stage === "room" && (
        <Room key="room" />
      )}
    </AnimatePresence>
  );
}