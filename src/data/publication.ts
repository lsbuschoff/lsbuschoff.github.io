export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "Accepted at ICML",
    title: "Can vision language models learn intuitive physics from interaction?",
    authors: "L. M. Schulze Buschoff*, K. Voudouris*, C. Demircan, E. Schulz",
    paperUrl: "https://arxiv.org/abs/2602.06033",
  },
  {
    year: "2025",
    conference: "Nature",
    title: "A foundation model to predict and capture human cognition",
    authors: "M. Binz, ..., L. M. Schulze Buschoff, ..., E. Schulz",
    paperUrl: "https://www.nature.com/articles/s41586-025-09215-4",
  },
  {
    year: "2025",
    conference: "ICML",
    title: "Testing the Limits of Fine-Tuning for Improving Visual Cognition in Vision Language Models",
    authors: "L. M. Schulze Buschoff*, K. Voudouris*, E. Akata, M. Bethge, J. B. Tenenbaum, E. Schulz",
    paperUrl: "https://arxiv.org/abs/2502.15678",
  },
  {
    year: "2025",
    conference: "Nature Machine Intelligence",
    title: "Visual cognition in multimodal large language models",
    authors: "L. M. Schulze Buschoff*, E. Akata*, M. Bethge, E. Schulz",
    paperUrl: "https://www.nature.com/articles/s42256-024-00963-y",
  },
  {
    year: "2025",
    conference: "ICLR",
    title: "metabench -- A Sparse Benchmark to Measure General Ability in Large Language Models",
    authors: "A. Kipnis, K. Voudouris, L. M. Schulze Buschoff, E. Schulz",
    paperUrl: "https://openreview.net/pdf?id=4T33izzFpK",
  },
  {
    year: "2024",
    conference: "Under Review",
    title: "Next state prediction gives rise to entangled, yet compositional representations of objects",
    authors: "T. Saanum, L. M. Schulze Buschoff, P. Dayan, E. Schulz",
    paperUrl: "https://arxiv.org/abs/2410.04940",
  },
  {
    year: "2023",
    conference: "ICML",
    title: "The Acquisition of Physical Knowledge in Generative Neural Networks",
    authors: "L. M. Schulze Buschoff, E. Schulz, M. Binz",
    paperUrl: "https://proceedings.mlr.press/v202/schulze-buschoff23a",
  },
  {
    year: "2022",
    conference: "ICLR",
    title: "Trivial or Impossible—dichotomous data difficulty masks model differences (on ImageNet and beyond)",
    authors: "K. Meding*, L. M. Schulze Buschoff*, R. Geirhos, F. A. Wichmann",
    paperUrl: "https://arxiv.org/abs/2110.05922",
  },
  {
    year: "2021",
    conference: "NeurIPS Workshop",
    title: "ImageNet suffers from dichotomous data difficulty",
    authors: "K. Meding*, L. M. Schulze Buschoff*, R. Geirhos, F. A. Wichmann",
    paperUrl: "https://openreview.net/forum?id=-TMrjGZmnUC",
  },
];
