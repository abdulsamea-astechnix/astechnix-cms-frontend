import { Seo } from "@/components/Seo";
import { PageHeader, type Crumb } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { getAllPosts, type BlogPostSummary } from "@/sanity/queries";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

async function fetchPosts(): Promise<BlogPostSummary[]> {
  try {
    return await getAllPosts();
  } catch {
    return [];
  }
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const crumbs: Crumb[] = [{ label: "Home", path: "/" }, { label: "Blog" }];

export default async function BlogPage() {
  const posts = await fetchPosts();
  const featured = posts[0] ?? null;
  const rest = posts.slice(1);

  return (
    <>
      <Seo
        meta={{
          title: "Blog | AStechnix",
          description:
            "Insights and articles on managed IT, endpoint security, cloud infrastructure, and IT support best practices from the AStechnix team.",
        }}
      />
      <PageHeader
        breadcrumbs={crumbs}
        title="AStechnix Blog"
        description="Insights on managed IT, endpoint security, cloud infrastructure, and practical IT support strategies for growing teams."
      />

      {posts.length === 0 ? (
        <section className="section-padding bg-canvas">
          <div className="container-content max-w-2xl">
            <div className="rounded-xl border border-dashed border-ink/15 bg-white/60 p-10 text-center">
              <p className="heading-3 text-ink">Articles coming soon</p>
              <p className="text-body mt-3">
                We're preparing practical content on IT infrastructure,
                endpoint management, and security best practices. Check back
                shortly or subscribe to get notified.
              </p>
              <Button href="/contact" variant="primary" className="mt-6">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <>
          {featured && (
            <section className="section-padding bg-white">
              <div className="container-content">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-accent mb-6">
                  Featured Article
                </p>
                <FeaturedCard post={featured} />
              </div>
            </section>
          )}

          {rest.length > 0 && (
            <section className="section-padding bg-canvas">
              <div className="container-content">
                <h2 className="heading-3 text-ink mb-8">All Articles</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      <CTASection
        title="Have a question about your IT setup?"
        description="Reach out to our team for a practical conversation about your infrastructure, security, or support needs."
      >
        <Button href="/contact" variant="primary" size="lg">
          Get in Touch
        </Button>
      </CTASection>
    </>
  );
}

function FeaturedCard({ post }: { post: BlogPostSummary }) {
  return (
    <article className="overflow-hidden rounded-xl border border-ink/8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {post.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="badge bg-brand-accent/10 text-brand-accent"
              >
                {cat}
              </span>
            ))}
          </div>
          <h2 className="heading-2 text-ink mb-4">
            <Link href={`/blog/${post.slug}`} className="hover:text-brand-accent transition-colors">
              {post.title}
            </Link>
          </h2>
          <p className="text-body mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-ink-muted">
            <span className="font-medium text-ink-soft">{post.authorName}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.estimatedReadingTime} min read
            </span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all"
          >
            Read article
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative min-h-[280px] bg-gradient-to-br from-brand-dark to-brand-dark/70 lg:min-h-full">
          <div className="absolute inset-0 grid-pattern-dark opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="text-center">
              <p className="font-heading text-6xl font-extrabold text-white/15">
                {post.title.charAt(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function PostCard({ post }: { post: BlogPostSummary }) {
  return (
    <article className="group flex flex-col rounded-xl border border-ink/8 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-ink/12 hover:-translate-y-1">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {post.categories.slice(0, 1).map((cat) => (
          <span key={cat} className="badge bg-brand-accent/10 text-brand-accent">
            {cat}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-heading font-bold text-ink leading-snug">
        <Link href={`/blog/${post.slug}`} className="hover:text-brand-accent transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm text-ink-soft leading-[1.7] flex-1">
        {post.excerpt}
      </p>
      <div className="mt-5 flex items-center gap-3 text-xs text-ink-muted border-t border-ink/8 pt-4">
        <span className="font-medium text-ink-soft">{post.authorName}</span>
        <span className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {formatDate(post.publishedAt)}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {post.estimatedReadingTime}m
        </span>
      </div>
    </article>
  );
}
