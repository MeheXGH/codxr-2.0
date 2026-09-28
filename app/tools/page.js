import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Tools",
  description:
    "Explore useful tools, applications, and digital experiments built or launched by CODXR.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <>
      <section className="section-space pb-12">
        <Container>
          <PageIntro
            eyebrow="CODXR Tools"
            title="Useful tools, applications, and experiments."
            description="A dedicated section for future CODXR tools and products."
          />
        </Container>
      </section>

      <PlaceholderSection
        eyebrow="Tools library"
        title="Future tools will be launched here."
        description="Each tool can later have its own dedicated landing page and application route."
      />
    </>
  );
}
