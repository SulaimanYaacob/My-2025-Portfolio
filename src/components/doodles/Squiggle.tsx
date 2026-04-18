import { twMerge } from "tailwind-merge";

interface SquiggleProps {
  className?: string;
}

const Squiggle = ({ className }: SquiggleProps) => {
  return (
    <span className="relative inline-flex items-center justify-center">
      <svg
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("h-10 w-24", className)}
        aria-hidden="true"
      >
        <path
          d="M4 20 Q 18 4 32 20 Q 46 36 60 20 Q 74 4 88 20 Q 102 36 116 20"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="pointer-events-none absolute h-full w-full rounded-full bg-amber-500/30 blur-xl" />
    </span>
  );
};

export default Squiggle;
