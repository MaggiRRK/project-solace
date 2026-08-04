export default function ShelfIllustration() {
  return (
    <svg
      viewBox="0 0 300 190"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shelf Shadow */}
      <ellipse
        cx="150"
        cy="144"
        rx="95"
        ry="8"
        fill="rgba(0,0,0,0.08)"
      />

      {/* Shelf */}
      <rect
        x="30"
        y="90"
        width="240"
        height="18"
        rx="7"
        fill="#B6845E"
      />

      {/* Highlight */}
      <rect
        x="30"
        y="90"
        width="240"
        height="4"
        rx="4"
        fill="#C99871"
        opacity=".55"
      />

      {/* Left Bracket */}
      <path
        d="M55 108 L75 108 L65 145 Z"
        fill="#8C6245"
      />

      {/* Right Bracket */}
      <path
        d="M225 108 L245 108 L235 145 Z"
        fill="#8C6245"
      />

      {/* ================= BOOKS ================= */}

      <rect
        x="48"
        y="28"
        width="18"
        height="62"
        rx="3"
        fill="#E7B1AF"
      />

      <rect
        x="69"
        y="18"
        width="18"
        height="72"
        rx="3"
        fill="#EBCF8C"
      />

      <rect
        x="90"
        y="38"
        width="16"
        height="52"
        rx="3"
        fill="#A7CBEA"
      />

      <rect
        x="109"
        y="24"
        width="17"
        height="66"
        rx="3"
        fill="#B7D6A8"
      />

      {/* Decorative Lines */}

      <line
        x1="56"
        y1="34"
        x2="56"
        y2="82"
        stroke="#FFF4EA"
        strokeWidth="1.5"
      />

      <line
        x1="77"
        y1="25"
        x2="77"
        y2="82"
        stroke="#FFF4EA"
        strokeWidth="1.5"
      />

      <line
        x1="98"
        y1="43"
        x2="98"
        y2="82"
        stroke="#FFF4EA"
        strokeWidth="1.5"
      />

      {/* ================= CANDLE ================= */}

      <rect
        x="138"
        y="54"
        width="12"
        height="36"
        rx="4"
        fill="#FFF6E4"
      />

      <ellipse
        cx="144"
        cy="49"
        rx="4"
        ry="7"
        fill="#FFD37A"
      />

      <ellipse
        cx="144"
        cy="49"
        rx="2"
        ry="4"
        fill="#FFF7C2"
      />

      {/* ================= PLANT ================= */}

      <rect
        x="165"
        y="62"
        width="24"
        height="18"
        rx="4"
        fill="#C98C63"
      />

      <ellipse
        cx="177"
        cy="52"
        rx="15"
        ry="13"
        fill="#86B87C"
      />

      <ellipse
        cx="170"
        cy="47"
        rx="8"
        ry="11"
        fill="#75A96C"
      />

      <ellipse
        cx="184"
        cy="47"
        rx="8"
        ry="11"
        fill="#75A96C"
      />

      {/* ================= PHOTO FRAME ================= */}

      <rect
        x="210"
        y="24"
        width="42"
        height="54"
        rx="6"
        fill="#D2A57A"
      />

      <rect
        x="216"
        y="30"
        width="30"
        height="42"
        rx="4"
        fill="#FFF8EC"
      />

      {/* Sun */}

      <circle
        cx="231"
        cy="42"
        r="5"
        fill="#FFD37A"
      />

      {/* Mountains */}

      <path
        d="M218 66 L228 54 L239 66"
        fill="#8DBF87"
      />

      <path
        d="M226 66 L236 50 L244 66"
        fill="#6FA97A"
      />
    </svg>
  );
}