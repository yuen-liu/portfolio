import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-neutral-200 dark:border-gray-700">
            <Image
              src="/headshot.jpg"
              alt="Bridget Liu"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Bridget Liu
          </h1>
          <p className="text-lg text-black dark:text-neutral-300 mb-4">
            Undergraduate ML Researcher at Columbia University
          </p>
          <div className="space-y-2 text-black dark:text-neutral-400">
            <p>Columbia University</p>
            <p>New York, NY 10027</p>
            <p className="pt-2">
              Reach me at{" "}
              <a
                href="mailto:bgl2126@columbia.edu"
                className="text-[var(--global-theme-color)] hover:underline"
              >
                bgl2126@columbia.edu
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section>
        <p className="text-lg leading-relaxed text-black dark:text-neutral-300 mb-6">
          Hi! I&apos;m an undergraduate at Columbia University studying Computer Science and Biochemistry. 
          I&apos;m passionate about AI, drug discovery, and startups. I&apos;m grateful to be supported by the 
          I.I. Rabi Scholarship.
        </p>
        <p className="text-lg leading-relaxed text-black dark:text-neutral-300">
          Mission: make drug discovery more accessible
        </p>
      </section>

      {/* News Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">news</h2>
        <div className="space-y-4">
          <div className="flex gap-6 pb-4 border-b border-neutral-200 dark:border-gray-700 last:border-0">
            <div className="flex-shrink-0 w-20 text-sm font-medium text-[var(--global-theme-color)]">
              2025
            </div>
            <div className="flex-1 text-black dark:text-neutral-300">
              Starting research on mechanistic interpretability in protein language models at Alquraishi Lab
            </div>
          </div>
          <div className="flex gap-6 pb-4 border-b border-neutral-200 dark:border-gray-700 last:border-0">
            <div className="flex-shrink-0 w-20 text-sm font-medium text-[var(--global-theme-color)]">
              2024
            </div>
            <div className="flex-1 text-black dark:text-neutral-300">
              Joined Columbia University as a Rabi Scholar studying Computer Science and Biochemistry
            </div>
          </div>
          <div className="flex gap-6 pb-4 border-b border-neutral-200 dark:border-gray-700 last:border-0">
            <div className="flex-shrink-0 w-20 text-sm font-medium text-[var(--global-theme-color)]">
              2023
            </div>
            <div className="flex-1 text-black dark:text-neutral-300">
              Presented research on LCMS quantification of neurotransmitters at WCBSURC
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
