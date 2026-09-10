"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

// ARV-825 (PubChem CID 92044400), a BRD4-degrading PROTAC.
// Coordinates are a real 3D conformer generated from PubChem's isomeric SMILES
// via RDKit (ETKDG embedding + MMFF94 optimization), heavy atoms only,
// centered on the molecule's centroid. This is the free-ligand geometry —
// not a docked pose against BRD4.
const ARV825_ATOMS: { e: string; x: number; y: number; z: number }[] = [
  { e: "C", x: -3.673, y: -0.904, z: -3.342 },
  { e: "C", x: -2.761, y: 0.079, z: -4.015 },
  { e: "C", x: -2.985, y: 0.58, z: -5.29 },
  { e: "S", x: -1.808, y: 1.724, z: -5.745 },
  { e: "C", x: -1.01, y: 1.594, z: -4.266 },
  { e: "C", x: -1.542, y: 0.626, z: -3.429 },
  { e: "C", x: -0.918, y: 0.201, z: -2.165 },
  { e: "N", x: -0.389, y: 1.0, z: -1.305 },
  { e: "C", x: -0.417, y: 2.447, z: -1.497 },
  { e: "C", x: 0.415, y: 2.815, z: -2.684 },
  { e: "N", x: 1.505, y: 3.551, z: -2.703 },
  { e: "N", x: 1.847, y: 3.75, z: -4.006 },
  { e: "C", x: 0.979, y: 3.114, z: -4.77 },
  { e: "N", x: 0.061, y: 2.444, z: -3.97 },
  { e: "C", x: 1.075, y: 3.054, z: -6.247 },
  { e: "C", x: 0.149, y: 3.097, z: -0.235 },
  { e: "C", x: -0.773, y: 2.879, z: 0.94 },
  { e: "O", x: -1.871, y: 3.429, z: 0.97 },
  { e: "N", x: -0.219, y: 2.075, z: 1.92 },
  { e: "C", x: -0.683, y: 1.9, z: 3.238 },
  { e: "C", x: -1.841, y: 2.493, z: 3.741 },
  { e: "C", x: -2.231, y: 2.298, z: 5.074 },
  { e: "C", x: -1.466, y: 1.508, z: 5.925 },
  { e: "C", x: -0.286, y: 0.942, z: 5.434 },
  { e: "C", x: 0.094, y: 1.12, z: 4.098 },
  { e: "O", x: -1.731, y: 1.232, z: 7.234 },
  { e: "C", x: -3.072, y: 1.358, z: 7.719 },
  { e: "C", x: -3.79, y: 0.003, z: 7.716 },
  { e: "O", x: -4.148, y: -0.465, z: 6.413 },
  { e: "C", x: -5.331, y: 0.144, z: 5.886 },
  { e: "C", x: -5.649, y: -0.45, z: 4.51 },
  { e: "O", x: -4.77, y: 0.093, z: 3.522 },
  { e: "C", x: -3.91, y: -0.86, z: 2.893 },
  { e: "C", x: -2.891, y: -1.484, z: 3.843 },
  { e: "O", x: -1.898, y: -2.216, z: 3.116 },
  { e: "C", x: -0.924, y: -2.752, z: 4.024 },
  { e: "C", x: 0.15, y: -3.51, z: 3.242 },
  { e: "N", x: 1.006, y: -2.586, z: 2.488 },
  { e: "C", x: 1.874, y: -3.105, z: 1.523 },
  { e: "C", x: 2.317, y: -4.445, z: 1.545 },
  { e: "C", x: 3.236, y: -4.959, z: 0.607 },
  { e: "C", x: 3.775, y: -4.136, z: -0.373 },
  { e: "C", x: 3.371, y: -2.816, z: -0.365 },
  { e: "C", x: 2.462, y: -2.302, z: 0.551 },
  { e: "C", x: 2.334, y: -0.862, z: 0.252 },
  { e: "O", x: 1.711, y: -0.055, z: 0.922 },
  { e: "N", x: 3.101, y: -0.624, z: -0.861 },
  { e: "C", x: 3.806, y: -1.733, z: -1.232 },
  { e: "O", x: 4.663, y: -1.844, z: -2.088 },
  { e: "C", x: 3.332, y: 0.686, z: -1.457 },
  { e: "C", x: 4.719, y: 1.235, z: -1.127 },
  { e: "C", x: 4.953, y: 2.533, z: -1.882 },
  { e: "C", x: 4.834, y: 2.307, z: -3.368 },
  { e: "O", x: 5.495, y: 2.938, z: -4.189 },
  { e: "N", x: 3.913, y: 1.37, z: -3.765 },
  { e: "C", x: 3.09, y: 0.604, z: -2.973 },
  { e: "O", x: 2.187, y: -0.065, z: -3.481 },
  { e: "C", x: -0.857, y: -1.253, z: -1.868 },
  { e: "C", x: -1.292, y: -1.707, z: -0.618 },
  { e: "C", x: -1.247, y: -3.07, z: -0.326 },
  { e: "C", x: -0.732, y: -3.966, z: -1.261 },
  { e: "C", x: -0.274, y: -3.513, z: -2.499 },
  { e: "C", x: -0.34, y: -2.152, z: -2.808 },
  { e: "Cl", x: -0.644, y: -5.64, z: -0.879 },
  { e: "C", x: -4.095, y: 0.252, z: -6.237 },
];

