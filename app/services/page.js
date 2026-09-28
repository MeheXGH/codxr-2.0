import Link from "next/link";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore CODXR services including website development, web applications, e-commerce, SEO, social media, advertising, branding, and UI/UX.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="section-space">
      <Container>
        <PageIntro
          eyebrow="Services"
          title="Digital services built around business goals."
          description="Nine focused services covering digital design, development, search, and growth."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="placeholder-surface group rounded-3xl p-7 transition duration-300 hover:-translate-y-1"
            >
              <span className="text-xs font-semibold text-codxr-lightMuted dark:text-codxr-darkMuted">
                0{index + 1}
              </span>

              <h2 className="mt-10 text-2xl font-bold tracking-tight">
                {service.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-codxr-lightMuted dark:text-codxr-darkMuted">
                {service.description}
              </p>

              <span className="mt-7 inline-block text-sm font-semibold group-hover:text-[#6f9900] dark:group-hover:text-codxr-green">
                Explore service ↗
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
