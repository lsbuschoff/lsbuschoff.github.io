export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "May 2026",
    description: "Our paper 'Can vision language models learn intuitive physics from interaction' was accepted to ICML'26.",
  },
  {
    date: "April 2026",
    description: "I was named one of the top 200 reviewers for ICLR'26 (~1%).",
  },
  {
    date: "April 2026",
    description: "I gave a talk in the CogToolsLab at Stanford.",
  },
  {
    date: "April 2026",
    description: "I gave a talk in the Enigma project at Stanford.",
  },
  {
    date: "March 2026",
    description: "I gave a talk in the Causality in Cognition lab at Stanford.",
  },
  {
    date: "February 2026",
    description: "I'm visiting Tobias Gerstenberg's lab in Stanford until May.",
  }
];
