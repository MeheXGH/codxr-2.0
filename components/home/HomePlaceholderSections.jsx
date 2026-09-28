import PlaceholderSection from "@/components/ui/PlaceholderSection";

const sections = [
  {
    eyebrow: "Trusted by",
    title: "Client and partner logos will live here.",
    description: "Replace this area with the approved trust strip and brand logos.",
  },
  {
    eyebrow: "Services",
    title: "Nine focused services for modern businesses.",
    description: "The final service cards will be created next using the approved CODXR service list.",
  },
  {
    eyebrow: "Selected work",
    title: "A strong portfolio section built around real projects.",
    description: "Project imagery, outcomes, categories, and case-study links will replace this placeholder.",
  },
  {
    eyebrow: "Process",
    title: "A clear process from discovery to growth.",
    description: "Discover, Design, Build, Launch, and Grow will become the final process component.",
  },
  {
    eyebrow: "Results",
    title: "Numbers that communicate measurable value.",
    description: "Approved statistics and outcomes will be added here.",
  },
  {
    eyebrow: "Why CODXR",
    title: "What makes the studio different.",
    description: "This section will explain the CODXR approach, quality, speed, and business focus.",
  },
  {
    eyebrow: "Testimonials",
    title: "Real words from real clients.",
    description: "Approved testimonials and client information will replace this placeholder.",
  },
  {
    eyebrow: "Pricing",
    title: "Clear starting points for different project needs.",
    description: "The final pricing cards and inclusions will be added here.",
  },
  {
    eyebrow: "Insights",
    title: "Useful ideas about digital growth.",
    description: "Latest blog posts and search-focused articles will appear here.",
  },
  {
    eyebrow: "Start a project",
    title: "Let's build something useful.",
    description: "The final conversion-focused CTA will be implemented here.",
  },
];

export default function HomePlaceholderSections() {
  return (
    <>
      {sections.map((section) => (
        <PlaceholderSection key={section.eyebrow} {...section} />
      ))}
    </>
  );
}
