"use client";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/app/data/portfolioData";

const links = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: <FaGithub size={28} />,
    desc: "@SulaimanYaacob",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: <FaLinkedin size={28} />,
    desc: "in/sulaimanyaacob",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={28} />,
    desc: personalInfo.email,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-4 py-24 dark:bg-slate-950"
    >
      {/* Dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.07] [background-size:20px_20px] dark:bg-[radial-gradient(#a78bfa_1px,transparent_1px)] dark:opacity-[0.08]" />

      {/* Glow blobs */}
      <div className="bg-amber-400/18 pointer-events-none absolute bottom-1/4 left-1/2 h-72 w-72 -translate-x-1/2 animate-glow rounded-full blur-3xl" />
      <div
        className="bg-violet-500/12 pointer-events-none absolute right-1/3 top-1/4 h-48 w-48 animate-glow rounded-full blur-3xl"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <SectionHeading
          title="Let's Connect"
          subtitle="Open to opportunities, collaborations, and interesting conversations."
          align="center"
        />

        <LazyMotion features={domAnimation}>
          <m.div
            className="mt-8 grid gap-4 sm:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {links.map((link) => (
              <m.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <NeoCard
                  interactive
                  className="flex flex-col items-center gap-3 py-8"
                >
                  <span className="text-slate-800 dark:text-slate-200">
                    {link.icon}
                  </span>
                  <p className="font-bold text-slate-900 dark:text-slate-50">
                    {link.label}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {link.desc}
                  </p>
                </NeoCard>
              </m.a>
            ))}
          </m.div>

          <m.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href={`mailto:${personalInfo.email}`}>
              <NeoButton variant="primary" size="lg">
                <FaEnvelope />
                Say Hello
              </NeoButton>
            </a>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
