import React from "react";
import Header from "./Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-z-10 bg-violet-100">
      <Header />
      {/* <div className="absolute right-1/2 top-28 w-[250px] translate-x-1/2 transform bg-cyan-700 p-4 text-center">
        <h2 className="text-2xl font-bold">Reminder</h2>
        <div className="my-2 flex justify-between text-start font-semibold">
          <div>
            <p>Primary</p>
            <p>Secondary</p>
          </div>
          <div className="text-end">
            <p className="text-violet-400">violet-400</p>
            <p className="text-slate-900">slate-900</p>
          </div>
        </div>
      </div> */}
      <div className="mx-auto">{children}</div>
    </div>
  );
}
