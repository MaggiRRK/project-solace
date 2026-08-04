interface FloorZoneProps {
  children: React.ReactNode;
}

export default function FloorZone({
  children,
}: FloorZoneProps) {
  return (
    <div
      className="
      absolute
      inset-x-0
      bottom-0
      h-[34%]
      px-12
      pb-8
      flex
      items-end
      justify-between
      "
    >
      {children}
    </div>
  );
}