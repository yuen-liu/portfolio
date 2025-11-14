import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bridget Liu | Portfolio",
  description: "Columbia sophomore studying CS and Biochem. Rabi scholar interested in AI, drug discovery, and startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} min-h-screen font-sans`}>
        <ThemeProvider>
          <Navigation />
          <main className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
