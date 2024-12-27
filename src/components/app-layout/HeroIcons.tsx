//! inset-0 (absolute) // h-screen
export default function HeroIcons() {
  return (
    // <div className="lg:py-54 mx-auto max-w-4xl bg-red-400 px-6 py-36 text-center">
    <div className="inset-0 m-auto flex h-screen w-full max-w-7xl flex-col justify-center gap-2 text-center">
      {/* <h1 className="text-3xl/normal font-bold sm:text-5xl/normal md:px-4 lg:text-6xl/normal">
        Have you had people you{" "}
        <span className="italic text-purple-400">knew</span> and wish to{" "}
        <span className="italic text-purple-400">cherish</span> them?
        </h1> */}
      <h1 className="text-3xl/normal font-bold sm:text-5xl/normal md:px-4 lg:text-6xl/normal">
        Enim ea quis
        <span className="italic text-purple-400"> proident</span> ullamco magna
        to <span className="italic text-purple-400">eiusmod</span> nostrud?
      </h1>
      {/* <p className="mx-auto max-w-xl px-4 py-8 text-xl text-gray-400 md:text-2xl">
        Sometimes the only thing we have is their memories that we certainly
        wouldn&apos;t want to lose.
        <br />
        <br />
        Feel free to add your loved ones, memories, events with them here.
        </p> */}
      <p className="mx-auto px-4 py-8 text-[18px] text-gray-400 md:text-2xl">
        Dolor sit, amet consectetur adipisicing elit. Voluptas fugiat,
        repellendus iste ipsum iusto esse!
        <br />
        <br />
        Ex nisi ut do reprehenderit magna ipsum elit.
      </p>
      <button className="mx-auto h-[52px] select-none rounded-xl border-b-[1px] border-b-purple-400 border-r-purple-500 bg-purple-100 px-4 py-1 font-semibold text-purple-700 shadow transition-all duration-150 [box-shadow:0_5px_0_0_#c084fc,0_10px_0_0_#1b70f841] hover:bg-purple-50 hover:text-purple-400 active:translate-y-2 active:border-none active:[box-shadow:0_0px_0_0,0_0px_0_0] md:block">
        Share
      </button>
    </div>
  );
}
