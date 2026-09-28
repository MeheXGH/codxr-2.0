import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import { pricing } from "@/data/pricing";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Explore CODXR digital project pricing options for websites, applications, and growth services.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <section className="section-space">
      <Container>
        <PageIntro
          eyebrow="Pricing"
          title="Flexible digital solutions for different stages of growth."
          description="Final packages and exact pricing will be added after the service scope is finalized."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricing.map((plan) => (
            <article
              key={plan.name}
              className="placeholder-surface rounded-3xl p-7"
            >
              <h2 className="text-2xl font-bold">{plan.name}</h2>

              <p className="mt-3 text-sm leading-6 text-codxr-lightMuted dark:text-codxr-darkMuted">
                {plan.description}
              </p>

              <p className="mt-8 text-3xl font-black">{plan.price}</p>

              <ul className="mt-7 space-y-3 text-sm text-codxr-lightMuted dark:text-codxr-darkMuted">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
