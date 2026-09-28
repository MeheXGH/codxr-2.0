import { siteConfig } from "@/lib/site";

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "",
}) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;

  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
