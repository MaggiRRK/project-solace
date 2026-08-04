export default function ThoughtJarIllustration() {
  return (
    <svg
      viewBox="0 0 180 220"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="90"
        cy="200"
        rx="35"
        ry="8"
        fill="#000"
        opacity="0.08"
      />

      {/* Lid */}
      <rect
        x="60"
        y="28"
        width="60"
        height="14"
        rx="4"
        fill="#B98A63"
      />

      {/* Glass */}
      <rect
        x="48"
        y="40"
        width="84"
        height="130"
        rx="18"
        fill="#DFF7FF"
        fillOpacity="0.45"
        stroke="#A9D8E8"
        strokeWidth="2"
      />

      {/* Paper Notes */}
      <rect
        x="65"
        y="95"
        width="50"
        height="12"
        rx="3"
        fill="#FFF8E8"
        transform="rotate(-8 90 100)"
      />

      <rect
        x="68"
        y="115"
        width="46"
        height="12"
        rx="3"
        fill="#FFF8E8"
        transform="rotate(10 90 120)"
      />

      <rect
        x="62"
        y="135"
        width="52"
        height="12"
        rx="3"
        fill="#FFF8E8"
        transform="rotate(-4 90 140)"
      />

      {/* Glass Shine */}
      <path
        d="M65 55 Q78 95 70 155"
        stroke="white"
        strokeWidth="5"
        strokeOpacity="0.25"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}