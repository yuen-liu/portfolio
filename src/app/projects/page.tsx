export default function ProjectsPage() {
  const dryLabProjects = [
    {
      title: "PBD Mechanistic Interpretability @ Alquraishi Lab",
      description: "Explored mechanistic interpretability in protein language models using sparse autoencoders trained on 4,000+ Pfam domains.",
      link: "https://docs.google.com/document/d/1blxfukPn6KUMSrTnk4tYVckrCWivrrAT-1ZcVPCFVzM/edit?usp=sharing"
    },
    {
      title: "PBD-SLiM Dataset Curation @ Alquraishi Lab",
      description: "Curated a high-quality dataset of >1.2 million interactions, applying FAIR principles to train statistical-mechanics based machine learning models. Used Gaussian mixture models for data analysis."
    },
    {
      title: "PBD Explorer",
      description: "Built a full-stack web app with fuzzy search to visualize protein structures and interactions.",
      link: "https://pbd-viewer.vercel.app/"
    },
    {
      title: "PaperMine",
      description: "Developed a tool to extract and normalize chemical and biological relationships from scientific literature using named entity recognition and context-aware search.",
      link: "https://pdf-converter-nu.vercel.app/"
    },
    {
      title: "DeepChem Design",
      description: "Built and trained a transformer model for de novo small molecule generation with desirable drug-like properties."
    },
    {
      title: "MarkovScribe",
      description: "Designed a Markov chain–based text generator to emulate the writing styles of various scientific authors and papers.",
      link: "https://github.com/yuen-liu/markovscribe"
    },
    {
      title: "Appli",
      description: "Created a web platform to simplify cold outreach and coffee chats for college students, featuring resume parsing and email automation.",
      link: "https://devpost.com/software/appli"
    },
    {
      title: "DivHacktivism",
      description: "Co-led a hackathon project to build a social good platform matching activists with local tech initiatives and non-profits.",
      link: "https://tinyurl.com/divhacksproject"
    }
  ];

  const wetLabProjects = [
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

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">projects</h1>
      
      {/* Dry Lab Projects - Grid Layout */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-neutral-200">Dry Lab</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dryLabProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 border border-neutral-200 dark:border-gray-700 rounded-lg hover:border-[var(--global-theme-color)] hover:shadow-md transition-all duration-200 bg-white dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">
                {project.title}
              </h3>
              <p className="text-black dark:text-neutral-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--global-theme-color)] hover:underline inline-flex items-center gap-1"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Wet Lab Projects - List Layout */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-neutral-200">Wet Lab / Synthesis</h2>
        <div className="space-y-8">
          {wetLabProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 border border-neutral-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
            >
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-black dark:text-neutral-400 mb-3">
                {project.authors}
              </p>
              {project.doi && (
                <p className="text-sm mb-2 text-black dark:text-neutral-300">
                  <span className="font-semibold">DOI:</span>{" "}
                  <a
                    href={project.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--global-theme-color)] hover:underline"
                  >
                    {project.doi}
                  </a>
                </p>
              )}
              <p className="text-sm mb-3 text-black dark:text-neutral-300">
                <span className="font-semibold">Keywords:</span> {project.keywords}
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold mb-2 text-black dark:text-white">Abstract:</p>
                <p className="text-sm text-black dark:text-neutral-300 leading-relaxed">
                  {project.abstract}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}