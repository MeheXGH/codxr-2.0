import Link from "next/link";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import { posts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog & Insights",
  description:
    "CODXR insights about websites, digital experiences, SEO, AI search, design, and growth.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="section-space">
      <Container>
        <PageIntro
          eyebrow="Insights"
          title="Ideas for building better digital experiences."
          description="Future SEO-focused articles, guides, tutorials, and industry insights."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="placeholder-surface rounded-3xl p-7"
            >
              <p className="text-xs text-codxr-lightMuted dark:text-codxr-darkMuted">
                {post.date}
              </p>

              <h2 className="mt-5 text-2xl font-bold">
                {post.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-codxr-lightMuted dark:text-codxr-darkMuted">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
