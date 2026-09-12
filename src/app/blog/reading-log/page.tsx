type Paper = {
  title: string;
  authors?: string;
  link: string;
  note: string;
};

type Month = {
  label: string;
  papers: Paper[];
};

const months: Month[] = [
  {
    label: "September 2026",
    papers: [
      {
        title: "Diffusion Policy: Visuomotor Policy Learning via Action Diffusion",
        authors: "Chi et al., 2023",
        link: "https://arxiv.org/abs/2303.04137",
        note: "First to use diffusion policies to hit (at the time) SOTA in robot policy learning — very cool, and first author Cheng Chi is a fellow Columbia alum (now founder of Sunday Robotics) :-)",
      },
      {
        title: "3D Diffusion Policy: Generalizable Visuomotor Policy Learning via Simple 3D Representations",
        authors: "Ze et al., 2024",
        link: "https://arxiv.org/abs/2403.03954",
        note: "Expands Diffusion Policy from 2D to 3D via point clouds. Feels like part of a broader trend in robotics — the shift from 2D to 3D data — that shows up well beyond diffusion policy (e.g. Waymo's LiDAR stack).",
      },
      {
        title: "VGGT: Visual Geometry Grounded Transformer",
        authors: "Wang et al., 2025",
        link: "https://arxiv.org/abs/2503.11651",
        note: "Brief skim, need a more in-depth pass. The original feed-forward 3D transformer for point maps — infers camera params, depth, and point clouds directly from images.",
      },
      {
        title: "JanusVLN: Decoupling Semantics and Spatiality with Dual Implicit Memory for Vision-Language Navigation",
        authors: "Zeng, Qi et al., ICLR 2026",
        link: "https://arxiv.org/abs/2509.22548",
        note: "Sort of has memory? SOTA as of ~July 2026 — a lot of follow-up work has already built on this dual implicit memory idea (separate spatial vs. semantic representations).",
      },
      {
        title: "Arc Institute Virtual Cell Challenge 2026",
        link: "https://arcinstitute.org/news/virtual-cell-challenge-2026",
        note: "Brief skim — zero-shot prediction of CRISPRi knockdown responses in unseen cell lines. Planning on submitting to this one.",
      },
      {
        title: "Gemini Robotics: Bringing AI into the Physical World (GROD / Gemini Robotics-ER)",
        authors: "Google DeepMind",
        link: "https://arxiv.org/abs/2503.20020",
        note: "High-level overview of the robotics-ML space — GROD (Gemini Robotics On-Device) and Gemini Robotics-ER (Embodied Reasoning) as two halves of the same family.",
      },
      {
        title: "LingBot-Map: Geometric Context Transformer for Streaming 3D Reconstruction",
        link: "https://arxiv.org/abs/2604.14141",
        note: "Builds on VGGT. A big open problem in these models is no absolute sense of scale — LingBot-Map tackles this with a persistent, linearly-scaling spatial memory instead of reprocessing everything each frame.",
      },
    ],
  },
];

export default function ReadingLogPost() {
  return (
    <article className="panel p-8 md:p-10 space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
          2026 Reading Log
        </h1>
        <div className="text-black dark:text-neutral-400 text-sm">
          Sept. 2026 – ongoing
        </div>
      </div>

      <div className="prose max-w-none text-black dark:text-neutral-300 leading-relaxed space-y-6">
        <p>
          A running log of papers I&apos;m reading, starting September 2026. Mostly
          robotics (diffusion policies, 3D representations) and a bit of everything
          else that catches my eye. Updated as I go.
        </p>

        {months.map((month) => (
          <div key={month.label} className="space-y-6">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">
              {month.label}
            </h2>
            <ul className="space-y-5">
              {month.papers.map((paper) => (
                <li
                  key={paper.link}
                  className="border-b border-neutral-200 dark:border-neutral-800 pb-5 last:border-b-0"
                >
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {paper.title}
                  </a>
                  {paper.authors && (
                    <div className="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">
                      {paper.authors}
                    </div>
                  )}
                  <p className="mt-2">{paper.note}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
