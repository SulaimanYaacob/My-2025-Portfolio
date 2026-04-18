import { twMerge } from "tailwind-merge";

type DoodleDecorProps = {
  src: string;
  size?: number;
  rotate?: number;
  className?: string;
  opacity?: number;
};

export default function DoodleDecor({
  src,
  size = 64,
  rotate = 0,
  opacity = 60,
  className,
}: DoodleDecorProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={twMerge(
        "pointer-events-none select-none dark:invert",
        className,
      )}
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        opacity: opacity / 100,
      }}
    />
  );
}
