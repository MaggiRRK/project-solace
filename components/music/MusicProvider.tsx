"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

type MusicContextType = {
  playSong: (src: string) => void;
  stopSong: () => void;
  currentSong: string | null;
};

const MusicContext = createContext<MusicContextType | null>(null);

export function MusicProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentSong, setCurrentSong] =
    useState<string | null>(null);

  const playSong = (src: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
    }

    if (audioRef.current.src !== src) {
      audioRef.current.src = src;
    }

    audioRef.current.play();

    setCurrentSong(src);
  };

  const stopSong = () => {
    audioRef.current?.pause();
    setCurrentSong(null);
  };

  return (
    <MusicContext.Provider
      value={{
        playSong,
        stopSong,
        currentSong,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);

  if (!context)
    throw new Error(
      "useMusic must be used inside MusicProvider"
    );

  return context;
}