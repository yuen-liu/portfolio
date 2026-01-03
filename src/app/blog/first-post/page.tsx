import Image from 'next/image';
import fig1 from './fig1.png';
import fig2 from './fig2.png';
import fig3 from './fig3.png';
import fig4 from './fig4.png';
import fig5 from './fig5.png';
import fig6 from './fig6.png';
import fig7 from './fig7.png';
import fig8 from './fig8.png';

export default function FirstPost() {
  return (
    <article className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">How AlphaFold2 Thinks About Proteins</h1>
        <div className="text-black dark:text-neutral-400 text-sm">Jan. 2026</div>
      </div>
      
      <div className="prose max-w-none text-black dark:text-neutral-300 leading-relaxed space-y-6">
        <p>
          Since the 1960s, biologists have been haunted by an infuriating question: how do you predict what a protein looks like just from its amino acid sequences? In December 2020, AlphaFold2 (mostly) solved this problem and, in doing so, rewrote the computational rulebook of drug discovery.
        </p>
        
        <p>
          ChatGPT revolutionized language and search by turning words into vectors that machines understand. AF2 is its biological equivalent. With AF2 and AF3, you can design a new protein, predict how drugs work, spot dangerous side effects, and engineer sustainable biomaterials—all from your laptop.
        </p>
        
        <p>
          But there's a catch. Letters are easy; they're one-dimensional and lie flat on a page. Amino acids, on the other hand, are three-dimensional troublemakers. They twist, rotate, crash into each other, and form bonds like kids in a chaotic soccer match. So, how do we tackle this 3D chaos?
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">How do we turn a protein into something a computer understands?</h2>
        
        <p>
          This is the question that I've been looking into for the past month or so. One of my (amazing) lab mentors initially explained it, then an (also amazing) professor in class, and then another (extremely amazing) lab mentor. Anyways, all this to say I find the question quite beautiful, so I did some online sleuthing. There are a lot of great articles, videos, and papers that answer this question, but I find that many of them are full of technical jargon, so let me take a stab at making this problem more accessible.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">The Big Picture</h2>
        
        <p>
          There are two main stages in AF2: Evoformer and a structure module. Shown below is a summary of the entire process (Jumper et. al, 2020). Both use multiple sequence alignment (MSA) and pairwise representations as input. Think of MSA as a way to retrieve genetic and evolutionary info, while pairwise representations capture structural relationships.
        </p>
        
        <Image
         src={fig1}
         alt="AlphaFold2 architecture diagram"
        />
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">Part 1: EvoFormer</h2>
        
        <p>
          The Evoformer is the brain of AF2: it processes evolutionary and structural info with attention (equivalent to ChatGPT's Transformer).
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3 text-black dark:text-white">How it thinks in two directions at once:</h3>
        
        <h4 className="text-lg font-semibold mt-4 mb-2 text-black dark:text-white">Dual Attention Mechanism:</h4>
        
        <p>
          Imagine a spreadsheet where rows are different protein sequences from various species, and columns are positions along the protein chain. The Evoformer reads this spreadsheet by alternating between:
        </p>
        
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Horizontal reading (row attention):</strong> captures relationships across different sequences, aka the evolutionary patterns</li>
          <li><strong>Vertical reading (column attention):</strong> captures relationships across positions in the protein chain, aka the structural patterns</li>
        </ul>
        
        <p>
          This dual approach is quite clever: the model integrates both genomic searches (finding similar proteins in nature) and structural template searches (finding known structures) into a unified representation, shown below (ML4FG slides).
        </p>
        
        <Image
         src={fig2}
         alt="MSA + template search"
        />
        
        <p>
          You might notice the additional bias term in the attention equation. This carries prior structural knowledge—geometric constraints from physics, a cheat sheet on physically possible distances and angles between residues.
        </p>
        
        <h4 className="text-lg font-semibold mt-4 mb-2 text-black dark:text-white">Pairwise Feature Updates:</h4>
        
        <p>
          While the MSA representation tracks evolutionary patterns, the pairwise representation tracks geometric relationships between every pair of amino acids. The Evoformer constantly updates both representations, checking for consistency. If the evolutionary clues suggest two amino acids should be close together, but the geometric features disagree, the model applies additional refinement steps.
        </p>
        
        <p>
          In other words, AF2 is a professional overthinker—the model is always double-checking itself, ensuring that evolutionary and structural signals match up.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">Part 2: The Structure Module</h2>
        
        <p>
          After 48 EvoFormer blocks, the Structure Module takes over. This is where abstract understanding becomes concrete 3D atomic coordinates (actual X, Y, and Z positions).
        </p>
        
        <p>
          Now here's where things get interesting: it uses geometry you learned in elementary-school.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3 text-black dark:text-white">Bag of Triangles</h3>
        
        <p>
          Remember the triangular inequality from math class? The one that says the longest side of a triangle can't be longer than the other two sides combined? (ML4FG slides)
        </p>
        
        <Image
         src={fig3}
         alt="triangular inequality"
        />
        
        <p>
          AF2 uses this simple (soft-coded) rule to build entire proteins.
        </p>
        
        <p>
          Pick any three amino acids in your protein. Let's call them i, j, and k. The distances between them must satisfy the triangle inequality. Now do this for thousands upon thousands of overlapping triangles throughout the entire protein. Every triplet of amino acids forms a triangle, and every triangle must be geometrically valid. (ML4FG slides)
        </p>
        
        <Image
         src={fig4}
         alt="triangles"
        />
        
        <p>
          This prevents nonsense predictions. Without this constraint, the model could predict that amino acids A and B are both right next to amino acid C, but somehow A and B are miles apart from each other. That's physically impossible—and the triangle inequality catches it.
        </p>
        
        <p>
          Think of it as a "bag of triangles"—thousands of small geometric constraints that, when satisfied simultaneously, create a realistic protein structure. It's like a complex 3D jigsaw puzzle where every piece has to fit with every other piece perfectly.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3 text-black dark:text-white">Invariant Point Attention</h3>
        
        <p>
          Now the Structure Module still needs to think in 3D space. It does this by using a specialized attention mechanism called invariant point attention (IPA). IPA lets us represent how 3D objects behave. Crucially, no matter how you rotate or move a protein or amino acid, the internal relationships stay the same, similar to how a cup in your hand is still the same cup when you flip it over. IPA does this by being "SE(3)-equivariant" (which is math-speak for rotation and translation don't matter)—when the model is trained, we incorporate many different alignments to get the same weights.
        </p>
        
        <p>
          The attention formula has three parts (ML4FG slides):
        </p>
        
        <Image
          src={fig5}
          alt="ipa"
        />

        <div className="my-8 p-4 border border-neutral-300 dark:border-gray-600 rounded-lg bg-neutral-50 dark:bg-gray-900">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
            The green term is our standard sequence attention, the blue term is our learned biases from training, and the last pink term accounts for rotational (R) and translation (t) changes (it's SE(3)-equivariant!)
          </p>
        </div>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-black dark:text-white">Building the Protein: Backbone and Sidechain Prediction</h3>
        
        <p>
          The Structure Module is like a sculptor: rough shape first, and then finer details.
        </p>
        
        <h4 className="text-lg font-semibold mt-4 mb-2 text-black dark:text-white">Step 1: The Backbone</h4>
        
        <p>
          Every protein has a backbone: a repeating chain of amino acids where atoms follow a N–Cα–C′ pattern. The model predicts this first, using those triangle constraints we talked about. Just like in NLP where we have a "bag of words," we now have a "bag of triangles." Each triangle (or group of amino acids) is like a token that gets processed through attention mechanisms, always checking: "Does this violate physics? Does this match what the EvoFormer learned?"
        </p>
        
        <p>
          After establishing the backbone, the model refines sidechains (the R groups that make each amino acid unique) using rotamer libraries (pre-computed favorable configurations) and learned torsional angles (how much things can twist). (ML4FG slides)
        </p>
        
        <Image
         src={fig6}
         alt="side chains"
        />
        
        <p>
          Side chains are important because they determine what the protein does: ex. binding to a drug molecule or interacting with other proteins.
        </p>
        
        <h4 className="text-lg font-semibold mt-4 mb-2 text-black dark:text-white">Starting from a "Black Hole"</h4>
        
        <p>
          Here's a thought: how do we even get to this triangular rulebook in the first place? Conceptually, the Structure Module starts with all residues collapsed at the exact same point in space. Effectively, it's a "black hole" state.
        </p>
        
        <p>
          Then, via 8 iterative refinement blocks, it gradually expands this collapsed structure into realistic 3D coordinates. Each iteration takes as input its EvoFormer outputs, checks triangular constraints, applies IPA attention, and asks: "Am I getting closer to physical reality?"
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">Part 3: FAPE Loss</h2>
        
        <p>
          Every machine learning model needs a way to know if it's doing well. AlphaFold2 uses Frame Aligned Point Error (FAPE) as its main grading system.
        </p>
        
        <p>
          Contrary to its very long name, it's pretty intuitive. Compare where predicted atoms are versus where they should be. By doing this comparison after aligning local reference frames, FAPE loss is robust to global rotations and translations. Mathematically, you're looking at the mean distance between predicted and true atom positions in these aligned frames, rather than a raw Cartesian MSE (ML4FG slides).
        </p>
        
        <Image
         src={fig7}
         alt="fape"
        />
        
        <p>
          However, we've still got to consider our previous losses, so here's our full training objective (note: for training, not fine-tuning) (Jumper et. al, 2020):
        </p>
        
        <Image
         src={fig8}
         alt="full loss term"
        />

        <p>
          FAPE loss is still the dominant term, but L<sub>aux</sub> is the auxiliary loss from the Structure Module (averaged FAPE and torsion losses on the intermediate structures), L<sub>dist</sub> is the averaged cross-entropy loss for pairwise, L<sub>MSA</sub> is an averaged cross-entropy loss for MSA, and L<sub>conf</sub> is the model confidence loss.
        </p>
        
        <p>
          Together, these ensure the model gets both the big picture right (global structure) and the small details right (local geometry).
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">Part 4: Recycling</h2>
        
        <p>
          As one might expect, running AF2 once isn't enough. So we recycle: we run this entire pipeline thrice, each time feeding previous predictions back as input. This iterative refinement loop allows the model to catch and fix inconsistencies, improving structure quality.
        </p>
        
        <p>
          To put things simply, the first pass gives us a rough sketch, the second pass inks the drawing, and the third pass polishes final details.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">Why This Matters Beyond Proteins</h2>
        
        <p>
          Understanding AF2's architecture unlocks a box that biologists have been trying to crack open for years. Instead of just using a hammer or a pick to pry it open, AF2 uses a variety of tools: a sledge, hammer, and a pick—we combine evolutionary context from MSAs (millions of years of natural selection), structural info from template searches (known protein structures), geometric constraints from bags of triangles (physics), and spatial attention from IPA (3D reasoning).
        </p>
        
        <p>
          The Evoformer and Structure Module together form a pipeline that predicts protein structures with (at the time) unseen accuracy.
        </p>
        
        <p>
          Since its release, AF2 has been used not only by biologists, but also biochemists, chemists, and physicists to predict structures of hundreds of millions of proteins. As of Dec. 2025, ~3 mil researchers have used it in drug discovery, understanding disease mechanisms, protein design, and creating novel biomaterials. AF3 extends these capabilities further, predicting protein-ligand interactions and multi-component complexes.
        </p>
        
        <p>
          Of course, limitations exist. AF2 and AF3 are by no means perfect. They're still computationally expensive to run. There isn't an extremely easy way to use it (you can't just type a sequence in like you can with ChatGPT). Proteins are dynamic and shape-shifting, with multiple conformations (otherwise your cells would not interact); AF2 doesn't address this. Protein design remains challenging without additional tools.
        </p>
        
        <p>
          Even so, breaking down biology into smaller mathematical units (triangles, attention mechanisms, and geometric constraints) is powerful. AF2 represents a fundamental advance in how we teach computers to understand our cellular machinery. It's attention 2.0 for structural biology, and that's all you need.
        </p>
        
        <p className="italic text-neutral-600 dark:text-neutral-400">
          Coming next: ESM, RoseTTAFold maybe? Mech interp for PLMs/bio models
        </p>
        
        <p>
          Please let me know if you catch any typos/technical errors/want to chat more! My email: <a href="mailto:bridget.g.liu@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">bridget.g.liu@gmail.com</a>.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">References</h2>
        
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Most of my figures were taken from my ML4FG class (thank you Professor Knowles and AlQuraishi)</li>
          <li><a href="https://fabianfuchsml.github.io/alphafold2/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://fabianfuchsml.github.io/alphafold2/</a></li>
          <li><a href="https://www.nature.com/articles/d41586-021-02265-4" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/d41586-021-02265-4</a></li>
          <li>AlphaFold2: <a href="https://www.nature.com/articles/s41586-021-03819-2" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/s41586-021-03819-2</a></li>
          <li>AlphaFold3: <a href="https://www.nature.com/articles/s41586-024-07487-w" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/s41586-024-07487-w</a></li>
          <li><a href="https://towardsdatascience.com/how-to-solve-the-protein-folding-problem-alphafold2-6c81faba670d/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://towardsdatascience.com/how-to-solve-the-protein-folding-problem-alphafold2-6c81faba670d/</a></li>
          <li><a href="https://www.warpnews.org/artificial-intelligence/alphafolds-protein-database-has-been-used-by-three-million-researchers-in-five-years/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://www.warpnews.org/artificial-intelligence/alphafolds-protein-database-has-been-used-by-three-million-researchers-in-five-years/</a></li>
        </ul>
      </div>
    </article>
  );
} 