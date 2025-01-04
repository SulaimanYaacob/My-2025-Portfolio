"use client";
import Link from "next/link";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import { useRef } from "react";

//TODO Drag constraint

//! inset-0 (absolute) // h-screen
export default function HeroIcons() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    // <div className="lg:py-54 mx-auto max-w-4xl bg-red-400 px-6 py-36 text-center">
    <div className="relative overflow-hidden">
      <LazyMotion features={domAnimation}>
        <m.div
          className="absolute -right-36 -top-20 h-72 w-72 border-4 border-slate-900 bg-[radial-gradient(#0f172a_1px,transparent_2px)] [background-size:16px_16px]"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 100,
            ease: "linear",
          }}
        />
        <m.div
          className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full border-4 border-slate-900 bg-[radial-gradient(#0f172a_1px,transparent_2px)] [background-size:16px_16px]"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 100,
            ease: "linear",
          }}
        />
      </LazyMotion>

      <div
        ref={constraintsRef}
        className="flex h-screen items-center justify-center text-center"
      >
        {/* <h1 className="text-3xl/normal font-bold sm:text-5xl/normal md:px-4 lg:text-6xl/normal">
        Have you had people you{" "}
        <span className="italic text-violet-400">knew</span> and wish to{" "}
        <span className="italic text-violet-400">cherish</span> them?
        </h1> */}
        <div className="relative z-0 mx-4">
          {/* <div className="absolute inset-0 max-w-6xl translate-x-6 translate-y-6 scale-105 border-slate-900 bg-[radial-gradient(#0f172a_1px,transparent_2px)] py-8 [background-size:16px_16px]" /> */}
          <div className="relative z-10 flex flex-col items-center gap-8 border-2 border-slate-900 bg-slate-50 py-8 [box-shadow:4px_4px_0_0_#0f172a]">
            <div className="relative flex max-w-6xl flex-col gap-8 px-4">
              <h1 className="text-4xl/normal font-bold lg:text-6xl/normal">
                Enim ea quis{" "}
                <span className="inline-block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}
                  proident
                </span>{" "}
                ullamco magna to{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  eiusmod
                </span>{" "}
                nostrud?
              </h1>
              {/* <p className="mx-auto max-w-xl px-4 py-8 text-xl text-gray-400 md:text-2xl">
        Sometimes the only thing we have is their memories that we certainly
        wouldn&apos;t want to lose.
        <br />
        <br />
        Feel free to add your loved ones, memories, events with them here.
        </p> */}
              <p className="mx-auto max-w-xl text-xl/normal text-slate-500 md:max-w-3xl lg:text-2xl/normal">
                Dolor sit, amet consectetur adipisicing elit. Voluptas fugiat,
                repellendus iste ipsum iusto esse! Ex nisi ut do reprehenderit
                magna ipsum elit.
              </p>
            </div>
            <Link href="/sign-up">
              <button className="mx-auto h-12 rounded-xl border-2 border-slate-900 bg-violet-400 px-4 text-2xl/normal font-semibold transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0px_0_0_#0f172a]">
                Share
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//? Shadow with animate
//[box-shadow:4px_4px_0_0_#0f172a] hover:[box-shadow:0_0px_0_0_#0f172a] border-2 border-slate-900 bg-violet-400 hover:translate-x-1 hover:translate-y-1 transition-all

//? Shadow only
// [box-shadow:4px_4px_0_0_#0f172a] border-2 border-slate-900
