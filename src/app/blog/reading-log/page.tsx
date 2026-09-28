type Paper = {
  title: string;
  authors?: string;
  link?: string;
  note: string;
};

type Section = {
  label: string;
  papers: Paper[];
};

// Bump this whenever you add or edit entries.
const lastUpdated = "Sept. 28, 2026";

const sections: Section[] = [
  {
    label: "Robotics",
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
  {
    label: "Bio",
    papers: [
      {
        title: "Arc Institute Virtual Cell Challenge 2026",
        link: "https://arcinstitute.org/news/virtual-cell-challenge-2026",
        note: "Brief skim — zero-shot prediction of CRISPRi knockdown responses in unseen cell lines. Planning on submitting to this one.",
      },
      {
        title: "TANGO: Direct Optimization of Constrained Synthesizability for Generative Molecular Design",
        authors: "Guo & Schwaller, Nature Computational Science 2026",
        link: "https://www.nature.com/articles/s43588-026-00959-1",
        note: "The first case I've seen of using RL instead of pre-training to bake in synthesizability constraints. Fits the general pattern: LLM/pre-training → fine-tune with RL.",
      },
      {
        title: "Saturn: Sample-efficient Generative Molecular Design using Memory Manipulation",
        authors: "Guo & Schwaller, 2024",
        link: "https://arxiv.org/abs/2405.17066",
        note: "The field is shifting toward 3D-equivariant/diffusion techniques (i.e. structure-based drug design), but Saturn shows SMILES/language-based models are still great at learning chemical properties. I'd bet on both: a hybrid of language-based/SMILES + diffusion.",
      },
    ],
  },
  {
    label: "Theory",
    papers: [
      {
        title: "Denoising Diffusion Probabilistic Models (DDPM)",
        authors: "Ho, Jain & Abbeel, 2020",
        link: "https://arxiv.org/abs/2006.11239",
        note: "In progress.",
      },
      {
        title: "Denoising Diffusion Implicit Models (DDIM)",
        authors: "Song, Meng & Ermon, 2020",
        link: "https://arxiv.org/abs/2010.02502",
        note: "In progress.",
      },
      {
        title: "Score matching / flow matching",
        note: "In progress.",
      },
      {
        title: "Build, Compute, Critique, Repeat: Data Analysis with Latent Variable Models",
        authors: "Blei, 2014",
        link: "https://www.cs.columbia.edu/~blei/papers/Blei2014b.pdf",
        note: "Written by my Probabilistic Models & ML professor, one of the leading experts in the field. Wrote my reading notes on this one!",
      },
      {
        title: "The Collapsed Gibbs Sampler in Bayesian Computations with Applications to a Gene Regulation Problem",
        authors: "Liu, 1994",
        link: "https://www.cs.columbia.edu/~blei/fogm/readings/Liu1994.pdf",
        note: "Wrote my reading notes on this one too!",
      },
      {
        title: "Muon: An optimizer for hidden layers in neural networks",
        authors: "Keller Jordan, 2024",
        link: "https://kellerjordan.github.io/posts/muon/",
        note: "An alternative to Adam — on my to-read list. From what I gather, it orthogonalizes the update using the full 2D weight matrix, but I need to actually dig in.",
      },
    ],
  },
  {
    label: "Blogs",
    papers: [
      {
        title: "Learning and Control",
        authors: "Sergey Levine",
        link: "https://sergeylevine.substack.com/",
        note: "Robotics!",
      },
      {
        title: "A Workaphile's Apology",
        authors: "Mohammed AlQuraishi, 2026",
        link: "https://moalquraishi.wordpress.com/2026/08/10/a-workaphiles-apology/",
        note: "On what a meaningful human life looks like when thinking is best done by machines.",
      },
    ],
  },
];

export default function ReadingLogPost() {
  return (
    <article className="pointer-events-auto panel p-8 md:p-10 space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
          2026 Reading Log
        </h1>
        <div className="text-black dark:text-neutral-400 text-sm">
          Sept. 2026 – ongoing · Last updated {lastUpdated}
        </div>
      </div>

      <div className="prose max-w-none text-black dark:text-neutral-300 leading-relaxed space-y-6">
        <p>
          A running log of papers I&apos;m reading, starting September 2026. Mostly
          robotics, bio, and ML theory, plus a few blogs I follow.
        </p>

        {sections.map((section) => (
          <div key={section.label} className="space-y-6">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">
              {section.label}
            </h2>
            <ul className="space-y-5">
              {section.papers.map((paper) => (
                <li
                  key={paper.title}
                  className="border-b border-neutral-200 dark:border-neutral-800 pb-5 last:border-b-0"
                >
                  {paper.link ? (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {paper.title}
                    </a>
                  ) : (
                    <span className="text-lg font-medium text-black dark:text-white">
                      {paper.title}
                    </span>
                  )}
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
