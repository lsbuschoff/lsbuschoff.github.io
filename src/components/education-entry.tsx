import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <li className="flex items-baseline gap-3.5 mb-[0.55rem]">
      <span className="text-[0.85rem] text-zinc-500 whitespace-nowrap shrink-0 w-24">
        {education.year}
      </span>
      <span className="text-[0.97rem] text-zinc-900">
        <span className="font-semibold">{education.degree}</span>
        {", "}
        {education.institution}
        {education.advisor && (
          <span className="text-zinc-500"> · advisor: {education.advisor}</span>
        )}
        {education.thesis && (
          <span className="block text-zinc-500 italic">
            {education.thesisUrl ? (
              <a
                href={education.thesisUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-300 hover:decoration-zinc-900"
              >
                {education.thesis}
              </a>
            ) : (
              education.thesis
            )}
          </span>
        )}
      </span>
    </li>
  );
}
