import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact CODXR about websites, web applications, e-commerce, SEO, design, and digital growth projects.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="section-space pb-12">
        <Container>
          <PageIntro
            eyebrow="Contact"
            title="Have a project in mind?"
            description="Tell us what you want to build. The final project enquiry form will be added in the component phase."
          />
        </Container>
      </section>

      <PlaceholderSection
        eyebrow="Project enquiry"
        title="Tell us about your project."
        description="Placeholder for name, email, company, service, budget, timeline, and project details."
      />

      <PlaceholderSection
        eyebrow="Contact"
        title="Let's talk about what you're building."
        description="Email, social links, and other official contact information will be added here."
      />
    </>
  );
}
