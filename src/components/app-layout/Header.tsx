import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute z-10 w-full border-b-4 border-slate-900 bg-white">
      <nav
        aria-label="Global"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-4"
      >
        <div className="flex flex-1 items-center justify-between">
          <span className="sr-only">Your Company</span>
          <Link
            href="/"
            className="relative block h-12 w-12 border-2 border-slate-900 bg-violet-400"
          >
            {/* <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-violet-600">
              M
            </p>
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-indigo-600">
              A
            </p> */}
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-slate-900">
              M
            </p>
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-slate-900">
              A
            </p>
            {/* <MdCameraRoll className="h-10 w-auto text-violet-600 hover:text-violet-400 active:scale-95" /> */}
          </Link>
          <Link href="/sign-up">
            <button className="border-2 border-slate-900 bg-violet-400 px-4 py-1 text-xl font-semibold transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0px_0_0_#0f172a]">
              Log in
            </button>
          </Link>
        </div>
        <div className="absolute right-1/2 hidden translate-x-1/2 text-xl md:flex md:gap-x-12">
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
        </div>
      </nav>
    </header>
  );
}
