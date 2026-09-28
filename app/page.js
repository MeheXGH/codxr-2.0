import Hero from "@/components/home/Hero";
import HomePlaceholderSections from "@/components/home/HomePlaceholderSections";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Digital Experiences That Grow",
  description:
    "CODXR builds modern websites, web applications, e-commerce experiences, and digital growth solutions.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomePlaceholderSections />
    </>
  );
}
