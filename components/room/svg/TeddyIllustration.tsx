export default function TeddyIllustration() {
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
        rx="34"
        ry="8"
        fill="#000"
        opacity="0.08"
      />

      {/* Ears */}
      <circle cx="55" cy="55" r="18" fill="#C79A73" />
      <circle cx="125" cy="55" r="18" fill="#C79A73" />

      {/* Head */}
      <circle cx="90" cy="75" r="40" fill="#D4A77D" />

      {/* Body */}
      <ellipse
        cx="90"
        cy="150"
        rx="42"
        ry="48"
        fill="#D4A77D"
      />

      {/* Arms */}
      <circle cx="45" cy="135" r="16" fill="#D4A77D" />
      <circle cx="135" cy="135" r="16" fill="#D4A77D" />

      {/* Feet */}
      <ellipse cx="65" cy="192" rx="15" ry="10" fill="#C79A73" />
      <ellipse cx="115" cy="192" rx="15" ry="10" fill="#C79A73" />

      {/* Snout */}
      <ellipse
        cx="90"
        cy="88"
        rx="18"
        ry="14"
        fill="#F5E7D8"
      />

      {/* Nose */}
      <circle cx="90" cy="84" r="3" fill="#5E4030" />

      {/* Eyes */}
      <circle cx="77" cy="70" r="3" fill="#4A3528" />
      <circle cx="103" cy="70" r="3" fill="#4A3528" />

      {/* Smile */}
      <path
        d="M84 92 Q90 98 96 92"
        stroke="#5E4030"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
      );
}