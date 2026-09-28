import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { posts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-space">
      <Container className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f9900] dark:text-codxr-green">
          {post.date}
        </p>

        <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-0.04em] md:text-7xl">
          {post.title}
        </h1>

        <p className="mt-6 text-xl leading-8 text-codxr-lightMuted dark:text-codxr-darkMuted">
          {post.excerpt}
        </p>

        <div className="mt-14 space-y-8 text-base leading-8 text-codxr-lightMuted dark:text-codxr-darkMuted">
          <div className="placeholder-surface min-h-72 rounded-3xl" />

          <p>
            Article content placeholder. The final article template will
            include structured headings, internal links, media, author
            information, FAQs where appropriate, and Article structured data.
          </p>

          <h2 className="text-3xl font-bold text-codxr-lightText dark:text-codxr-darkText">
            Key takeaway
          </h2>

          <p>
            This is a placeholder for useful, answer-focused editorial
            content.
          </p>
        </div>
      </Container>
    </article>
  );
}
