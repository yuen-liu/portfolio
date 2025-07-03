import Image from "next/image";

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-neutral-700">
        Wet lab research on small molecule synthesis + neurodegeneration + sleep in high school at Stanford and co., now building cool stuff for ML in drug discovery.<br/>
        Recording and photographing bits and pieces of daily life + side quests: check out <a href="https://www.instagram.com/yuenabridged/" className="text-blue-500" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <Image src="/headshot.jpg" alt="headshot" width={120} height={120} className="mt-4" />
    </section>
  );
} 