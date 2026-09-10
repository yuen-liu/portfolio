"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "about" },
  { href: "/projects", label: "work" },
  { href: "/blog", label: "writing" },
];

const socials = [
  {
    href: "https://github.com/yuen-liu",
    label: "GitHub",
    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
  {
    href: "https://www.linkedin.com/in/bridget-liu-944b501ba/",
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    href: "mailto:bgl2126@columbia.edu",
    label: "Email",
    path: "M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0120.25 19.5H3.75a2.25 2.25 0 01-2.25-2.25V6.75zm2.03-.53a.75.75 0 00-.53 1.28l7.94 7.94a1.5 1.5 0 002.12 0l7.94-7.94a.75.75 0 00-.53-1.28H3.53z",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:fixed lg:left-10 lg:top-10 lg:w-64 z-20 mb-10 lg:mb-0">
      <div className="panel overflow-hidden">
        <div className="flex items-center gap-3 px-5 pt-5 pb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-1 ring-[var(--global-border-color)]">
            <Image src="/headshot.png" alt="Bridget Liu" fill className="object-cover" priority />
          </div>
          <div>
            <h1 className="font-serif text-lg leading-tight text-[var(--global-text-color)]">
              Bridget Liu
            </h1>
            <p className="text-xs text-[var(--global-muted-color)]">Columbia University</p>
          </div>
        </div>

        <nav className="flex px-3 gap-1 border-t border-[var(--global-border-color)] pt-3">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex-1 text-center text-xs tracking-wide py-2 rounded-lg transition-colors ${
                  active
                    ? "bg-[var(--global-theme-color)] text-white"
                    : "text-[var(--global-muted-color)] hover:bg-[var(--global-hover-color)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-[var(--global-muted-color)] hover:text-[var(--global-theme-color)] transition-colors"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.path} fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>

        <p className="px-5 pb-4 text-[11px] leading-snug text-[var(--global-muted-color)]">
          background: ARV-825, a BRD4-degrading PROTAC studied for brain
          cancers — real 3D conformer from its PubChem SMILES, not a docked
          pose
        </p>
      </div>
    </aside>
  );
}
