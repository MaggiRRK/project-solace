export default function FairyLightsIllustration() {
  return (
    <svg
      viewBox="0 0 380 120"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wire */}

      <path
        d="M10 25
           C70 60 120 10 180 35
           S300 65 370 20"
        fill="none"
        stroke="#8D7A68"
        strokeWidth="2"
      />

      {/* Bulbs */}

      {[25, 60, 95, 135, 175, 220, 260, 300, 340].map((x) => (
        <g key={x}>
          <line
            x1={x}
            y1="28"
            x2={x}
            y2="44"
            stroke="#8D7A68"
            strokeWidth="2"
          />

          <circle
            cx={x}
            cy="50"
            r="6"
            fill="#FFE8A3"
          />
        </g>
      ))}
    </svg>
  );
}