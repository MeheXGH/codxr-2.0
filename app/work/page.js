import Link from "next/link";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Explore CODXR websites, digital experiences, and future case studies.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <section className="section-space">
      <Container>
        <PageIntro
          eyebrow="Selected Work"
          title="Digital work with a purpose."
          description="A future portfolio of websites, applications, e-commerce projects, and digital experiences."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="placeholder-surface min-h-[360px] rounded-[2rem] p-7"
            >
              <div className="flex h-full flex-col justify-end">
                <p className="text-xs font-semibold uppercase tracking-widest text-codxr-lightMuted dark:text-codxr-darkMuted">
                  {project.category}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {project.name}
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-6 text-codxr-lightMuted dark:text-codxr-darkMuted">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
