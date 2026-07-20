import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <li className="flex items-baseline gap-3.5 mb-[0.55rem]">
      <span className="text-[0.85rem] text-zinc-500 whitespace-nowrap shrink-0 w-24">
        {experience.date}
      </span>
      <span className="text-[0.97rem] text-zinc-900">
        <span className="font-semibold">{experience.title}</span>
        {", "}
        {experience.companyUrl ? (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-300 hover:decoration-zinc-900"
          >
            {experience.company}
          </a>
        ) : (
          experience.company
        )}
        {experience.description && (
          <span className="block text-zinc-500">{experience.description}</span>
        )}
      </span>
    </li>
  );
}
