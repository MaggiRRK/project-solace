interface WallZoneProps {
  children: React.ReactNode;
}

export default function WallZone({
  children,
}: WallZoneProps) {
  return (
    <div
      className="
      absolute
      inset-x-0
      top-0
      h-[66%]
      px-12
      pt-10
      "
    >
      {children}
    </div>
  );
}