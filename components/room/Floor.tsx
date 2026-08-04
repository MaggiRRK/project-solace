export default function Floor() {
  return (
    <div
      className="
        absolute
        bottom-0
        h-[34%]
        w-full
        bg-linear-to-b
        from-[#C8A982]
        via-[#B89268]
        to-[#9F7855]
      "
    >
      {/* Wood Planks */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          bg-[linear-gradient(to_right,#000000_1px,transparent_1px)]
          bg-size-[38px_38px]
        "
      />

      {/* Soft Floor Shadow */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-b
          from-black/5
          via-transparent
          to-black/20
        "
      />
    </div>
  );
}