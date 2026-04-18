import { twMerge } from "tailwind-merge";

interface ArrowProps {
  className?: string;
}

const Arrow = ({ className }: ArrowProps) => {
  return (
    <span className="relative inline-flex items-center justify-center">
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("h-16 w-20", className)}
        aria-hidden="true"
      >
        <path
          d="M8 68 Q 18 12 72 8"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M58 4 L74 8 L68 22"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="pointer-events-none absolute h-3/4 w-3/4 rounded-full bg-violet-500/30 blur-xl" />
    </span>
  );
};

export default Arrow;
