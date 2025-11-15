import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

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
      <body className="min-h-screen">
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
