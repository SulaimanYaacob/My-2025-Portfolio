"use client";
import * as m from "motion/react-m";
import { domAnimation, LazyMotion } from "motion/react";
import Image from "next/image";
import { MyTech, myTechList } from "@/app/data/myTechList";

//Use client component
const MyTechCard = ({ tech, index }: { tech: MyTech; index: number }) => {
  return (
    <LazyMotion key={tech.id} features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          y: [-300, 0],
          opacity: [0, 1],
          x: index % 2 === 0 ? [-100, 0] : [100, 0],
        }}
        transition={{
          duration: 0.3,
          // delay: (myTechList.length - index - 1) * 0.1 + 1,
          delay: (index + 1) * 0.1,
        }}
        animate={{ rotate: 0 }}
        className={`flex gap-2 p-2 ${
          index % 5 < 3 ? "col-span-2" : "col-span-3"
        } z-10 border-2 border-slate-900 bg-white [box-shadow:4px_4px_0_0_#0f172a]`}
      >
        <div className="m-auto flex h-full items-center">
          {tech.icon && tech.icon}
          {tech.image && (
            <div className="relative z-10 h-[30px] w-[30px]">
              <Image
                className="absolute select-none object-contain"
                src={tech.image}
                // width={38}
                // height={38}
                fill
                alt={""}
              />
            </div>
          )}
        </div>
        <ul className="my-auto hidden w-full text-xl md:block lg:text-3xl">
          <li>{tech.name}</li>
        </ul>
      </m.div>
    </LazyMotion>
  );
};

export default function MyTechSection() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-8 py-12">
        <h1 className="mx-12 bg-slate-50 text-center text-4xl font-bold lg:text-5xl">
          Tools I&apos;m Familiar With
        </h1>

        <div className="relative z-0 grid grid-cols-6 gap-4">
          <div className="absolute inset-0 m-auto h-[100%] w-[100%] rounded-full bg-violet-500/30 blur-3xl transition-all" />
          {myTechList.map((tech, index) => (
            <MyTechCard key={tech.id} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
