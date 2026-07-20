export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  researchDescription?: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Luca M. Schulze Buschoff",
  title: "PhD Student",
  institution: "Helmholtz AI, Munich",
  // Note that links work in the description
  description:
    "I am a fourth year PhD student in <b>cognitive science and machine learning</b> under the supervision of Eric Schulz in the Institute for <a href='https://hcai-munich.com/'>Human-Centered AI</a> at Helmholtz AI, Munich Germany.",
  researchDescription:
    "My research asks whether machines perceive and reason about the world the way people do &mdash; and how to close the gap where they do not. I use vision and vision&ndash;language models both as <b>instruments for understanding human visual cognition</b> and as <b>systems to be measured against it</b>, working toward a single model that captures not just human behavior but human perception and cognition across multiple levels.",
  email: "luca.schulze-buschoff@helmholtz-munich.de",
  googleScholarUrl: "https://scholar.google.com/citations?user=K0uLclsAAAAJ&hl=de",
  imageUrl: "/square_512.jpeg",
  cvUrl: "/cv.pdf",
  institutionUrl: "https://hcai-munich.com/",
};
