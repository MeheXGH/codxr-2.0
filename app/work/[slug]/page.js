import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: project.name,
    description: project.description,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="section-space pb-12">
        <Container>
          <PageIntro
            eyebrow={project.category}
            title={project.name}
            description={project.description}
          />
        </Container>
      </section>

      <PlaceholderSection
        eyebrow="Overview"
        title="Project overview."
        description="Client, goals, scope, and project context placeholder."
      />

      <PlaceholderSection
        eyebrow="Strategy"
        title="Challenge, strategy, and solution."
        description="Case-study content placeholder."
      />

      <PlaceholderSection
        eyebrow="Build"
        title="Design and development."
        description="Screenshots, technology, and implementation placeholder."
      />

      <PlaceholderSection
        eyebrow="Results"
        title="Outcomes and measurable results."
        description="Approved project results will be added here."
      />
    </>
  );
}
