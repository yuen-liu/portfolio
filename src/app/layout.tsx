import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import MolecularField from "@/components/MolecularField";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bridget Liu",
  description:
    "Bridget Liu — Columbia I.I. Rabi Scholar studying Computer Science, Math, and Biochemistry. Researching interpretability and ML for drug discovery at Google, Pfizer, and the Friesner & AlQuraishi Labs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} min-h-screen font-sans`}>
        <ThemeProvider>
          <MolecularField />
          <div className="relative z-10 min-h-screen pointer-events-none">
            <div className="max-w-5xl px-6 py-10 lg:py-0 lg:pl-[21rem] lg:min-h-screen lg:flex lg:items-center pointer-events-auto">
              <Sidebar />
              <main className="w-full">{children}</main>
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
