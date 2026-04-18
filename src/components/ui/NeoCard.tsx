import { twMerge } from "tailwind-merge";

type NeoCardProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  className?: string;
};

export default function NeoCard({
  children,
  size = "md",
  interactive = false,
  className,
}: NeoCardProps) {
  const padding = { sm: "p-3", md: "p-6", lg: "p-8" }[size];
  const shadow = size === "lg"
    ? "[box-shadow:8px_8px_0_0_#0f172a] dark:[box-shadow:8px_8px_0_0_#7c3aed]"
    : "[box-shadow:4px_4px_0_0_#0f172a] dark:[box-shadow:4px_4px_0_0_#7c3aed]";

  return (
    <div
      className={twMerge(
        "rounded border-2 border-slate-900 bg-slate-50 dark:border-violet-400 dark:bg-slate-900/70 dark:backdrop-blur-sm",
        padding,
        shadow,
        interactive &&
          "cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_0_#0f172a] dark:hover:[box-shadow:0_0_0_0_#7c3aed]",
        className,
      )}
    >
      {children}
    </div>
  );
}
