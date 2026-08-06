import { motion } from "framer-motion";

export default function RecordPlayerIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="60"
        cy="108"
        rx="28"
        ry="5"
        fill="black"
        opacity="0.12"
      />

      {/* Wooden Base */}
      <rect
        x="18"
        y="20"
        width="84"
        height="72"
        rx="10"
        fill="#A77B59"
      />

      {/* Cream Top */}
      <rect
        x="23"
        y="25"
        width="74"
        height="62"
        rx="8"
        fill="#F8F1E8"
      />

      {/* ---------- VINYL ---------- */}
      <motion.g
        animate={{
          rotate: 0,
        }}
        style={{
          transformOrigin: "42px 56px",
        }}
      >
        <circle
          cx="42"
          cy="56"
          r="18"
          fill="#2E2E2E"
        />

        <circle
          cx="42"
          cy="56"
          r="14"
          fill="none"
          stroke="#555"
          strokeWidth="0.8"
        />

        <circle
          cx="42"
          cy="56"
          r="10"
          fill="none"
          stroke="#555"
          strokeWidth="0.8"
        />

        <circle
          cx="42"
          cy="56"
          r="6"
          fill="none"
          stroke="#555"
          strokeWidth="0.8"
        />

        <circle
          cx="42"
          cy="56"
          r="3.2"
          fill="#F7E7BF"
        />
      </motion.g>

      {/* ---------- TONEARM ---------- */}
      <g>
        <circle
          cx="77"
          cy="38"
          r="3"
          fill="#D7B16B"
        />

        <line
          x1="77"
          y1="38"
          x2="61"
          y2="59"
          stroke="#D7B16B"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle
          cx="61"
          cy="59"
          r="1.8"
          fill="#D7B16B"
        />
      </g>

      {/* Knobs */}
      <circle
        cx="78"
        cy="67"
        r="3"
        fill="#D4C3A8"
      />

      <circle
        cx="89"
        cy="75"
        r="2"
        fill="#D4C3A8"
      />

      {/* LED */}
      <circle
        cx="91"
        cy="62"
        r="1.6"
        fill="#FFD86A"
      />
    </svg>
  );
}