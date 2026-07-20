import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <li className="flex items-baseline gap-3.5 mb-[0.55rem]">
      <span className="text-[0.85rem] text-zinc-500 whitespace-nowrap shrink-0 w-24">
        {news.date}
      </span>
      <span className="text-[0.97rem] text-zinc-900">
        {news.title && <span className="font-semibold mr-1">{news.title}</span>}
        {news.link ? (
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-300 hover:decoration-zinc-900"
          >
            {news.description}
            <span className="text-[0.8em] align-[0.1em]">↗</span>
          </a>
        ) : (
          news.description
        )}
      </span>
    </li>
  );
}