const ARV825_BONDS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
  [9, 10], [10, 11], [11, 12], [12, 13], [12, 14], [8, 15], [15, 16],
  [16, 17], [16, 18], [18, 19], [19, 20], [20, 21], [21, 22], [22, 23],
  [23, 24], [22, 25], [25, 26], [26, 27], [27, 28], [28, 29], [29, 30],
  [30, 31], [31, 32], [32, 33], [33, 34], [34, 35], [35, 36], [36, 37],
  [37, 38], [38, 39], [39, 40], [40, 41], [41, 42], [42, 43], [43, 44],
  [44, 45], [44, 46], [46, 47], [47, 48], [46, 49], [49, 50], [50, 51],
  [51, 52], [52, 53], [52, 54], [54, 55], [55, 56], [6, 57], [57, 58],
  [58, 59], [59, 60], [60, 61], [61, 62], [60, 63], [2, 64], [5, 1],
  [13, 4], [13, 9], [24, 19], [43, 38], [47, 42], [55, 49], [62, 57],
];

const ELEMENT_COLORS_LIGHT: Record<string, string> = {
  C: "rgba(70, 78, 92, 0.34)",
  N: "rgba(37, 99, 235, 0.4)",
  O: "rgba(220, 38, 38, 0.36)",
  S: "rgba(202, 138, 4, 0.4)",
  Cl: "rgba(22, 163, 74, 0.4)",
};
const ELEMENT_COLORS_DARK: Record<string, string> = {
  C: "rgba(200, 206, 216, 0.42)",
  N: "rgba(129, 178, 255, 0.55)",
  O: "rgba(255, 120, 120, 0.5)",
  S: "rgba(250, 204, 90, 0.5)",
  Cl: "rgba(110, 231, 160, 0.5)",
};
const ELEMENT_RADIUS: Record<string, number> = { C: 2.6, N: 2.7, O: 2.7, S: 3.1, Cl: 3.0 };

type Instance = {
  cx: number;
  cy: number;
  scale: number;
  angle: number;
  speed: number;
  tiltX: number;
};

const INSTANCE_COUNT = 4;

function buildInstance(seed: number, width: number, height: number): Instance {
  const rand = (n: number) => {
    const v = Math.sin(n * 999) * 10000;
    return v - Math.floor(v);
  };
  return {
    cx: (0.12 + rand(seed + 1) * 0.76) * width,
    cy: (0.1 + rand(seed + 2) * 0.85) * height,
    scale: 11 + rand(seed + 3) * 7,
    angle: rand(seed + 4) * Math.PI * 2,
    speed: 0.00022 + rand(seed + 5) * 0.00028,
    tiltX: (rand(seed + 6) - 0.5) * 0.7,
  };
}

export default function MolecularField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let instances: Instance[] = [];

    function build() {
      instances = Array.from({ length: INSTANCE_COUNT }, (_, i) =>
        buildInstance(i + 1, width, height)
      );
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;

    function draw() {
      if (!ctx) return;
      const isDark = document.documentElement.classList.contains("dark");
      const bondColor = isDark
        ? "rgba(180, 190, 210, 0.22)"
        : "rgba(60, 70, 90, 0.15)";
      const elementColors = isDark ? ELEMENT_COLORS_DARK : ELEMENT_COLORS_LIGHT;

      ctx.clearRect(0, 0, width, height);

      const perspective = 480;

      for (const inst of instances) {
        const cos = Math.cos(inst.angle);
        const sin = Math.sin(inst.angle);
        const tiltCos = Math.cos(inst.tiltX);
        const tiltSin = Math.sin(inst.tiltX);

        const projected = ARV825_ATOMS.map((a) => {
          let x = a.x * cos - a.z * sin;
          let z = a.x * sin + a.z * cos;
          const y = a.y;
          const y2 = y * tiltCos - z * tiltSin;
          z = y * tiltSin + z * tiltCos;
          x *= inst.scale;
          const y3 = y2 * inst.scale;
          z *= inst.scale;

          const persScale = perspective / (perspective + z);
          return {
            sx: inst.cx + x * persScale,
            sy: inst.cy + y3 * persScale,
            scale: persScale,
            element: a.e,
          };
        });

        ctx.beginPath();
        ctx.strokeStyle = bondColor;
        ctx.lineWidth = 1;
        for (const [i, j] of ARV825_BONDS) {
          ctx.moveTo(projected[i].sx, projected[i].sy);
          ctx.lineTo(projected[j].sx, projected[j].sy);
        }
        ctx.stroke();

        for (const p of projected) {
          ctx.beginPath();
          ctx.fillStyle = elementColors[p.element] ?? elementColors.C;
          const r = (ELEMENT_RADIUS[p.element] ?? 2.6) * 0.34 * p.scale;
          ctx.arc(p.sx, p.sy, Math.max(1.1, r), 0, Math.PI * 2);
          ctx.fill();
        }

        if (!prefersReducedMotion) {
          inst.angle += inst.speed * 16;
        }
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundColor: theme === "dark" ? "#0a0e17" : "#fafaf8",
      }}
    />
  );
}
