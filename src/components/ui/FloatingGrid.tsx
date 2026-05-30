"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const colorTokens = [
  { fill: "#7c3aed", glow: "rgba(124, 58, 237, 0.3)" },
  { fill: "#fbbf24", glow: "rgba(251, 191, 36, 0.3)" },
  { fill: "#38bdf8", glow: "rgba(56, 189, 248, 0.27)" },
];

export default function FloatingGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const isMobile = window.innerWidth < 768;
      const boxCount = isMobile ? 9 : 20;
      const container = containerRef.current;

      container.innerHTML = "";

      const randomizeBox = (box: HTMLDivElement) => {
        const size = gsap.utils.random(20, 50);
        const color = gsap.utils.random(colorTokens);
        const glowSize = gsap.utils.random(16, 24);

        Object.assign(box.style, {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color.fill,
          border: "2px solid #0f172a",
          boxShadow: `4px 4px 0px 0px #0f172a, 0 0 ${glowSize}px ${color.glow}`,
          opacity: `${isMobile ? 0.22 : 0.34}`,
        });
      };

      for (let i = 0; i < boxCount; i++) {
        const box = document.createElement("div");

        Object.assign(box.style, {
          position: "absolute",
          willChange: "transform",
        });

        container.appendChild(box);
        randomizeBox(box);

        gsap.set(box, {
          x: gsap.utils.random(-50, window.innerWidth + 50),
          y: window.innerHeight + 100,
          rotation: gsap.utils.random(0, 360),
        });

        gsap.to(box, {
          y: -150,
          rotation: "+=360",
          duration: gsap.utils.random(12, 22),
          ease: "none",
          repeat: -1,
          delay: gsap.utils.random(0, 20),
          onRepeat: () => {
            randomizeBox(box);
            gsap.set(box, {
              x: gsap.utils.random(-50, window.innerWidth + 50),
              y: window.innerHeight + 100,
            });
          },
        });
      }

      return () => {
        container.innerHTML = "";
      };
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden bg-transparent"
      aria-hidden="true"
    />
  );
}
