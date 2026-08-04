export default function NotebookIllustration() {
  return (
    <svg
      viewBox="0 0 220 180"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="110"
        cy="160"
        rx="55"
        ry="10"
        fill="#000"
        opacity="0.08"
      />

      {/* Cover */}

      <rect
        x="45"
        y="25"
        width="130"
        height="110"
        rx="12"
        fill="#D7B89A"
      />

      {/* Spine */}

      <rect
        x="60"
        y="25"
        width="8"
        height="110"
        fill="#B18B67"
      />

      {/* Pages */}

      <rect
        x="68"
        y="30"
        width="98"
        height="100"
        rx="8"
        fill="#FFFDF8"
      />

      {/* Lines */}

      {[0,1,2,3,4].map((i)=>(
        <line
          key={i}
          x1="82"
          x2="150"
          y1={52+i*15}
          y2={52+i*15}
          stroke="#DDD"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}