import Image from "next/image";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  const links: { label: string; href: string }[] = [
    { label: aboutMe.email, href: `mailto:${aboutMe.email}` },
  ];
  if (aboutMe.googleScholarUrl) {
    links.push({ label: "Google Scholar", href: aboutMe.googleScholarUrl });
  }
  if (aboutMe.cvUrl) {
    links.push({ label: "CV", href: aboutMe.cvUrl });
  }
  if (aboutMe.blogUrl) {
    links.push({ label: "Blog", href: aboutMe.blogUrl });
  }
  if (aboutMe.githubUsername) {
    links.push({
      label: "GitHub",
      href: `https://github.com/${aboutMe.githubUsername}`,
    });
  }
  if (aboutMe.twitterUsername) {
    links.push({
      label: "Twitter",
      href: `https://twitter.com/${aboutMe.twitterUsername}`,
    });
  }
  if (aboutMe.linkedinUsername) {
    links.push({
      label: "LinkedIn",
      href: `https://www.linkedin.com/in/${aboutMe.linkedinUsername}`,
    });
  }

  return (
    <header className="mb-8">
      {aboutMe.imageUrl && (
        <span className="block mb-4 w-28 h-28 relative rounded overflow-hidden min-[1140px]:absolute min-[1140px]:top-16 min-[1140px]:-left-28 min-[1140px]:mb-0">
          <Image
            src={aboutMe.imageUrl}
            alt={aboutMe.name}
            fill
            priority
            className="object-cover"
          />
        </span>
      )}
      <h1 className="text-[14px] font-bold tracking-tight text-zinc-900 mb-6">
        {aboutMe.name}
      </h1>

      {aboutMe.description && (
        <p
          className="mt-5 text-[14px] leading-[1.55] text-zinc-900 [&_a]:underline [&_a]:decoration-zinc-300 [&_a:hover]:decoration-zinc-900 [&_b]:font-bold [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: aboutMe.description }}
        />
      )}

      {aboutMe.researchDescription && (
        <p
          className="mt-[1.15rem] text-[14px] leading-[1.55] text-zinc-900 [&_a]:underline [&_a]:decoration-zinc-300 [&_a:hover]:decoration-zinc-900 [&_b]:font-bold [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: aboutMe.researchDescription }}
        />
      )}

      <p className="mt-6 text-[14px] text-zinc-500">
        {links.map((link, i) => (
          <span key={link.href}>
            {i > 0 && <span className="mx-2 text-zinc-300">/</span>}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 hover:decoration-zinc-900 hover:text-zinc-900 transition-colors"
            >
              {link.label}
            </a>
          </span>
        ))}
      </p>
    </header>
  );
}
