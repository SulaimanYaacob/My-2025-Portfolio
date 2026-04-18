"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function FloatingGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const boxCount = 20;
      const colors = ["#7c3aed", "#fbbf24", "#3b82f6"];
      const container = containerRef.current;

      container.innerHTML = "";

      for (let i = 0; i < boxCount; i++) {
        const box = document.createElement("div");

        // Initial random styling
        const size = gsap.utils.random(20, 50);
        const color = gsap.utils.random(colors);

        Object.assign(box.style, {
          position: "absolute",
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          border: "2px solid #0f172a",
          boxShadow: "4px 4px 0px 0px #0f172a",
          opacity: "0",
          zIndex: "-100", // Hardcoded consistency
        });

        container.appendChild(box);

        const randomizeBox = (el: HTMLDivElement) => {
          const newSize = gsap.utils.random(20, 50);
          el.style.width = `${newSize}px`;
          el.style.height = `${newSize}px`;
          el.style.backgroundColor = gsap.utils.random(colors);
        };

        /**
         * 1. Start EVERY box below the screen for a consistent flow.
         * We use window.innerHeight + 100 to hide them initially.
         */
        gsap.set(box, {
          x: gsap.utils.random(0, window.innerWidth),
          y: window.innerHeight + 100,
          rotation: gsap.utils.random(0, 360),
        });

        /**
         * 2. The Animation
         * Using a high stagger (delay) ensures they don't all rise at once.
         */
        gsap.to(box, {
          y: -150,
          rotation: "+=360",
          opacity: 0.6,
          duration: gsap.utils.random(12, 22), // Slower for a smoother feel
          ease: "none",
          repeat: -1,
          // Delay creates the "steady stream" effect from the bottom
          delay: gsap.utils.random(0, 20),
          onRepeat: () => {
            // Refresh visuals so it looks like a new box was "produced"
            randomizeBox(box);

            // Re-randomize X so they don't follow the same vertical tracks
            gsap.set(box, {
              x: gsap.utils.random(0, window.innerWidth),
              y: window.innerHeight + 100,
            });
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 h-full w-full overflow-hidden bg-transparent"
      aria-hidden="true"
    />
  );
}
