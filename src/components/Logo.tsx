interface LogoProps {
  className?: string;      // Allows you to control width/height or text size
  edgeColor?: string;      // Allows dynamic color for the "EDGE" part
}

export default function Logo({
  className = "",
  edgeColor = "text-iot-green",
}: LogoProps) {
  return (
    <span
      className={`font-extrabold tracking-tight inline-flex items-center ${className}`}
    >
      <span>I</span>
      <img
        src="/assets/iotEdge_logo.png"
        alt="O"
        className="h-[1em] w-auto object-contain mx-[0.05em] translate-y-[0.05em]"
      />
      <span>T</span>
      <span className={`${edgeColor} ml-[0.25em]`}>EDGE</span>
    </span>
  );
}
