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
        "mb-8 flex flex-col gap-2 md:mb-10",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl dark:text-slate-50">
        {title}
        <span className="ml-2 inline-block h-2.5 w-2.5 rounded-full bg-violet-600 md:h-3 md:w-3" />
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
