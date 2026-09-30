// Shared keyboard stepping for the easter eggs (robot + structure facts).
// Space / → go to the next line, ← goes back. Only the most recently
// opened egg responds, so a single keypress never advances two at once;
// closing it hands the keys back to whichever egg is still open.

let openEggs: string[] = [];

export function claimEggKeys(id: string) {
  openEggs = [...openEggs.filter((e) => e !== id), id];
}

export function releaseEggKeys(id: string) {
  openEggs = openEggs.filter((e) => e !== id);
}

// Returns +1 / -1 for a navigation key aimed at egg `id`, else 0.
export function eggStep(e: KeyboardEvent, id: string): 1 | -1 | 0 {
  if (openEggs[openEggs.length - 1] !== id) return 0;
  const t = e.target as HTMLElement | null;
  if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return 0;
  // Space on a focused button/link already fires its own click; don't
  // double-step (clicking the robot leaves it focused, for example).
  if (e.key === " " && t && (t.tagName === "BUTTON" || t.tagName === "A")) return 0;
  if (e.key === " " || e.key === "ArrowRight") return 1;
  if (e.key === "ArrowLeft") return -1;
  return 0;
}
