import { Publication } from "@/data/publication";

export function PublicationEntry({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <li className="mb-4 leading-[1.45] text-[14px]">
      <span className="font-semibold">
        {publication.paperUrl ? (
          <a
            href={publication.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-300 hover:decoration-zinc-900"
          >
            {publication.title}
            <span className="text-[0.8em] align-[0.1em]">↗</span>
          </a>
        ) : (
          publication.title
        )}
      </span>
      <br />
      <span className="text-zinc-500">{publication.authors}.</span>{" "}
      <span className="text-zinc-500 italic">
        {publication.conference}, {publication.year}.
      </span>
      {(publication.codeUrl || publication.bibtex) && (
        <span className="ml-1">
          {publication.codeUrl && (
            <>
              {" "}
              <a
                href={publication.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 underline decoration-zinc-300 hover:decoration-zinc-900"
              >
                [code]
              </a>
            </>
          )}
          {publication.bibtex && (
            <>
              {" "}
              <a
                href={publication.bibtex}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 underline decoration-zinc-300 hover:decoration-zinc-900"
              >
                [bibtex]
              </a>
            </>
          )}
        </span>
      )}
      {publication.tldr && (
        <span className="block text-zinc-500 italic mt-1">
          {publication.tldr}
        </span>
      )}
    </li>
  );
}
