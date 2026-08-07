"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import RoomCanvas from "./RoomCanvas";

import Wall from "./Wall";
import Floor from "./Floor";
import NotebookModal from "../notebook/NotebookModal";
import Notebook from "../notebook/Notebook";
import AnimatedReveal from "../common/AnimatedReveal";
import RecordPlayer from "./furniture/RecordPlayer";
import Window from "./furniture/Window";
import ThoughtNote from "./furniture/ThoughtNote";
import Shelf from "./furniture/Shelf";
import ThoughtJar from "./furniture/ThoughtJar";
import NightOverlay from "./effects/NightOverlay";
import Plant from "./furniture/Plant";
import Bed from "./furniture/Bed";
import Teddy from "./furniture/Teddy";
import Gift from "./furniture/Gift";
import Rug from "./furniture/Rug";
import Lamp from "./furniture/Lamp";
import FairyLights from "./furniture/FairyLights";

import PhotoFrame from "./furniture/PhotoFrame";
import PaperTexture from "./effects/PaperTexture";
import RoomGlow from "./effects/RoomGlow";
import MoonLight from "./effects/MoonLight";
import Vignette from "./effects/Vignette";
import DustParticles from "./effects/DustParticles";

export default function Room() {
  const [lampOn, setLampOn] = useState(false);
  const [notebookVisible, setNotebookVisible] = useState(false);
const [notebookFound, setNotebookFound] = useState(false);
const [showThought, setShowThought] = useState(false);
const [notebookOpen, setNotebookOpen] = useState(false);
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{
        opacity: 1,
        scale: [1, 1.003, 1],
      }}
      transition={{
        opacity: { duration: 0.6 },
        scale: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative h-screen overflow-hidden"
    >
      <RoomCanvas>

        {/* Background */}
        <Wall />
        <NightOverlay />
        <Floor />



        {/* Atmosphere */}
        <PaperTexture />
        <MoonLight />
        <RoomGlow lampOn={lampOn} />
        <DustParticles />
        
        <Vignette />
        <div className="absolute top-10 left-8 z-30">
    <FairyLights />
</div>
        {/* ================= WALL ================= */}

        <div className="absolute left-8 top-10 z-20">
          <Window />
        </div>
         
        {/* Wall Gallery */}

{/* Wall Gallery */}

<div className="absolute top-44 left-44">
  <PhotoFrame
    type="moon"
    rotate={-7}
  />
</div>

<div className="absolute top-28 left-60">
  <PhotoFrame
    type="flower"
  />
</div>

<div className="absolute top-44 left-76">
  <PhotoFrame
    type="note"
    rotate={8}
  />
</div>

        <div className="absolute right-8 top-14 z-20">
          <Shelf />
        </div>

        <div className="absolute right-6 top-2 z-30">
          <ThoughtJar
    onOpen={() => setShowThought(true)}
/>
        </div>

        {showThought && (
  <div
    className="fixed inset-0 z-20"
    onClick={() => setShowThought(false)}
  />
)}
        <div className="absolute right-28 top-8 z-30">
  <ThoughtNote
  open={showThought}
  onClose={() => setShowThought(false)}
/>
</div>

        {/* ================= FLOOR ================= */}

        <div className="absolute bottom-0 left-0 h-full w-full">

          {/* Rug */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-0">
            <Rug />
          </div>

          {/* Plant */}
          <div className="absolute bottom-24 left-8 z-20">
            <Plant />
          </div>

          {/* Bed */}
          <div
  className="
    absolute
    bottom-20
    left-1/2
    translate-x-[-44%]
    z-30
  "
>
    <Bed
      onRevealNotebook={() => {
        if (notebookFound) return;

        setNotebookFound(true);

        setTimeout(() => {
          setNotebookVisible(true);
        }, 350);
      }}
    />
</div>
          <AnimatedReveal
  show={notebookVisible}
  delay={0}
>
  <div className="absolute bottom-36 left-[48%] z-40">
    <Notebook
      open={notebookOpen}
      onOpen={() => setNotebookOpen(true)}
      onClose={() => setNotebookOpen(false)}
    />
  </div>
</AnimatedReveal>
         

          {/* Lamp */}
          <div className="absolute bottom-36 right-24 z-25">
            <Lamp
  lampOn={lampOn}
  onToggle={() => {
    setLampOn((prev) => !prev);
  }}
/>
          </div>

          {/* Teddy */}
          <div className="absolute bottom-22 right-24 z-30">
            <Teddy />
          </div>

          {/* Record Player */}
{/* Record Player */}
{/* Record Player */}
<div className="absolute top-[42%] left-1/2 -translate-x-1/2 z-30">
  <RecordPlayer />
</div>

          {/* Gift */}
          <div className="absolute bottom-16 right-8 z-30">
            <Gift />
          </div>

        </div>

   

    <NotebookModal
  open={notebookOpen}
  onClose={() => setNotebookOpen(false)}
/>
      </RoomCanvas>
    </motion.main>
  );
}