export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "February 2026",
    title: "Research visit at Stanford",
    description: "I'm visiting Tobias Gerstenberg's lab in Stanford until May. Let me know if you are in the Bay and want to meet!",
  }
];
