"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

// ARV-825 docked against the BRD4 BD1 bromodomain, predicted with Chai-1
// (Chai Discovery, 2024, bioRxiv 10.1101/2024.10.10.615955) from the
// full-length BRD4 sequence + ARV-825's PubChem SMILES (CID 92044400).
// The PDB served here is a crop of just the folded BD1 domain (residues
// 51-176) plus the ligand — the rest of full-length BRD4 is intrinsically
// disordered, so it isn't included. Rendered client-side with 3Dmol.js
// (the library behind py3Dmol), which computes its own real cartoon
// secondary-structure geometry from the backbone atoms — nothing here is
// hand-drawn. Chai-1's interface confidence for this pose was modest
// (ipTM ≈ 0.26): a plausible docked pose, not a certain one.
const STRUCTURE_URL = "/brd4-bd1-arv825.pdb";

const LIGAND_FACTS = [
  "PROTACs don't inhibit their target — they hijack the cell's own ubiquitin-proteasome system to tag it for destruction instead.",
  "ARV-825 links a BET-bromodomain binder (derived from OTX015/JQ1) to a cereblon-binding thalidomide analog via a flexible PEG linker.",
  "Because PROTACs act catalytically — one molecule can degrade many copies of its target — they can work at much lower doses than a typical inhibitor.",
  "PROTAC potency depends on how stable the ternary complex (target–PROTAC–E3 ligase) is, not just how tightly either end binds alone — sometimes called 'event-driven' pharmacology.",
  "Click again for another one →",
];

const PROTEIN_FACTS = [
  "Bromodomains 'read' epigenetic marks — they recognize acetylated lysines on histone tails, acting as sensors of the histone code.",
  "This four-helix bundle fold is shared by all ~61 human bromodomains; small differences in the ZA and BC loops give each one its own selectivity.",
  "I used a similar sparse-autoencoder interpretability approach on protein–ligand binding at the Friesner Lab (with Schrödinger) — more on the work page.",
  "Cartoon ribbon diagrams like this one were pioneered by Jane Richardson in the early 1980s to make protein topology legible at a glance.",
  "This structure is a Chai-1 prediction, not an experimentally solved one — a reminder that even the 'real' structures on this site are computational hypotheses.",
  "Click again for another one →",
];

type ViewerHandle = {
  el: HTMLDivElement;
  viewer: import("3dmol").GLViewer;
  hoveredChain: string | null;
};

type Popup = { x: number; y: number; text: string };

const LAYOUT = { right: "0%", top: "6%", width: 900, height: 900 };

