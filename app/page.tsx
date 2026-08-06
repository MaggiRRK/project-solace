"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import LoadingScreen from "@/components/loading/LoadingScreen";
import FlowerIntro from "@/components/intro/FlowerIntro";
import Room from "@/components/room/Room";

type Stage = "loading" | "flowers" | "room";

export default function Home() {
  const [stage, setStage] = useState<Stage>("loading");

  return (
    <AnimatePresence mode="wait">
      {stage === "loading" && (
        <LoadingScreen
          key="loading"
          onFinish={() => setStage("flowers")}
        />
      )}

      {stage === "flowers" && (
        <FlowerIntro
          key="flowers"
          onContinue={() => setStage("room")}
        />
      )}

      {stage === "room" && <Room key="room" />}
    </AnimatePresence>
  );
}