import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { posts } from "@/data/blog";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/work",
    "/pricing",
    "/blog",
    "/tools",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/work/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
