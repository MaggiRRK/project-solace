export default function GiftIllustration() {
  return (
    <svg
      viewBox="0 0 180 180"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="90"
        cy="168"
        rx="42"
        ry="8"
        fill="#000"
        opacity="0.08"
      />

      {/* Box */}
      <rect
        x="40"
        y="70"
        width="100"
        height="78"
        rx="10"
        fill="#F3C6D9"
      />

      {/* Lid */}
      <rect
        x="34"
        y="56"
        width="112"
        height="22"
        rx="8"
        fill="#EAB8CF"
      />

      {/* Vertical Ribbon */}
      <rect
        x="84"
        y="56"
        width="12"
        height="92"
        rx="4"
        fill="#FFF6E8"
      />

      {/* Horizontal Ribbon */}
      <rect
        x="34"
        y="86"
        width="112"
        height="12"
        rx="4"
        fill="#FFF6E8"
      />

      {/* Bow */}
      <ellipse
        cx="78"
        cy="48"
        rx="12"
        ry="8"
        fill="#FFF6E8"
        transform="rotate(-25 78 48)"
      />

      <ellipse
        cx="102"
        cy="48"
        rx="12"
        ry="8"
        fill="#FFF6E8"
        transform="rotate(25 102 48)"
      />

      <circle
        cx="90"
        cy="48"
        r="5"
        fill="#FFF6E8"
      />
    </svg>
  );
}