"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// A little robot that pops up from the bottom-right corner. Two triggers:
// typing "robot" anywhere on the page (outside an input), or clicking my
// name in the sidebar five times in quick succession — Sidebar dispatches
// ROBOT_EVENT for that so this component can live at the layout root.
// It has to: .panel uses backdrop-filter, which would turn any
// position:fixed descendant of the sidebar into one positioned relative
// to the card instead of the viewport.
export const ROBOT_EVENT = "robot-egg";

const SECRET = "robot";
const AUTO_HIDE_MS = 12000;

const LINES = [
  "beep boop. you found me.",
  "i'm learning to remember where i left things. it's going okay.",
  "i can relocalize across a whole building. still can't find my charger.",
  "my latent space is interpretable. mostly.",
  "(click me for more)",
];

export default function RobotEgg() {
  const [visible, setVisible] = useState(false);
  const [lineIdx, setLineIdx] = useState(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setVisible(false), AUTO_HIDE_MS);
  }, []);

  const show = useCallback(() => {
    setLineIdx(0);
    setVisible(true);
    scheduleHide();
  }, [scheduleHide]);

  useEffect(() => {
    let typed = "";
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.key.length !== 1) return;
      typed = (typed + e.key.toLowerCase()).slice(-SECRET.length);
      if (typed === SECRET) show();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(ROBOT_EVENT, show);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(ROBOT_EVENT, show);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [show]);

  const nextLine = () => {
    setLineIdx((i) => (i + 1) % LINES.length);
    scheduleHide();
  };

  return (
    <div
      className={`robot-egg fixed bottom-0 right-4 sm:right-8 z-50 flex items-end gap-1 ${
        visible ? "robot-egg--in pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="panel relative mb-16 max-w-[200px] px-3 py-2 pr-6 text-xs text-[var(--global-text-color)] leading-relaxed">
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          tabIndex={visible ? 0 : -1}
          className="absolute top-1 right-2 text-[var(--global-muted-color)] hover:text-[var(--global-text-color)] leading-none text-sm"
        >
          ×
        </button>
        <p aria-live="polite">{LINES[lineIdx]}</p>
      </div>

      <button
        onClick={nextLine}
        aria-label="Robot — click for another line"
        tabIndex={visible ? 0 : -1}
        className="robot-egg__bot block text-[var(--global-muted-color)]"
      >
        {/* Line-art robot drawn in the site's muted text color, with the
            accent color only on the antenna tip, so it reads like the
            rest of the UI in both themes. */}
        <svg
          width="60"
          height="76"
          viewBox="0 0 60 76"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <g className="robot-egg__antenna">
            <line x1="30" y1="6" x2="30" y2="14" />
            <circle cx="30" cy="5" r="2.5" fill="var(--global-theme-color)" stroke="none" />
          </g>
          <rect x="12" y="14" width="36" height="28" rx="10" fill="var(--global-bg-color)" />
          <g className="robot-egg__eyes" fill="var(--global-text-color)" stroke="none">
            <circle cx="23" cy="27" r="2" />
            <circle cx="37" cy="27" r="2" />
          </g>
          <path d="M27 33 Q30 35.5 33 33" />
          <line x1="12" y1="28" x2="9" y2="28" />
          <line x1="48" y1="28" x2="51" y2="28" />
          <rect x="18" y="46" width="24" height="30" rx="7" fill="var(--global-bg-color)" />
          <line x1="18" y1="52" x2="11" y2="62" />
          <g className="robot-egg__wave">
            <line x1="42" y1="52" x2="49" y2="62" />
          </g>
        </svg>
      </button>
    </div>
  );
}
