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
  "beep boop! you found me 🤖",
  "I'm the robot Bridget is teaching to remember where it left things. It's going... okay.",
  "fun fact: I can relocalize across a whole building. I still can't find my charger.",
  "Bridget helped teach robots new tricks from smart-glasses videos — ask me about RoboMemo!",
  "I promise my latent space is interpretable. Mostly.",
  "click me again, I have more thoughts →",
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
      className={`robot-egg fixed bottom-0 right-4 sm:right-8 z-50 flex items-end gap-2 ${
        visible ? "robot-egg--in pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="panel relative mb-24 max-w-[220px] p-3 pr-7 text-sm text-[var(--global-text-color)] leading-relaxed">
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          tabIndex={visible ? 0 : -1}
          className="absolute top-1.5 right-2 text-[var(--global-muted-color)] hover:text-[var(--global-text-color)] leading-none text-base"
        >
          ×
        </button>
        <p aria-live="polite">{LINES[lineIdx]}</p>
      </div>

      <button
        onClick={nextLine}
        aria-label="Robot — click for another line"
        tabIndex={visible ? 0 : -1}
        className="robot-egg__bot block"
      >
        <svg width="104" height="132" viewBox="0 0 104 132" aria-hidden="true">
          {/* antenna */}
          <g className="robot-egg__antenna">
            <line x1="52" y1="8" x2="52" y2="24" stroke="#5b6b82" strokeWidth="3" strokeLinecap="round" />
            <circle cx="52" cy="8" r="5" fill="var(--global-theme-color)" />
          </g>
          {/* head */}
          <rect x="18" y="22" width="68" height="50" rx="18" fill="#dfe6f0" stroke="#5b6b82" strokeWidth="3" />
          <rect x="27" y="31" width="50" height="32" rx="12" fill="#1f2a3a" />
          <g className="robot-egg__eyes" fill="#7fe3ff">
            <ellipse cx="42" cy="46" rx="5" ry="6" />
            <ellipse cx="62" cy="46" rx="5" ry="6" />
          </g>
          <path d="M45 55 Q52 60 59 55" stroke="#7fe3ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="30" cy="58" r="3" fill="#ff9bb5" opacity="0.8" />
          <circle cx="74" cy="58" r="3" fill="#ff9bb5" opacity="0.8" />
          {/* ears */}
          <rect x="10" y="38" width="8" height="18" rx="4" fill="#5b6b82" />
          <rect x="86" y="38" width="8" height="18" rx="4" fill="#5b6b82" />
          {/* body */}
          <rect x="28" y="76" width="48" height="56" rx="14" fill="#dfe6f0" stroke="#5b6b82" strokeWidth="3" />
          <circle cx="52" cy="96" r="7" fill="var(--global-theme-color)" />
          {/* arms */}
          <rect x="12" y="82" width="12" height="30" rx="6" fill="#5b6b82" />
          <g className="robot-egg__wave">
            <rect x="80" y="82" width="12" height="30" rx="6" fill="#5b6b82" />
          </g>
        </svg>
      </button>
    </div>
  );
}
