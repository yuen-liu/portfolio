import Image from "next/image";

export default function Home() {
  return (
    <div className="panel p-8 md:p-10 max-w-xl">
      <h1 className="font-serif text-3xl md:text-[2.35rem] italic mb-5 text-[var(--global-text-color)]">
        Hi, I&apos;m Bridget.
      </h1>
      <p className="text-[0.95rem] leading-relaxed text-[var(--global-text-color)] mb-4">
        I&apos;m a junior at Columbia University studying CS-Math and Biochemistry as an{" "}
        <a
          href="https://urf.columbia.edu/urf/research/rabi"
          target="_blank"
          rel="noopener noreferrer"
        >
          I.I. Rabi Research Scholar
        </a>
        . Broadly, I&apos;m interested in how we represent the physical world
        computationally — from small molecules and proteins to robot arms —
        and in making those representations physically grounded and
        interpretable. Right now that means interpretability and
        diffusion-model research on protein–ligand binding at the Friesner
        Lab (with Schrödinger), alongside a Student Researcher role on
        Google&apos;s XAI team working on robot navigation. More on this on
        the{" "}
        <a href="/projects">work</a> page.
      </p>
      <p className="text-[0.95rem] leading-relaxed text-[var(--global-muted-color)]">
        Before college, I spent three years at the bench, synthesizing small molecules and
        running assays on neurodegeneration and sleep. I still think like a wet-lab
        scientist about most dry-lab problems. Outside of research, I photograph{" "}
        <a href="https://www.instagram.com/yuenabridged/" target="_blank" rel="noopener noreferrer">
          bits and pieces of life
        </a>
        .
      </p>

      <div className="relative w-full aspect-[1490/1072] rounded-lg overflow-hidden mt-6 ring-1 ring-[var(--global-border-color)]">
        <Image
          src="/cropped_photo.jpg"
          alt="Bridget Liu"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
