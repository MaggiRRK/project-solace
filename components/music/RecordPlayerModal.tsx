"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMusic } from "@/components/music/MusicProvider";

interface Props {
  open: boolean;
  onClose: () => void;
}



const songs = [
  {
    id: 1,
    title: "🌙 Snowfall",
    artist: "Oneheart",
    src: "/music/snowfall.mp3",
  },
  {
    id: 2,
    title: "TiK ToK",
    artist: "Kesha",
    src: "/music/tiktok.mp3",
  },
  {
    id: 3,
    title: "needy",
    artist: "Ariana Grande",
    src: "/music/needy.mp3",
  },
  {
    id: 4,
    title: "God is a woman",
    artist: "Ariana Grande",
    src: "/music/god-is-a-woman.mp3",
  },
  {
    id: 5,
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    src: "/music/until-i-found-you.mp3",
  },
];
export default function RecordPlayerModal({
  open,
  onClose,
}: Props) {
  const { playSong } = useMusic();
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background */}
          <motion.div
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{
                scale: 0.85,
                y: 30,
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="w-full max-w-md rounded-3xl bg-[#FFF8F0] p-8 shadow-2xl"
            >
              <h2 className="text-center text-3xl font-semibold">
                For Quiet Evenings
              </h2>

              <p className="mt-2 text-center text-sm text-gray-500">
                A few songs that felt right for this room.
              </p>

              <div className="mt-8 space-y-3">
                {songs.map((song) => (
                  <button
  key={song.id}
  onClick={() => {
    playSong(song.src);
    onClose();
  }}
  className="
    flex
    w-full
    items-center
    gap-4
    rounded-2xl
    bg-white
    px-5
    py-4
    transition
    hover:scale-[1.02]
    hover:bg-[#F7EFE7]
  "
>
                    <div className="text-2xl">
                      💿
                    </div>

                    <div className="text-left">
                      <p className="font-medium">
                        {song.title}
                      </p>

                      <p className="text-sm text-gray-500">
                        {song.artist}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={onClose}
                className="
                  mt-8
                  w-full
                  rounded-xl
                  bg-[#B6845E]
                  py-3
                  text-white
                  transition
                  hover:opacity-90
                "
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}