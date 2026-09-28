import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.name,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="section-space pb-12">
        <Container>
          <PageIntro
            eyebrow="Service"
            title={service.name}
            description={service.description}
          />
        </Container>
      </section>

      <PlaceholderSection
        eyebrow="Overview"
        title="What this service includes."
        description="Detailed service content, deliverables, process, technologies, FAQs, and conversion content will be added in the component phase."
      />

      <PlaceholderSection
        eyebrow="Process"
        title="A clear process from discovery to delivery."
        description="Service-specific process placeholder."
      />

      <PlaceholderSection
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="A structured FAQ component will be added here."
      />

      <PlaceholderSection
        eyebrow="CTA"
        title="Ready to discuss this service?"
        description="Conversion CTA placeholder."
      />
    </>
  );
}
