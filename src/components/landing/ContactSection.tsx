"use client";

import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import SectionHeading from "@/components/ui/SectionHeading";
import Balloon from "@/components/doodles/Balloon";
import Arrow from "@/components/doodles/Arrow";
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.07] dark:bg-[radial-gradient(#a78bfa_1px,transparent_1px)] dark:opacity-[0.08]" />

      {/* Glow blobs */}
      <div className="animate-glow pointer-events-none absolute bottom-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/18 blur-3xl" />
      <div className="animate-glow pointer-events-none absolute top-1/4 right-1/3 h-48 w-48 rounded-full bg-violet-500/12 blur-3xl" style={{ animationDelay: "1.4s" }} />

      {/* Doodle: Balloon — right side */}
      <div className="absolute right-12 top-20 hidden animate-float text-slate-900 dark:text-amber-300 lg:block">
        <Balloon className="h-24 w-14" />
      </div>

      {/* Doodle: Arrow — left side */}
      <div className="absolute bottom-24 left-12 hidden animate-float-slow text-slate-900 dark:text-violet-400 lg:block">
        <Arrow className="h-16 w-20" />
      </div>

      {/* Doodle: Folded hands — top left */}
      <div className="absolute left-16 top-16 hidden animate-float lg:block">
        <Image
          src="/doodles/hand gestures/folded-hands.svg"
          alt=""
          aria-hidden="true"
          width={64}
          height={64}
          className="opacity-65 dark:invert"
        />
      </div>

      {/* Doodle: Heart eyes — bottom right */}
      <div className="absolute bottom-20 right-20 hidden animate-float-delay lg:block">
        <Image
          src="/doodles/emojis/heart-eyes-emoji.svg"
          alt=""
          aria-hidden="true"
          width={60}
          height={60}
          className="opacity-65 dark:invert"
        />
      </div>

      {/* Doodle: OK hand — top right */}
      <div className="absolute right-16 top-1/3 hidden animate-wiggle lg:block">
        <Image
          src="/doodles/hand gestures/ok.svg"
          alt=""
          aria-hidden="true"
          width={44}
          height={44}
          className="opacity-55 dark:invert"
        />
      </div>

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
                <NeoCard interactive className="flex flex-col items-center gap-3 py-8">
                  <span className="text-slate-800 dark:text-slate-200">{link.icon}</span>
                  <p className="font-bold text-slate-900 dark:text-slate-50">{link.label}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{link.desc}</p>
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
