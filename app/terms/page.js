import Container from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: "CODXR terms and conditions.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="section-space">
      <Container className="max-w-4xl">
        <h1 className="text-5xl font-black tracking-tight">
          Terms & Conditions
        </h1>
        <p className="mt-6 text-codxr-lightMuted dark:text-codxr-darkMuted">
          Placeholder legal content. Final legal copy should be reviewed
          before production launch.
        </p>
      </Container>
    </article>
  );
}
