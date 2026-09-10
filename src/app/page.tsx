export default function Home() {
  return (
    <div className="panel p-8 md:p-10">
      <h1 className="font-serif text-3xl md:text-[2.35rem] italic mb-5 text-[var(--global-text-color)]">
        Hi, I&apos;m Bridget.
      </h1>
      <p className="text-[1.05rem] leading-relaxed text-[var(--global-text-color)] mb-4">
        I&apos;m a junior at Columbia University studying Computer Science-Math and Biochemistry as an{" "}
        <a
          href="https://urf.columbia.edu/urf/research/rabi"
          target="_blank"
          rel="noopener noreferrer"
        >
          I.I. Rabi Research Scholar
        </a>
        . I care about making machine learning models legible enough to trust in
        drug discovery — right now that means interpretability research on protein
        language models and docking pipelines as a Machine Learning Intern at the
        Friesner Lab (with Schrödinger), alongside a Student Researcher role on
        Google&apos;s XAI team. More on that on the{" "}
        <a href="/projects">work</a> page.
      </p>
      <p className="text-[1.05rem] leading-relaxed text-[var(--global-muted-color)]">
        Before ML, I spent years at the bench — synthesizing small molecules and
        running assays on neurodegeneration and sleep. I still think like a wet-lab
        scientist about most dry-lab problems. Outside of research, I photograph{" "}
        <a href="https://www.instagram.com/yuenabridged/" target="_blank" rel="noopener noreferrer">
          bits and pieces of daily life
        </a>
        .
      </p>
    </div>
  );
}
