import { twMerge } from "tailwind-merge";

type NeoTagProps = {
  children: React.ReactNode;
  variant?: "violet" | "amber" | "neutral";
  className?: string;
};

export default function NeoTag({
  children,
  variant = "neutral",
  className,
}: NeoTagProps) {
  const variants = {
    violet:
      "border-violet-600 bg-violet-100 text-violet-700 dark:border-violet-400 dark:bg-violet-900/30 dark:text-violet-300",
    amber:
      "border-amber-600 bg-amber-100 text-amber-700 dark:border-amber-400 dark:bg-amber-900/30 dark:text-amber-300",
    neutral:
      "border-slate-900 bg-slate-100 text-slate-700 dark:border-slate-500 dark:bg-slate-700 dark:text-slate-300",
  };

  return (
    <span
      className={twMerge(
        "inline-block rounded border px-2 py-0.5 text-sm font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
