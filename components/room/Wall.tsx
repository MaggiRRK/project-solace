export default function Wall() {
  return (
    <>
      {/* Cozy Warm Wall */}
      <div className="absolute inset-0 bg-linear-to-b from-[#F5EFE5] via-[#EFE4D5] to-[#E6D7C6]" />

      {/* Gentle Ceiling Warmth */}
      <div
        className="
          absolute
          -top-55
          left-1/2
          -translate-x-1/2
          w-225
          h-112.5
          rounded-full
          bg-[#FFF5E4]
          opacity-10
          blur-[180px]
        "
      />

      {/* Soft Wall Texture */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[radial-gradient(circle_at_20%_20%,#ffffff_0%,transparent_60%)]
        "
      />

      {/* Cozy Edge Shadows */}
      <div
        className="
          absolute
          inset-0
          shadow-[inset_0_0_240px_rgba(45,30,18,0.18)]
        "
      />
    </>
  );
}