export default function MolecularField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<ViewerHandle | null>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;
  const [popup, setPopup] = useState<Popup | null>(null);
  const factIndexRef = useRef({ A: 0, B: 0 });

  useEffect(() => {
    let cancelled = false;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    async function setup() {
      const [$3Dmol, pdbRes] = await Promise.all([
        import("3dmol"),
        fetch(STRUCTURE_URL),
      ]);
      if (cancelled) return;
      const pdbData = await pdbRes.text();
      if (cancelled || !containerRef.current) return;

      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.right = LAYOUT.right;
      el.style.top = LAYOUT.top;
      el.style.width = `${LAYOUT.width}px`;
      el.style.height = `${LAYOUT.height}px`;
      el.style.pointerEvents = "auto";
      el.style.cursor = "grab";
      containerRef.current.appendChild(el);

      const viewer = $3Dmol.createViewer(el, {
        backgroundColor: "black",
        backgroundAlpha: 0,
      });
      viewer.addModel(pdbData, "pdb");
      applyStyle(viewer, themeRef.current);
      addLabels(viewer, themeRef.current);

      const handle: ViewerHandle = { el, viewer, hoveredChain: null };
      handleRef.current = handle;

      viewer.zoomTo();
      viewer.zoom(1.25);
      viewer.render();

      viewer.setHoverDuration(60);
      viewer.setHoverable(
        {},
        true,
        (atom: { chain: string }) => {
          if (!atom || handle.hoveredChain === atom.chain) return;
          handle.hoveredChain = atom.chain;
          applyStyle(viewer, themeRef.current, atom.chain);
          viewer.render();
        },
        () => {
          if (handle.hoveredChain === null) return;
          handle.hoveredChain = null;
          applyStyle(viewer, themeRef.current, null);
          viewer.render();
        }
      );

      viewer.setClickable(
        {},
        true,
        (atom: { chain: "A" | "B" }, _v: unknown, event: MouseEvent) => {
          if (!atom) return;
          const facts = atom.chain === "B" ? LIGAND_FACTS : PROTEIN_FACTS;
          const idx = factIndexRef.current[atom.chain] % facts.length;
          factIndexRef.current[atom.chain] += 1;
          setPopup({ x: event.clientX, y: event.clientY, text: facts[idx] });
        }
      );

      // render() is what syncs newly hoverable/clickable atoms into the
      // viewer's internal pick lists (via updateClickables()) — without
      // this second call, setHoverable/setClickable's flags never take
      // effect and neither hover nor click ever fires.
      viewer.render();

      if (!prefersReducedMotion) {
        viewer.spin("y", 0.4);
      }
    }

    setup();

    function handleResize() {
      handleRef.current?.viewer.resize();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", handleResize);
      const handle = handleRef.current;
      if (handle) {
        handle.viewer.spin(false);
        handle.el.remove();
      }
      handleRef.current = null;
    };
  }, []);

  // re-style on theme toggle without tearing down/recreating the viewer
  useEffect(() => {
    const handle = handleRef.current;
    if (!handle) return;
    applyStyle(handle.viewer, theme, handle.hoveredChain);
    handle.viewer.removeAllLabels();
    addLabels(handle.viewer, theme);
    handle.viewer.render();
  }, [theme]);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      style={{ backgroundColor: theme === "dark" ? "#0a0e17" : "#fafaf8" }}
    >
      <div ref={containerRef} className="relative w-full h-full" aria-hidden="true" />
      {popup && (
        <div
          className="panel pointer-events-auto fixed max-w-[260px] p-4 text-sm"
          style={{
            left: Math.min(popup.x + 16, window.innerWidth - 280),
            top: Math.min(popup.y + 16, window.innerHeight - 160),
          }}
        >
          <button
            onClick={() => setPopup(null)}
            aria-label="Close"
            className="absolute top-2 right-2 text-[var(--global-muted-color)] hover:text-[var(--global-text-color)] leading-none text-base"
          >
            ×
          </button>
          <p className="pr-4 text-[var(--global-text-color)] leading-relaxed">
            {popup.text}
          </p>
        </div>
      )}
    </div>
  );
}

function applyStyle(
  viewer: import("3dmol").GLViewer,
  theme: string,
  hoveredChain: string | null = null
) {
  const isDark = theme === "dark";
  const proteinHovered = hoveredChain === "A";
  const ligandHovered = hoveredChain === "B";

  viewer.setStyle(
    { chain: "A" },
    {
      cartoon: {
        color: proteinHovered
          ? "#7fb0ff"
          : isDark
            ? "#c7cedb"
            : "#4a5568",
        opacity: proteinHovered ? 1 : isDark ? 0.95 : 0.4,
        thickness: 0.5,
      },
    }
  );
  viewer.setStyle(
    { chain: "B" },
    {
      stick: {
        colorscheme: isDark ? "Jmol" : "default",
        radius: ligandHovered ? 0.24 : 0.16,
        opacity: ligandHovered ? 1 : isDark ? 0.85 : 0.75,
      },
    }
  );
}

function addLabels(viewer: import("3dmol").GLViewer, theme: string) {
  const isDark = theme === "dark";
  const fontColor = isDark ? "#d2d8e4" : "#282e3c";
  viewer.addLabel(
    "ARV-825",
    {
      fontColor,
      fontSize: 12,
      showBackground: false,
      inFront: true,
    },
    { chain: "B" }
  );
  viewer.addLabel(
    "BRD4 · BD1 bromodomain",
    {
      fontColor,
      fontSize: 12,
      showBackground: false,
      inFront: true,
    },
    { chain: "A", resi: 60 }
  );
}
