export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">about</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-black dark:text-neutral-300 leading-relaxed mb-6">
          Wet lab research on small molecule synthesis + neurodegeneration + sleep in high school at Stanford and co., now building cool stuff for ML in drug discovery.
        </p>
        <p className="text-lg text-black dark:text-neutral-300 leading-relaxed">
          Recording and photographing bits and pieces of daily life + side quests: check out{" "}
          <a
            href="https://www.instagram.com/yuenabridged/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--global-theme-color)] hover:underline"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
} 