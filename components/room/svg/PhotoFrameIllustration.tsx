interface Props {
  type?: "moon" | "flower" | "note";
}

export default function PhotoFrameIllustration({
  type = "moon",
}: Props) {
  return (
    <svg
      viewBox="0 0 120 140"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="60"
        cy="126"
        rx="38"
        ry="6"
        fill="rgba(0,0,0,.08)"
      />

      {/* Frame */}
      <rect
        x="14"
        y="10"
        width="92"
        height="108"
        rx="8"
        fill="#C79B6E"
      />

      {/* Paper */}
      <rect
        x="22"
        y="18"
        width="76"
        height="92"
        rx="5"
        fill="#FFF8EE"
      />

      {type === "moon" && (
        <>
          <circle cx="60" cy="48" r="16" fill="#FFF3B0" />
          <circle cx="66" cy="44" r="16" fill="#FFF8EE" />
          <circle cx="42" cy="34" r="2" fill="#D9CBAA" />
          <circle cx="77" cy="32" r="1.5" fill="#D9CBAA" />
        </>
      )}

      {type === "flower" && (
        <>
          <line
            x1="60"
            y1="42"
            x2="60"
            y2="84"
            stroke="#78A76E"
            strokeWidth="2"
          />

          <circle cx="60" cy="42" r="6" fill="#E8B6C6" />
          <circle cx="54" cy="38" r="5" fill="#F7CED8" />
          <circle cx="66" cy="38" r="5" fill="#F7CED8" />
          <circle cx="54" cy="46" r="5" fill="#F7CED8" />
          <circle cx="66" cy="46" r="5" fill="#F7CED8" />
        </>
      )}

      {type === "note" && (
        <>
          <line
            x1="36"
            y1="42"
            x2="82"
            y2="42"
            stroke="#B39C84"
            strokeWidth="2"
          />

          <line
            x1="36"
            y1="54"
            x2="76"
            y2="54"
            stroke="#B39C84"
            strokeWidth="2"
          />

          <line
            x1="36"
            y1="66"
            x2="80"
            y2="66"
            stroke="#B39C84"
            strokeWidth="2"
          />

          <path
            d="M48 84
               C56 74 64 94 72 84"
            stroke="#C98A8A"
            strokeWidth="2"
            fill="none"
          />
        </>
      )}
    </svg>
  );
}