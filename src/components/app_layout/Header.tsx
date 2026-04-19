"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useDarkMode } from "@/hooks/useDarkMode";
import { personalInfo } from "@/app/data/portfolioData";

const smoothScrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
};

export default function Header() {
  const { isDark, toggle } = useDarkMode();

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-slate-900 bg-white dark:border-violet-400 dark:bg-slate-900">
      <nav
        aria-label="Global"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-4"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => window.scrollTo(0, 0)}
          className="relative block h-12 w-12 rounded border-2 border-slate-900 bg-violet-600 transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 hover:[box-shadow:0_0_0_0_#0f172a] dark:border-violet-400 dark:[box-shadow:4px_4px_0_0_#7c3aed] dark:hover:[box-shadow:0_0_0_0_#7c3aed]"
        >
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
            S
          </p>
        </Link>

        {/* Nav links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 gap-x-8 text-lg font-semibold md:flex">
          <Link
            onClick={(e) => window.scrollTo(0, 0)}
            href="/"
            className="text-slate-900 transition-colors hover:text-violet-600 dark:text-slate-50 dark:hover:text-violet-400"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => smoothScrollTo("about")}
            className="text-slate-900 transition-colors hover:text-violet-600 dark:text-slate-50 dark:hover:text-violet-400"
          >
            About
          </Link>
          <Link
            href="#experience"
            onClick={() => smoothScrollTo("experience")}
            className="text-slate-900 transition-colors hover:text-violet-600 dark:text-slate-50 dark:hover:text-violet-400"
          >
            Work
          </Link>
          <Link
            href="#projects"
            onClick={() => smoothScrollTo("projects")}
            className="text-slate-900 transition-colors hover:text-violet-600 dark:text-slate-50 dark:hover:text-violet-400"
          >
            Projects
          </Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-x-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="flex h-12 w-12 items-center justify-center rounded border-2 border-slate-900 bg-slate-50 transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_0_#0f172a] dark:border-violet-400 dark:bg-slate-800 dark:[box-shadow:4px_4px_0_0_#7c3aed] dark:hover:[box-shadow:0_0_0_0_#7c3aed]"
          >
            {isDark ? (
              <HiSun size={22} className="text-amber-400" />
            ) : (
              <HiMoon size={22} className="text-slate-900" />
            )}
          </button>

          <Link
            target="_blank"
            href={personalInfo.github}
            className="flex h-12 w-12 items-center justify-center rounded border-2 border-slate-900 transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_0_#0f172a] dark:border-violet-400 dark:text-slate-50 dark:[box-shadow:4px_4px_0_0_#7c3aed] dark:hover:[box-shadow:0_0_0_0_#7c3aed]"
          >
            <FaGithub size={28} />
          </Link>
          <Link
            target="_blank"
            href={personalInfo.linkedin}
            className="flex h-12 w-12 items-center justify-center rounded border-2 border-slate-900 transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_0_#0f172a] dark:border-violet-400 dark:text-slate-50 dark:[box-shadow:4px_4px_0_0_#7c3aed] dark:hover:[box-shadow:0_0_0_0_#7c3aed]"
          >
            <FaLinkedin size={28} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
