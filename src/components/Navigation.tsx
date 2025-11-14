"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();
  const { theme } = useTheme();

  const navItems = [
    { href: "/", label: "about" },
    { href: "/projects", label: "projects" },
    { href: "/blog", label: "blog" },
    { href: "/resume", label: "resume" },
  ];

  return (
    <nav 
      className="sticky top-0 z-50 dark:border-b dark:border-gray-700"
      style={{ 
        backgroundColor: theme === 'light' ? '#ffffff' : '#111827',
        borderBottom: theme === 'dark' ? '1px solid #374151' : 'none'
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-[var(--global-theme-color)]"
                    : "hover:text-[var(--global-theme-color)]"
                }`}
                style={pathname !== item.href ? { 
                  color: theme === 'light' ? '#000000' : '#9ca3af' 
                } : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

