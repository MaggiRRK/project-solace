export default function PlantIllustration() {
  return (
    <svg
      viewBox="0 0 180 220"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="90"
        cy="205"
        rx="38"
        ry="8"
        fill="#000"
        opacity="0.08"
      />

      {/* Pot */}
      <path
        d="M60 145 L120 145 L110 185 L70 185 Z"
        fill="#C98C63"
      />

      <rect
        x="55"
        y="138"
        width="70"
        height="10"
        rx="5"
        fill="#B7794F"
      />

      {/* Leaves */}
      <ellipse cx="90" cy="95" rx="20" ry="45" fill="#6BBF6B"/>
      <ellipse cx="65" cy="105" rx="16" ry="38" fill="#79CC72" transform="rotate(-25 65 105)"/>
      <ellipse cx="115" cy="105" rx="16" ry="38" fill="#79CC72" transform="rotate(25 115 105)"/>
      <ellipse cx="75" cy="70" rx="14" ry="30" fill="#5DAE61" transform="rotate(-35 75 70)"/>
      <ellipse cx="105" cy="70" rx="14" ry="30" fill="#5DAE61" transform="rotate(35 105 70)"/>
    </svg>
  );
}