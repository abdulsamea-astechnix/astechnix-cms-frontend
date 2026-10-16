import { Seo } from "@/components/Seo";
import { PageHeader, type Crumb } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { PortableText } from "@/components/PortableText";
import { getPostBySlug, getAllPostSlugs } from "@/sanity/queries";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Seo
          meta={{
            title: "Article Not Found | AStechnix",
            description: "The article you are looking for could not be found.",
          }}
        />
        <PageHeader
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Blog", path: "/blog" },
            { label: "Not Found" },
          ]}
          title="Article Not Found"
          description="The article you're looking for doesn't exist or may have been moved."
        />
        <section className="section-padding bg-canvas">
          <div className="container-content max-w-xl text-center">
            <Button href="/blog" variant="primary" size="lg">
              Back to All Articles
            </Button>
          </div>
        </section>
      </>
    );
  }

  const crumbs: Crumb[] = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: post.title },
  ];

  return (
    <>
      <Seo
        meta={{
          title: `${post.title} | AStechnix Blog`,
          description: post.excerpt,
        }}
      />
      <PageHeader
        breadcrumbs={crumbs}
        title={post.title}
        description={post.excerpt}
      />

      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-ink/8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/10 text-sm font-heading font-bold text-brand-accent">
              {post.authorName.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-ink">
                {post.authorName}
              </span>
              <div className="flex items-center gap-3 text-xs text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.estimatedReadingTime} min read
                </span>
              </div>
            </div>
          </div>

          {post.categories.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="badge bg-brand-accent/10 text-brand-accent"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          <PortableText value={post.body} />

          <div className="mt-12 pt-8 border-t border-ink/8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Need help with your IT infrastructure?"
        description="Talk to our team about endpoint management, security monitoring, or day-to-day IT support."
      >
        <Button href="/contact" variant="primary" size="lg">
          Get in Touch
        </Button>
      </CTASection>
    </>
  );
}
