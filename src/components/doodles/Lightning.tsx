import { twMerge } from "tailwind-merge";

interface LightningProps {
  className?: string;
}

const Lightning = ({ className }: LightningProps) => {
  return (
    <span className="relative inline-flex items-center justify-center">
      <svg
        viewBox="0 0 60 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("h-16 w-10", className)}
        aria-hidden="true"
      >
        <path
          d="M38 4L12 48H26L14 96L52 44H37L38 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <span className="pointer-events-none absolute h-3/4 w-3/4 rounded-full bg-amber-500/40 blur-xl" />
    </span>
  );
};

export default Lightning;
