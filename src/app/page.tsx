import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[1.05rem] font-bold mt-14 mb-6 pb-[0.4rem] border-b border-zinc-200">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative max-w-[860px] mx-auto px-6 pt-16 pb-20">
        <ProfileSection aboutMe={aboutMe} />

        {sectionOrder.map((sectionName) => {
          switch (sectionName) {
            case Section.Publication:
              return (
                publicationData.length > 0 && (
                  <section key={sectionName} className="mt-[4.5rem]">
                    <ul className="list-none m-0 pt-7 border-t border-zinc-200">
                      {publicationData.map((publication, index) => (
                        <PublicationEntry
                          key={index}
                          publication={publication}
                        />
                      ))}
                    </ul>
                  </section>
                )
              );
            case Section.Education:
              return (
                educationData.length > 0 && (
                  <section key={sectionName}>
                    <SectionHeading>Education</SectionHeading>
                    <ul className="list-none m-0 p-0">
                      {educationData.map((education, index) => (
                        <EducationEntry key={index} education={education} />
                      ))}
                    </ul>
                  </section>
                )
              );
            case Section.Experience:
              return (
                experienceData.length > 0 && (
                  <section key={sectionName}>
                    <SectionHeading>Experience</SectionHeading>
                    <ul className="list-none m-0 p-0">
                      {experienceData.map((experience, index) => (
                        <ExperienceEntry key={index} experience={experience} />
                      ))}
                    </ul>
                  </section>
                )
              );
            case Section.Portfolio:
              return (
                portfolioData.length > 0 && (
                  <section key={sectionName}>
                    <SectionHeading>Portfolio</SectionHeading>
                    <ul className="list-none m-0 p-0">
                      {portfolioData.map((portfolio, index) => (
                        <PortfolioEntry key={index} portfolio={portfolio} />
                      ))}
                    </ul>
                  </section>
                )
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
