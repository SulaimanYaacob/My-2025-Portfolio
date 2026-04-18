import { twMerge } from "tailwind-merge";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dotColor?: "violet" | "amber" | "cyan";
};

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
  dotColor = "violet",
}: SectionHeadingProps) {
  const dotClass = {
    violet: "bg-violet-600",
    amber: "bg-amber-500",
    cyan: "bg-cyan-400",
  }[dotColor];

  return (
    <div
      className={twMerge(
        "mb-10 flex flex-col gap-2",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 md:text-5xl">
        {title}
        <span className={twMerge("ml-2 inline-block h-3 w-3 rounded-full", dotClass)} />
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
