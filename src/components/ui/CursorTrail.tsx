"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  maxAge: number;
  size: number;
  color: string;
  shadowColor: string;
};

const COLORS = [
  { fill: "#7c3aed", shadow: "#4c1d95" },
  { fill: "#d97706", shadow: "#78350f" },
  { fill: "#7c3aed", shadow: "#4c1d95" },
  { fill: "#d97706", shadow: "#78350f" },
];

const SPAWN_DIST = 8;
const MAX_AGE = 45;

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const lastPos = useRef({ x: -999, y: -999 });
  const lastMoveTime = useRef(0);
  const spawnIndex = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      if (dx * dx + dy * dy < SPAWN_DIST * SPAWN_DIST) return;
      lastPos.current = { x, y };
      lastMoveTime.current = performance.now();

      const c = COLORS[spawnIndex.current % COLORS.length];
      spawnIndex.current++;

      particles.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        age: 0,
        maxAge: MAX_AGE,
        size: 6 + Math.random() * 5,
        color: c.fill,
        shadowColor: c.shadow,
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const idle = performance.now() - lastMoveTime.current > 200;

      particles.current = particles.current.filter((p) => p.age < p.maxAge);

      for (const p of particles.current) {
        p.age++;

        if (idle) {
          p.maxAge *= 0.88;
          p.vy -= 0.35;
          p.vx *= 1.04;
        }

        p.x += p.vx;
        p.y += p.vy;

        const progress = p.age / p.maxAge;
        const opacity = Math.max(0, 1 - progress);
        const size = p.size * (1 - progress * 0.4);
        const shadowOffset = Math.max(1, 2 * (1 - progress));

        ctx.globalAlpha = opacity;

        ctx.fillStyle = p.shadowColor;
        ctx.fillRect(
          p.x - size / 2 + shadowOffset,
          p.y - size / 2 + shadowOffset,
          size,
          size
        );

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size);

        ctx.strokeStyle = "#0f172a";
        ctx.lineWidth = 1;
        ctx.strokeRect(p.x - size / 2, p.y - size / 2, size, size);

        ctx.globalAlpha = 1;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    />
  );
}
