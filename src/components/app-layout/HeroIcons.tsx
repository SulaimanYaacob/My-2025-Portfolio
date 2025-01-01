"use client";
import Link from "next/link";
import { motion } from "motion/react";

//TODO Drag constraint

//! inset-0 (absolute) // h-screen
export default function HeroIcons() {
  return (
    // <div className="lg:py-54 mx-auto max-w-4xl bg-red-400 px-6 py-36 text-center">
    <div className="overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-52 z-10 h-12 w-12 border-2 border-slate-900 bg-[radial-gradient(#0f172a_1px,transparent_2px)] [background-size:14px_14px] [box-shadow:4px_4px_0_0_#0f172a]"
        animate={{
          scale: 1,
          transition: { duration: 2 },
        }}
      />

      <div className="m-auto flex h-screen flex-col items-center justify-center gap-8 text-center">
        {/* <h1 className="text-3xl/normal font-bold sm:text-5xl/normal md:px-4 lg:text-6xl/normal">
        Have you had people you{" "}
        <span className="italic text-violet-400">knew</span> and wish to{" "}
        <span className="italic text-violet-400">cherish</span> them?
        </h1> */}
        <div className="flex max-w-7xl flex-col gap-8 px-4">
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
            repellendus iste ipsum iusto esse! Ex nisi ut do reprehenderit magna
            ipsum elit.
          </p>
        </div>
        <Link href="/sign-up">
          <button className="mx-auto h-12 rounded-xl border-2 border-slate-900 bg-violet-400 px-4 text-2xl/normal font-semibold transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0px_0_0_#0f172a]">
            Share
          </button>
        </Link>
      </div>
    </div>
  );
}

//? Shadow with animate
//[box-shadow:4px_4px_0_0_#0f172a] hover:[box-shadow:0_0px_0_0_#0f172a] border-2 border-slate-900 bg-violet-400 hover:translate-x-1 hover:translate-y-1 transition-all

//? Shadow only
// [box-shadow:4px_4px_0_0_#0f172a] border-2 border-slate-900
