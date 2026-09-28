import PageIntro from "@/components/ui/PageIntro";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import Container from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about CODXR, our approach, capabilities, and digital development process.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="section-space pb-12">
        <Container>
          <PageIntro
            eyebrow="About CODXR"
            title="We design, build, and grow digital experiences."
            description="The final CODXR story, mission, vision, capabilities, and team content will be placed here."
          />
        </Container>
      </section>

      <PlaceholderSection
        eyebrow="Our approach"
        title="Strategy, design, development, and growth in one connected process."
        description="Placeholder for the approved CODXR approach."
      />

      <PlaceholderSection
        eyebrow="Capabilities"
        title="Technology and digital capabilities."
        description="Placeholder for tools, technologies, and delivery capabilities."
      />

      <PlaceholderSection
        eyebrow="CTA"
        title="Let's build something useful."
        description="Placeholder for the final About-page CTA."
      />
    </>
  );
}
