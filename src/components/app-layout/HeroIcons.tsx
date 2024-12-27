export default function HeroIcons() {
  return (
    <div className="lg:py:56 mx-auto max-w-4xl px-6 py-32 text-center sm:py-48">
      <h1 className="text-3xl/normal font-bold sm:text-5xl/normal md:px-4 lg:text-6xl/normal">
        Have you had people you{" "}
        <span className="italic text-purple-400">knew</span> and wish to{" "}
        <span className="italic text-purple-400">cherish</span> them?
      </h1>
      <p className="mx-auto max-w-xl px-4 py-8 text-xl text-gray-400 md:text-2xl">
        Sometimes the only thing we have is their memories that we certainly
        wouldn&apos;t want to lose.
        <br />
        <br />
        Feel free to add your loved ones, memories, events with them here.
      </p>
      <button className="text-md mx-auto rounded border-b-4 border-r-4 border-b-purple-400 border-r-purple-500 bg-purple-100 px-4 py-1 font-semibold text-purple-700 shadow-md hover:bg-purple-50 hover:text-purple-400 active:border-none md:block">
        Start Creating
      </button>
    </div>
  );
}
