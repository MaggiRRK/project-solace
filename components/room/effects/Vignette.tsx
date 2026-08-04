export default function Vignette() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-30"
      style={{
        background: `
          radial-gradient(
            ellipse at center,
            transparent 55%,
            rgba(0,0,0,0.12) 100%
          )
        `,
      }}
    />
  );
}