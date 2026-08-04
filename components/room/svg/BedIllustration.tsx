export default function BedIllustration() {
  return (
    <svg
      viewBox="0 0 420 240"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="210"
        cy="218"
        rx="145"
        ry="14"
        fill="#000"
        opacity="0.08"
      />

      {/* Headboard */}
      <rect
        x="78"
        y="25"
        width="250"
        height="60"
        rx="22"
        fill="#B6845E"
      />

      {/* Mattress */}
      <rect
        x="55"
        y="65"
        width="290"
        height="90"
        rx="20"
        fill="#FAF6F0"
      />

      {/* Blanket */}
      <rect
        x="45"
        y="92"
        width="310"
        height="110"
        rx="22"
        fill="#E9C4BB"
      />

      {/* Pillow */}
      <rect
        x="88"
        y="82"
        width="82"
        height="36"
        rx="10"
        fill="white"
      />

      {/* Cushion */}
      <circle
        cx="248"
        cy="118"
        r="18"
        fill="#D79E9E"
      />

      {/* Legs */}
      <rect
        x="82"
        y="195"
        width="12"
        height="25"
        rx="2"
        fill="#6E4B34"
      />

      <rect
        x="318"
        y="195"
        width="12"
        height="25"
        rx="2"
        fill="#6E4B34"
      />
    </svg>
  );
}