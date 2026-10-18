import { Seo } from "@/components/Seo";
import { PageHeader, type Crumb } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { getAllPosts, type BlogPostSummary } from "@/sanity/queries";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const crumbs: Crumb[] = [{ label: "Home", path: "/" }, { label: "Blog" }];

export default function BlogPage() {
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

      <Suspense fallback={<BlogLoadingState />}>
        <BlogContent />
      </Suspense>

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

async function BlogContent() {
  let posts: BlogPostSummary[] = [];
  try {
    posts = await getAllPosts();
  } catch {
    posts = [];
  }

  const featured = posts[0] ?? null;
  const rest = posts.slice(1);

  if (posts.length === 0) {
    return (
      <section className="section-padding bg-card">
        <div className="container-content max-w-2xl">
          <div className="rounded-xl border border-dashed border-border bg-surface p-10 text-center">
            <p className="heading-3 text-ink">Articles coming soon</p>
            <p className="text-body mt-3">
              We're preparing practical content on IT infrastructure, endpoint
              management, and security best practices. Check back shortly or
              subscribe to get notified.
            </p>
            <Button href="/contact" variant="primary" className="mt-6">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {featured && (
        <section className="section-padding bg-background">
          <div className="container-content">
            <p className="eyebrow mb-6">Featured Article</p>
            <FeaturedCard post={featured} />
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="section-padding bg-card">
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
  );
}

function BlogLoadingState() {
  return (
    <section className="section-padding bg-card text-center py-20">
      <p className="text-ink-muted text-lg">Loading articles...</p>
    </section>
  );
}

function FeaturedCard({ post }: { post: BlogPostSummary }) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-border-light">
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {post.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="badge border border-primary/20 bg-primary/10 text-primary"
              >
                {cat}
              </span>
            ))}
          </div>
          <h2 className="heading-2 text-ink mb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:text-primary transition-colors"
            >
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
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Read article
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative min-h-[280px] bg-gradient-to-br from-brand-dark to-surface lg:min-h-full">
          <div className="absolute inset-0 grid-pattern-lime opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="text-center">
              <p className="font-heading text-6xl font-extrabold text-primary/15">
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
    <article className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-border-light hover:-translate-y-1">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {post.categories.slice(0, 1).map((cat) => (
          <span
            key={cat}
            className="badge border border-primary/20 bg-primary/10 text-primary"
          >
            {cat}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-heading font-bold text-ink leading-snug">
        <Link
          href={`/blog/${post.slug}`}
          className="hover:text-primary transition-colors"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm text-ink-soft leading-[1.7] flex-1">
        {post.excerpt}
      </p>
      <div className="mt-5 flex items-center gap-3 text-xs text-ink-muted border-t border-border pt-4">
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
