"use client";

import { useState, useMemo } from "react";

const experience = [
  {
    role: "Student Researcher, XAI Team (Computer Vision & Robotics)",
    org: "Google",
    dates: "Aug 2026 – Present",
    bullets: [],
  },
  {
    role: "R&D Clinical Data Science AI/ML Intern",
    org: "Pfizer",
    dates: "Jun 2026 – Aug 2026",
    bullets: [
      "Built and benchmarked SQL vs. Neo4j graph agents for RAG-LLM retrieval on Pfizer's first AI-ready clinical data initiative, cutting compute cost by 20%.",
      "Automated clinical study analysis via Neo4j and graph algorithms, accelerating signal detection pipelines.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Friesner Lab, with Schrödinger",
    dates: "Sep 2025 – Present",
    bullets: [
      "Developed a PyTorch sparse-autoencoder interpretability pipeline powering Schrödinger's protein-ligand docking suite, improving feature transparency across thousands of compounds; first author of a paper submitted to ICML.",
      "Automated large-scale analysis of 300K+ docking cases via Python/Slurm pipelines on an HPC cluster, cutting data-processing times by over 20%.",
      "Enhanced model reliability by 16%, cutting costs by 25% for production drug-design pipelines.",
    ],
  },
  {
    role: "Research Intern",
    org: "AlQuraishi Lab",
    dates: "Aug 2024 – Aug 2025",
    bullets: [
      "Engineered a PyTorch mechanistic interpretability pipeline to map ESM-2 latent vectors to structural features across 4K+ protein domains.",
      "Accelerated data processing by 40% by implementing a vectorized Pandas pipeline handling 1.2M+ protein–peptide interactions.",
      "Used unsupervised learning (Gaussian Mixture Models) to classify binding, contributing to a manuscript submitted to Bioinformatics.",
    ],
  },
];

const dryLabProjects = [
  {
    title: "Metageniuses",
    description:
      "Trained BatchTopK sparse autoencoders on METAGENE-1, a metagenomic foundation model, to study whether internal features are biologically meaningful. Achieved 94.55% accuracy (AUROC 0.9874) on pathogen vs. non-pathogen classification, with BLAST-validated organism-specific latent detectors for Human astrovirus, Norovirus GI/GII, and Sapovirus GI.",
    award: "Track Spotlight, AI Biosecurity Tools — AIxBio Hackathon 2026",
  },
  {
    title: "Columbia iGEM",
    description:
      "Built an SAE-enhanced diffusion pipeline and benchmarked 5+ diffusion models (Genie3, ESMFold2, BoltzGen, AlphaFold3, ProteinMPNN), generating 5K+ protein designs targeting stroke biomarkers (GFAP, UCH-L1). First author on our interpretability work from this project, \"Sparse Autoencoders Recover Reproducible Structural Signal in Protein Language Model Latent Space Representations,\" accepted to New England Computational Biology (NECB) 2026.",
  },
  {
    title: "PBD Explorer",
    description: "Full-stack web app with fuzzy search to visualize protein structures and interactions.",
    link: "https://pbd-viewer.vercel.app/",
  },
];

const wetLabProjects = [
  {
    title: "Sparse Autoencoders Recover Reproducible Structural Signal in Protein Language Model Latent Space Representations",
    authors:
      "Bridget Liu*†, Vignesh Karthik†, Andrew Meng†, Yuna Stechert, Davud Skenderi, Lyla Prasad, Osheen Abraham, Leela Iyer, Adit Anand, AJ Sillato (Columbia University; *presenting author, †equal contribution)",
    venue: "Accepted, New England Computational Biology (NECB) 2026",
    keywords: "Sparse autoencoders, mechanistic interpretability, protein language models, ESM-C, binder design",
    abstract: "Generative protein-design models produce candidate binders without revealing what internally distinguishes a strong binder from a weak one, limiting rational improvement and failure diagnosis. We apply sparse autoencoders (SAEs), a mechanistic-interpretability technique, to residue-level ESM-C activations of Boltz-designed binder candidates against Vilip-1, a blood biomarker of acute neurological injury, to identify human-interpretable features in these latent representations without modifying any binder sequences. Mixing real, evolutionarily distinct natural-protein sequences into SAE training was the largest lever for generalization beyond synthetic designs alone, raising held-out natural-protein reconstruction fidelity from 0.39 to 0.60 fraction of variance explained. To test whether learned features reflect genuine protein structure rather than training artifacts, we compared two independently trained SAE dictionaries: binder-alone encoding versus encoding with full binder-target cross-attention before target positions were discarded. Despite different encodings, each dictionary's most generic features converge on the same real-protein residues at a rate chance cannot explain (hypergeometric test against the ~7M-residue candidate space, p ≈ 7 × 10⁻²⁸), confirming that cross-attention preserves the learned signal. This convergence survives a shared-seed confound check (5 of 6 agreeing cases use different learned feature indices per dictionary) and is corroborated by InterPro domain annotations and calibrated LLM-assisted labeling that withholds a description when evidence is scattered. Together, these results show that SAE features recovered from protein language model activations carry real, reproducible structural signal, a necessary validation step before using such features to inform or steer binder design."
  },
  {
    title: "Modeling stearoyl-coenzyme A desaturase 1 inhibitors to ameliorate α-Syn cytotoxicity in Parkinson's disease",
    authors: "Bridget Liu, Audrey Tsai, Darren Dressen",
    doi: "https://doi.org/10.59720/23-151",
    keywords: "SCD1, α-Synuclein, Parkinson's disease, molecular docking, small molecule inhibitors",
    abstract: "Parkinson's disease is a form of progressive neurodegeneration that primarily affects dopaminergic neurons. It is characterized by misfolded α-Synuclein (α-Syn) proteins clumped together in Lewy bodies. More recently, it has been proposed that α-Syn toxicity may increase during interactions with fatty acids. There have been several studies linking stearoyl-coenzyme A desaturase 1 (SCD1), the rate-limiting enzyme for the conversion of saturated fatty acids (SFAs) to monounsaturated fatty acids (MUFAs), to the increased toxicity of α-Syn. Consequently, SCD1 inhibition is shown to decrease the toxicity and aggregation of α-Syn. However, the precise interactions of SCD1 inhibitors and SCD1 are unclear. This project compared seven novel analogs of SCD1 inhibitors, which we hypothesized to compete with SCD1's coenzyme stearoyl coenzyme A, decreasing SFA conversion into their respective MUFAs. The analogs shared the same general pharmacophore with varying R groups (p-toluoyl, 4-fluorobenzoyl, 3-trifluoromethyl benzoyl, o-anisoyl, 3,4-difluorobenzoyl, 2-trifluoromethyl benzoyl, and 2-chlorobenzoyl). We hypothesized that analogs with the least steric hindrance would perform best. We drew a structure-activity relationship from in silico studies, with molecular docking results showing that four analogs were just as or more effective than MF-438, a commercially available SCD1 inhibitor. These results imply that the most effective R group was least sterically hindered, guiding further analog development in the field of small molecule Parkinson's disease cures."
  },
  {
    title: "Determining the Efficacy of Polyphenols in Inhibiting the Aggregation of Amyloid Beta Proteins",
    authors: "Gayathri Renganathan, Bridget Liu, Bhoomi Jain, Sumayyah Ismail, Kavya Patel, Ayush Patel, Alyssa Halvorsen, Nandini Mannem",
    doi: "https://doi.org/10.47611/jsrhs.v12i3.4848",
    keywords: "Polyphenols, Amyloid Beta proteins, Alzheimer's disease, Protein aggregation",
    abstract: "Alzheimer's Disease is caused by an aggregation of amyloid beta and tau proteins in the brain. Polyphenols, a broad class of naturally-existing compounds, have been shown to inhibit the aggregation of those proteins. This project aims to focus on expressing different combinations of those proteins, as well as assaying those proteins for aggregation inhibition using polyphenols such as curcumin, caffeic acid, epigallocatechin gallate (EGCG), and more to determine which polyphenol is most effective in doing so. We chose to use these polyphenols because of their past precedence in other work, along with their widespread prevalence. However, this project focused more on the biological and in-vitro aspect of polyphenols inhibiting amyloid beta, such as conducting multiple assays including Congo Red, Avoidance, and Dynamic Light Scattering in order to receive tangible results. Through our studies, we found that polyphenols do produce an inhibitory effect on the aggregation of amyloid-beta."
  },
  {
    title: "Investigated synthesis of analogs of rivastigmine to treat Alzheimer's",
    authors: "Bridget Liu",
    keywords: "Rivastigmine, analog synthesis, Alzheimer's disease, SCCUR",
    abstract: "Investigated synthesis of analogs of rivastigmine to treat Alzheimer's. Presented at 2022 SCCUR."
  },
  {
    title: "LCMS Quantification of Neurotransmitters in Parkinson's",
    authors: "Bridget Liu",
    keywords: "LCMS, neurotransmitters, quantification, Parkinson's disease, WCBSURC",
    abstract: "Led a project using LCMS to quantify neurotransmitters in Parkinson's. Presented at 2023 WCBSURC."
  },
  {
    title: "Fluorophore-Labeled Peptides Investigation",
    authors: "Bridget Liu",
    keywords: "Fluorophore, labeled peptides, investigation, ACS",
    abstract: "Spearheaded a project investigating fluorophore-labeled peptides. Presented at 2023 Fall ACS."
  }
];
export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDryLabProjects = useMemo(() => {
    if (!searchQuery.trim()) return dryLabProjects;
    const query = searchQuery.toLowerCase();
    return dryLabProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        (project.award && project.award.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const filteredWetLabProjects = useMemo(() => {
    if (!searchQuery.trim()) return wetLabProjects;
    const query = searchQuery.toLowerCase();
    return wetLabProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.authors.toLowerCase().includes(query) ||
        project.keywords.toLowerCase().includes(query) ||
        project.abstract.toLowerCase().includes(query) ||
        (project.doi && project.doi.toLowerCase().includes(query)) ||
        ("venue" in project && project.venue && project.venue.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const filteredExperience = useMemo(() => {
    if (!searchQuery.trim()) return experience;
    const query = searchQuery.toLowerCase();
    return experience.filter(
      (job) =>
        job.role.toLowerCase().includes(query) ||
        job.org.toLowerCase().includes(query) ||
        job.bullets.some((b) => b.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="panel p-8 md:p-10">
      <h1 className="font-serif text-3xl italic mb-5 text-[var(--global-text-color)]">Work</h1>
      <div className="relative w-full mb-10">
        <input
          type="text"
          placeholder="Search experience, projects, publications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 rounded-lg bg-transparent border border-[var(--global-border-color)] text-[var(--global-text-color)] placeholder-[var(--global-muted-color)] focus:outline-none focus:border-[var(--global-theme-color)] transition-colors"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--global-muted-color)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <section className="mb-10">
        <h2 className="font-serif text-xl italic mb-6 text-[var(--global-text-color)]">Experience</h2>
        {filteredExperience.length === 0 ? (
          <p className="text-[var(--global-muted-color)]">No experience found matching your search.</p>
        ) : (
          <div className="space-y-6">
            {filteredExperience.map((job, index) => (
              <div key={index} className="pb-6 border-b border-[var(--global-border-color)] last:border-0 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-base font-medium text-[var(--global-text-color)]">{job.role}</h3>
                  <span className="text-xs text-[var(--global-muted-color)]">{job.dates}</span>
                </div>
                <p className="text-sm text-[var(--global-theme-color)] mb-2">{job.org}</p>
                {job.bullets.length > 0 && (
                  <ul className="list-disc list-outside pl-4 space-y-1">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-[var(--global-muted-color)] leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-xl italic mb-3 text-[var(--global-text-color)]">Education</h2>
        <p className="text-[var(--global-text-color)] font-medium">Columbia University</p>
        <p className="text-[var(--global-muted-color)] text-sm mb-2">
          B.S. Computer Science–Math, B.S. Biochemistry · GPA 3.8/4.0 · Expected May 2028
        </p>
        <p className="text-[var(--global-muted-color)] text-sm leading-relaxed">
          Honors: I.I. Rabi Research Scholar (1 of 9) · Columbia Research Fair 2026, Best in
          Innovative AI · Track Spotlight, AIxBio Hackathon 2026 (Apart Research) · Genes in
          Space Semifinalist (top 2%)
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-xl italic mb-6 text-[var(--global-text-color)]">Projects</h2>
        {filteredDryLabProjects.length === 0 ? (
          <p className="text-[var(--global-muted-color)]">No projects found matching your search.</p>
        ) : (
          <div className="space-y-6">
            {filteredDryLabProjects.map((project, index) => (
              <div key={index} className="pb-6 border-b border-[var(--global-border-color)] last:border-0 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-base font-medium text-[var(--global-text-color)]">{project.title}</h3>
                  {project.award && (
                    <span className="flex-shrink-0 px-2 py-0.5 text-[10px] font-medium bg-[var(--global-theme-color)] text-white rounded">
                      Award
                    </span>
                  )}
                </div>
                <p className="text-[var(--global-muted-color)] mb-2 text-sm leading-relaxed">{project.description}</p>
                {project.award && <p className="text-xs text-[var(--global-theme-color)] mb-2">{project.award}</p>}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center gap-1">
                    View project →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-xl italic mb-6 text-[var(--global-text-color)]">Publications &amp; Wet Lab Research</h2>
        {filteredWetLabProjects.length === 0 ? (
          <p className="text-[var(--global-muted-color)]">No publications found matching your search.</p>
        ) : (
          <div className="space-y-6">
            {filteredWetLabProjects.map((project, index) => (
              <div key={index} className="pb-6 border-b border-[var(--global-border-color)] last:border-0 last:pb-0">
                <h3 className="text-base font-medium mb-1 text-[var(--global-text-color)]">{project.title}</h3>
                <p className="text-sm text-[var(--global-muted-color)] mb-2">{project.authors}</p>
                {"venue" in project && project.venue && (
                  <p className="text-sm mb-2 text-[var(--global-theme-color)]">{project.venue}</p>
                )}
                {project.doi && (
                  <p className="text-sm mb-2">
                    <span className="text-[var(--global-muted-color)]">DOI: </span>
                    <a href={project.doi} target="_blank" rel="noopener noreferrer">
                      {project.doi}
                    </a>
                  </p>
                )}
                <p className="text-sm mb-3 text-[var(--global-muted-color)]">
                  <span className="text-[var(--global-text-color)]">Keywords: </span>
                  {project.keywords}
                </p>
                <details className="text-sm">
                  <summary className="cursor-pointer text-[var(--global-theme-color)]">Abstract</summary>
                  <p className="mt-2 text-[var(--global-muted-color)] leading-relaxed">{project.abstract}</p>
                </details>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="font-serif text-xl italic mb-4 text-[var(--global-text-color)]">Technical Skills</h2>
        <div className="space-y-3 text-sm">
          <p>
            <span className="text-[var(--global-text-color)] font-medium">Languages: </span>
            <span className="text-[var(--global-muted-color)]">Python, Java, C++, SQL, JavaScript, TypeScript, Bash, HTML/CSS</span>
          </p>
          <p>
            <span className="text-[var(--global-text-color)] font-medium">Libraries/Frameworks: </span>
            <span className="text-[var(--global-muted-color)]">PyTorch, Scikit-learn, Pandas, NumPy, React, Next.js, FastAPI, Tailwind CSS, Supabase</span>
          </p>
          <p>
            <span className="text-[var(--global-text-color)] font-medium">Tools: </span>
            <span className="text-[var(--global-muted-color)]">Git, Docker, Azure, AWS, Slurm (HPC), Linux/Unix, PostgreSQL, Vercel, Figma, Neo4j</span>
          </p>
        </div>
      </section>
    </div>
  );
}
