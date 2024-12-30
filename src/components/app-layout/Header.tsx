import Link from "next/link";
import { MdCameraRoll } from "react-icons/md";

export default function Header() {
  return (
    <header className="absolute z-10 w-full shadow">
      <nav
        aria-label="Global"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-4"
      >
        <div className="flex flex-1 items-center justify-between">
          <span className="sr-only">Your Company</span>
          <Link href="/">
            <MdCameraRoll className="h-10 w-auto text-purple-600 hover:text-purple-400 active:scale-95" />
          </Link>
          <Link href="/sign-up">
            <button className="text-md rounded-sm border-b-4 border-r-4 border-purple-400 border-r-purple-500 bg-purple-100 px-4 py-1 font-semibold text-purple-600 shadow-md transition-all hover:bg-purple-50 active:translate-x-[1px] active:translate-y-[1px] active:border-none md:block">
              Login
            </button>
          </Link>
        </div>
        <div className="absolute right-1/2 hidden translate-x-1/2 md:flex md:gap-x-12">
          <Link href="/" className="text-md">
            Home
          </Link>
          <Link href="#" className="text-md">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
