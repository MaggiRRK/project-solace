"use client";

interface RoomCanvasProps {
  children: React.ReactNode;
}

export default function RoomCanvas({
  children,
}: RoomCanvasProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        className="
          relative

          aspect-9/16

          h-full

          max-h-225

          w-auto

          max-w-107.5

          overflow-hidden
        "
      >
        {children}
      </div>
    </div>
  );
}