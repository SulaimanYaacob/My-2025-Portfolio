"use client";

import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const offers = [
  {
    id: 0,
    title: "Responsive Web Design",
  },
  {
    id: 1,
    title: "Minimalist Design",
  },
  {
    id: 2,
    title: "Problem Solving",
  },
];

export default function OfferSection() {
  const [displayBar, setDisplayBar] = useState(0);

  return (
    <section className="flex h-screen w-full flex-col justify-center gap-2 bg-slate-50 text-center">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <h1 className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text font-bold text-transparent lg:text-5xl">
          What I can provide for you
        </h1>
        <div className="flex flex-col gap-8">
          {offers.map((offer, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <button
                className={`h-14 border-2 border-slate-900 transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0px_0_0_#0f172a]`}
                onClick={() => setDisplayBar(offer.id)}
              >
                <MdArrowForwardIos
                  color={`${displayBar === offer.id ? "#8b5cf6" : "#0f172a"}`}
                  size={40}
                />
              </button>
              <h2
                className={`overflow-hidden whitespace-nowrap border-2 border-slate-900 p-2 text-xl transition-all duration-500 [box-shadow:4px_4px_0_0_#0f172a] md:text-3xl ${displayBar === offer.id ? "max-w-full opacity-100" : "max-w-0 opacity-0"}`}
              >
                {offer.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
