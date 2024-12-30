"use client";

import Link from "next/link";

//! inset-0 (absolute) // h-screen
export default function HeroIcons() {
  return (
    // <div className="lg:py-54 mx-auto max-w-4xl bg-red-400 px-6 py-36 text-center">
    <div className="overflow-hidden">
      <div className="animate-infinite-scroll">
        <div
          className={`absolute top-52 h-12 w-12 rounded-full border-4 border-purple-100 bg-purple-400 shadow shadow-purple-100 transition-all hover:scale-125 active:animate-ping`}
        />
      </div>

      <div className="m-auto flex h-screen flex-col items-center justify-center gap-8 text-center">
        {/* <h1 className="text-3xl/normal font-bold sm:text-5xl/normal md:px-4 lg:text-6xl/normal">
        Have you had people you{" "}
        <span className="italic text-purple-400">knew</span> and wish to{" "}
        <span className="italic text-purple-400">cherish</span> them?
        </h1> */}
        <div className="flex max-w-7xl flex-col gap-8 px-4">
          <h1 className="text-4xl/normal font-bold lg:text-6xl/normal">
            Enim ea quis{" "}
            <span className="inline-block bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              proident
            </span>{" "}
            ullamco magna to{" "}
            <span className="italic text-purple-600">eiusmod</span> nostrud?
          </h1>
          {/* <p className="mx-auto max-w-xl px-4 py-8 text-xl text-gray-400 md:text-2xl">
        Sometimes the only thing we have is their memories that we certainly
        wouldn&apos;t want to lose.
        <br />
        <br />
        Feel free to add your loved ones, memories, events with them here.
        </p> */}
          <p className="mx-auto max-w-xl text-xl/normal text-gray-400 md:max-w-3xl lg:text-2xl/normal">
            Dolor sit, amet consectetur adipisicing elit. Voluptas fugiat,
            repellendus iste ipsum iusto esse! Ex nisi ut do reprehenderit magna
            ipsum elit.
          </p>
        </div>
        <Link href="/sign-up">
          <button className="mx-auto h-[52px] select-none rounded-xl border-b-[1px] border-b-purple-400 border-r-purple-500 bg-purple-100 px-4 py-1 font-semibold text-purple-700 shadow transition-all duration-150 [box-shadow:0_5px_0_0_#c084fc,0_10px_0_0_#1b70f841] active:translate-y-2 active:border-none active:[box-shadow:0_0px_0_0,0_0px_0_0] md:block">
            Share
          </button>
        </Link>
      </div>
    </div>
  );
}
