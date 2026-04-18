import { twMerge } from "tailwind-merge";

type DoodleDecorProps = {
  src: string;
  size?: number;
  rotate?: number;
  className?: string;
  opacity?: number;
  glowColor?: string;
};

export default function DoodleDecor({
  src,
  size = 64,
  rotate = 0,
  opacity = 60,
  className,
  glowColor,
}: DoodleDecorProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={twMerge("pointer-events-none select-none", className)}
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        opacity: opacity / 100,
        filter: glowColor
          ? `drop-shadow(0 0 6px ${glowColor}) drop-shadow(0 0 14px ${glowColor}50)`
          : undefined,
      }}
    />
  );
}
