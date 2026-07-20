import { Portfolio } from "@/data/portfolio";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  return (
    <li className="mb-4 leading-[1.45]">
      <span className="font-semibold">
        {portfolio.projectUrl ? (
          <a
            href={portfolio.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-300 hover:decoration-zinc-900"
          >
            {portfolio.title}
          </a>
        ) : (
          portfolio.title
        )}
      </span>
      <br />
      <span className="text-zinc-500">{portfolio.description}</span>
      {portfolio.technologies && portfolio.technologies.length > 0 && (
        <span className="text-zinc-500 italic">
          {" "}
          ({portfolio.technologies.join(", ")})
        </span>
      )}
    </li>
  );
}
