"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useDarkMode } from "@/hooks/useDarkMode";
import { personalInfo } from "@/app/data/portfolioData";

const smoothScrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const headerHeight =
    document.querySelector("header")?.getBoundingClientRect().height ?? 84;
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({ top, behavior: "smooth" });
  window.history.replaceState(null, "", `#${id}`);
};

const scrollHome = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  window.history.replaceState(null, "", "/");
};

const navLinkClass =
  "text-slate-900 transition-colors hover:text-violet-600 dark:text-slate-50 dark:hover:text-violet-400";

const squareActionClass =
  "flex h-11 w-11 items-center justify-center rounded border-2 border-slate-900 bg-slate-50 text-slate-900 transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_0_#0f172a] sm:h-12 sm:w-12 dark:border-violet-400 dark:bg-slate-800 dark:text-slate-50 dark:[box-shadow:4px_4px_0_0_#7c3aed] dark:hover:[box-shadow:0_0_0_0_#7c3aed]";

const sectionLinks = [
  { label: "Home", href: "/", id: null },
  { label: "About", href: "#about", id: "about" },
  { label: "Work", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Header() {
  const { isDark, toggle } = useDarkMode();

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-slate-900 bg-white dark:border-violet-400 dark:bg-slate-900">
      <nav
        aria-label="Global"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4"
      >
        <Link
          href="/"
          onClick={(event) => {
            event.preventDefault();
            scrollHome();
          }}
          className="relative block h-11 w-11 rounded border-2 border-slate-900 bg-violet-600 transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 hover:[box-shadow:0_0_0_0_#0f172a] sm:h-12 sm:w-12 dark:border-violet-400 dark:[box-shadow:4px_4px_0_0_#7c3aed] dark:hover:[box-shadow:0_0_0_0_#7c3aed]"
        >
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white sm:text-4xl">
            S
          </p>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 gap-x-4 text-base font-semibold md:flex xl:gap-x-5 xl:text-lg">
          {sectionLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                if (item.id) {
                  smoothScrollTo(item.id);
                  return;
                }
                scrollHome();
              }}
              className={navLinkClass}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-x-3">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className={squareActionClass}
          >
            {isDark ? (
              <HiSun size={20} className="text-amber-400 sm:size-[22px]" />
            ) : (
              <HiMoon size={20} className="text-slate-900 sm:size-[22px]" />
            )}
          </button>

          <Link
            target="_blank"
            href={personalInfo.github}
            className={squareActionClass}
          >
            <FaGithub size={24} className="sm:size-7" />
          </Link>
          <Link
            target="_blank"
            href={personalInfo.linkedin}
            className={squareActionClass}
          >
            <FaLinkedin size={24} className="sm:size-7" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
