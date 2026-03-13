export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
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
    "I am a third year PhD student in cognitive science and machine learning under the supervision of Dr. Eric Schulz in the Institute for <a href='https://hcai-munich.com/'>Human-Centered AI</a> at Helmholtz AI, Munich Germany.",
  email: "luca.schulze-buschoff@helmholtz-munich.de",
  imageUrl: "/square_512.jpeg",
  cvUrl: "/cv_lucamschulzebuschoff.pdf",
  institutionUrl: "https://hcai-munich.com/",
};
