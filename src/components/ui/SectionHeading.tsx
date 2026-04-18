import { twMerge } from "tailwind-merge";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
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
        <span className="ml-2 inline-block h-3 w-3 rounded-full bg-violet-600" />
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
