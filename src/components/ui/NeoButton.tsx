import { twMerge } from "tailwind-merge";

type NeoButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

export default function NeoButton({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: NeoButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded border-2 border-slate-900 font-semibold transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_0_#0f172a] active:translate-x-1 active:translate-y-1 dark:border-violet-400 dark:[box-shadow:4px_4px_0_0_#7c3aed] dark:hover:[box-shadow:0_0_0_0_#7c3aed]";

  const variants = {
    primary: "bg-violet-600 text-white hover:bg-violet-700",
    secondary: "bg-amber-500 text-slate-900 hover:bg-amber-600",
    ghost: "bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg",
  };

  return (
    <button
      className={twMerge(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
