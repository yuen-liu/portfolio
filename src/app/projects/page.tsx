export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Dry Lab</h2>
      <div className="space-y-4">
        <div>
          <strong>PBD Mechanistic Interpretability @ Alquraishi Lab</strong> – Explored mechanistic interpretability in protein language models using sparse autoencoders trained on 4,000+ Pfam domains.
        </div>
        <div>
          <strong>PBD-SLiM Dataset Curation @ Alquraishi Lab</strong> – Curated a high-quality dataset of &gt;1.2 million interactions, applying FAIR principles to train statistical-mechanics based machine learning models. Used Gaussian mixture models for data analysis.
        </div>
        <div>
          <strong>PBD Explorer</strong> - Built a full-stack web app with fuzzy search to visualize protein structures and interactions.
          <a href="https://pbd-viewer.vercel.app/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">[link]</a>
        </div>
        <div>
          <strong>PaperMine</strong> – Developed a tool to extract and normalize chemical and biological relationships from scientific literature using named entity recognition and context-aware search.{' '}
          <a href="https://pdf-converter-nu.vercel.app/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">[link]</a>
        </div>
        <div>
          <strong>DeepChem Design</strong> – Built and trained a transformer model for de novo small molecule generation with desirable drug-like properties.
        </div>
        <div>
          <strong>MarkovScribe</strong> – Designed a Markov chain–based text generator to emulate the writing styles of various scientific authors and papers.{' '}
          <a href="https://github.com/yuen-liu/markovscribe" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">[link]</a>
        </div>
        <div>
          <strong>Appli</strong> – Created a web platform to simplify cold outreach and coffee chats for college students, featuring resume parsing and email automation.{' '}
          <a href="https://devpost.com/software/appli" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">[link]</a>
        </div>
        <div>
          <strong>DivHacktivism</strong> – Co-led a hackathon project to build a social good platform matching activists with local tech initiatives and non-profits.{' '}
          <a href="https://tinyurl.com/divhacksproject" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">[link]</a>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Wet Lab / Synthesis</h2>
      <div className="mb-8 text-sm text-neutral-700 space-y-8">
        {/* Project 1 */}
        <div>
          <h3 className="text-xl font-bold mb-1">Modeling stearoyl-coenzyme A desaturase 1 inhibitors to ameliorate α-Syn cytotoxicity in Parkinson&apos;s disease</h3>
          <span className="mb-1">Bridget Liu, Audrey Tsai, Darren Dressen</span><br />
          <span className="font-semibold">DOI:</span> <a href="https://doi.org/10.59720/23-151" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.59720/23-151</a><br />
          <span className="font-semibold">Keywords:</span> SCD1, α-Synuclein, Parkinson&apos;s disease, molecular docking, small molecule inhibitors.<br />
          <span className="font-semibold">Abstract:</span>
          <p className="mt-2">
            Parkinson&apos;s disease is a form of progressive neurodegeneration that primarily affects dopaminergic neurons. It is characterized by misfolded α-Synuclein (α-Syn) proteins clumped together in Lewy bodies. More recently, it has been proposed that α-Syn toxicity may increase during interactions with fatty acids. There have been several studies linking stearoyl-coenzyme A desaturase 1 (SCD1), the rate-limiting enzyme for the conversion of saturated fatty acids (SFAs) to monounsaturated fatty acids (MUFAs), to the increased toxicity of α-Syn. Consequently, SCD1 inhibition is shown to decrease the toxicity and aggregation of α-Syn. However, the precise interactions of SCD1 inhibitors and SCD1 are unclear. This project compared seven novel analogs of SCD1 inhibitors, which we hypothesized to compete with SCD1&apos;s coenzyme stearoyl coenzyme A, decreasing SFA conversion into their respective MUFAs. The analogs shared the same general pharmacophore with varying R groups (p-toluoyl, 4-fluorobenzoyl, 3-trifluoromethyl benzoyl, o-anisoyl, 3,4-difluorobenzoyl, 2-trifluoromethyl benzoyl, and 2-chlorobenzoyl). We hypothesized that analogs with the least steric hindrance would perform best. We drew a structure-activity relationship from in silico studies, with molecular docking results showing that four analogs were just as or more effective than MF-438, a commercially available SCD1 inhibitor. These results imply that the most effective R group was least sterically hindered, guiding further analog development in the field of small molecule Parkinson&apos;s disease cures.
          </p>
        </div>
        {/* Project 2 */}
        <div>
          <h3 className="text-xl font-bold mb-1">Determining the Efficacy of Polyphenols in Inhibiting the Aggregation of Amyloid Beta Proteins</h3>
          <span className="mb-1">Gayathri Renganathan, Bridget Liu, Bhoomi Jain, Sumayyah Ismail, Kavya Patel, Ayush Patel, Alyssa Halvorsen, Nandini Mannem</span><br />
          <span className="font-semibold">DOI:</span> <a href="https://doi.org/10.47611/jsrhs.v12i3.4848" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.47611/jsrhs.v12i3.4848</a><br />
          <span className="font-semibold">Keywords:</span> Polyphenols, Amyloid Beta proteins, Alzheimer&apos;s disease, Protein aggregation.<br />
          <span className="font-semibold">Abstract:</span>
          <p className="mt-2">
            Alzheimer&apos;s Disease is caused by an aggregation of amyloid beta and tau proteins in the brain. Polyphenols, a broad class of naturally-existing compounds, have been shown to inhibit the aggregation of those proteins. This project aims to focus on expressing different combinations of those proteins, as well as assaying those proteins for aggregation inhibition using polyphenols such as curcumin, caffeic acid, epigallocatechin gallate (EGCG), and more to determine which polyphenol is most effective in doing so. We chose to use these polyphenols because of their past precedence in other work, along with their widespread prevalence. However, this project focused more on the biological and in-vitro aspect of polyphenols inhibiting amyloid beta, such as conducting multiple assays including Congo Red, Avoidance, and Dynamic Light Scattering in order to receive tangible results. Through our studies, we found that polyphenols do produce an inhibitory effect on the aggregation of amyloid-beta.
          </p>
        </div>
        {/* Project 3 */}
        <div>
          <h3 className="text-xl font-bold mb-1">Investigated synthesis of analogs of rivastigmine to treat Alzheimer&apos;s</h3>
          <span className="mb-1">Bridget Liu</span><br />
          <span className="font-semibold">Keywords:</span> Rivastigmine, analog synthesis, Alzheimer&apos;s disease, SCCUR.<br />
          <span className="font-semibold">Abstract:</span>
          <p className="mt-2">
            Investigated synthesis of analogs of rivastigmine to treat Alzheimer&apos;s. Presented at 2022 SCCUR.
          </p>
        </div>
        {/* Project 4 */}
        <div>
          <h3 className="text-xl font-bold mb-1">LCMS Quantification of Neurotransmitters in Parkinson&apos;s</h3>
          <span className="mb-1">Bridget Liu</span><br />
          <span className="font-semibold">Keywords:</span> LCMS, neurotransmitters, quantification, Parkinson&apos;s disease, WCBSURC.<br />
          <span className="font-semibold">Abstract:</span>
          <p className="mt-2">
            Led a project using LCMS to quantify neurotransmitters in Parkinson&apos;s. Presented at 2023 WCBSURC.
          </p>
        </div>
        {/* Project 5 */}
        <div>
          <h3 className="text-xl font-bold mb-1">Fluorophore-Labeled Peptides Investigation</h3>
          <span className="mb-1">Bridget Liu</span><br />
          <span className="font-semibold">Keywords:</span> Fluorophore, labeled peptides, investigation, ACS.<br />
          <span className="font-semibold">Abstract:</span>
          <p className="mt-2">
            Spearheaded a project investigating fluorophore-labeled peptides. Presented at 2023 Fall ACS.
          </p>
        </div>
      </div>
    </section>
  );
} 