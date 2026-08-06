export default function RecordStand() {
  return (
    <div className="relative w-24 h-20">

      {/* Shadow */}
      <div className="absolute bottom-0 left-3 right-3 h-2 rounded-full bg-black/10 blur-sm" />

      {/* Legs */}
      <div className="absolute bottom-2 left-4 h-6 w-0.75 rounded bg-[#6C4B34]" />
      <div className="absolute bottom-2 right-4 h-6 w-0.75 rounded bg-[#6C4B34]" />

      {/* Cabinet */}
      <div
        className="
          absolute
          bottom-6
          w-full
          h-12
          rounded-lg
          border
          border-[#8B6648]
          bg-[#A57956]
          overflow-hidden
        "
      >
        {/* Wood highlight */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-white/15" />

        {/* Drawer */}
        <div
          className="
            absolute
            left-2
            right-2
            top-2
            bottom-2
            rounded-md
            border
            border-[#8C6648]
            bg-[#B28560]
          "
        />

        {/* Handle */}
        <div className="absolute left-1/2 top-1/2 h-0.75 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8D8B8]" />
      </div>

    </div>
  );
}