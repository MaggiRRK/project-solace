"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LetterPage() {

  const router = useRouter();

  return (
    <main className="
      min-h-screen
      bg-[#F7F1E8]
      flex
      flex-col
      items-center
      justify-center
      p-6
    ">

      <Image
        src="/images/letter.png"
        alt="Letter"
        width={800}
        height={1000}
        className="
          max-h-[80vh]
          w-auto
          rounded-xl
          shadow-xl
        "
      />

      <button
        onClick={() => router.push("/")}
        className="
          mt-8
          text-[#9C7554]
          text-lg
        "
      >
        ← Return to room
      </button>

    </main>
  );
}