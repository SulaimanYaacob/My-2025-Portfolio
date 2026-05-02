"use client";
import { PiArrowsInLineHorizontal, PiCode, PiLightbulb } from "react-icons/pi";
import NeoCard from "@/components/ui/NeoCard";
import SectionHeading from "@/components/ui/SectionHeading";

const offers = [
  {
    id: 0,
    title: "Responsive Web Design",
    icon: <PiArrowsInLineHorizontal className="text-violet-500" size={64} />,
    desc: "Make your website usable across devices and screen sizes",
  },
  {
    id: 1,
    title: "Full Stack Development",
    icon: <PiCode className="text-violet-500" size={64} />,
    desc: "Build a full-stack application from the scratch",
  },
  {
    id: 2,
    title: "Problem Solving",
    icon: <PiLightbulb className="text-violet-500" size={64} />,
    desc: "Identify and solve complex problems effectively",
  },
];

export default function OfferSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-24 text-center dark:bg-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] opacity-20 [background-size:20px_20px] dark:opacity-30" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading
          title="What I Provide"
          subtitle="Practical full-stack work with a focus on responsive, maintainable delivery."
          align="center"
        />

        <div className="mx-auto grid w-full gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <NeoCard
              key={offer.id}
              interactive
              className="flex h-full flex-col gap-4 bg-white text-left"
            >
              {offer.icon}
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                  {offer.title}
                </p>
                <p className="text-lg text-slate-500 dark:text-slate-400">
                  {offer.desc}
                </p>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
