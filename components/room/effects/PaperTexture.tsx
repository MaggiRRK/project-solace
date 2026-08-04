export default function PaperTexture() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.06]
        mix-blend-multiply
        z-10
      "
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(0,0,0,0.08) 1px, transparent 1px),
          radial-gradient(circle at 70% 60%, rgba(0,0,0,0.05) 1px, transparent 1px),
          radial-gradient(circle at 40% 80%, rgba(0,0,0,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
      }}
    />
  );
}