import { client } from "./lib/client";

export interface BlogPostSummary {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  authorName: string;
  authorImage: string | null;
  categories: string[];
  mainImageUrl: string | null;
  mainImageAlt: string | null;
  estimatedReadingTime: number;
}

export interface BlogPostFull extends BlogPostSummary {
  body: unknown[];
}

function calculateReadingTime(body: unknown[]): number {
  let wordCount = 0;
  for (const block of body) {
    if (
      typeof block === "object" &&
      block !== null &&
      "_type" in block &&
      (block as { _type: string })._type === "block"
    ) {
      const children = (block as { children?: unknown[] }).children;
      if (Array.isArray(children)) {
        for (const child of children) {
          if (
            typeof child === "object" &&
            child !== null &&
            "text" in child
          ) {
            const text = (child as { text: string }).text;
            wordCount += text.split(/\s+/).filter(Boolean).length;
          }
        }
      }
    }
  }
  return Math.max(1, Math.ceil(wordCount / 200));
}

function extractExcerpt(body: unknown[], maxChars = 160): string {
  for (const block of body) {
    if (
      typeof block === "object" &&
      block !== null &&
      "_type" in block &&
      (block as { _type: string })._type === "block"
    ) {
      const children = (block as { children?: unknown[] }).children;
      if (Array.isArray(children)) {
        const text = children
          .map((c) =>
            typeof c === "object" && c !== null && "text" in c
              ? (c as { text: string }).text
              : "",
          )
          .join(" ")
          .trim();
        if (text) {
          return text.length > maxChars
            ? text.slice(0, maxChars).trimEnd() + "..."
            : text;
        }
      }
    }
  }
  return "";
}

const postFields = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  body,
  "author": author->{ name, "image": image },
  "categories": categories[]->{ title },
  "mainImage": mainImage
`;

export async function getAllPosts(): Promise<BlogPostSummary[]> {
  const query = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    ${postFields}
  }`;

  const results = await client.fetch<
    Array<{
      _id: string;
      title: string;
      slug: string;
      publishedAt: string;
      body: unknown[];
      author: { name: string; image: unknown } | null;
      categories: { title: string }[] | null;
      mainImage: { asset: { _ref: string }; alt?: string } | null;
    }>
  >(query);

  return results.map((post) => ({
    _id: post._id,
    title: post.title,
    slug: post.slug,
    excerpt: extractExcerpt(post.body),
    publishedAt: post.publishedAt,
    authorName: post.author?.name ?? "AStechnix",
    authorImage: null,
    categories: post.categories?.map((c) => c.title) ?? [],
    mainImageUrl: null,
    mainImageAlt: post.mainImage?.alt ?? null,
    estimatedReadingTime: calculateReadingTime(post.body),
  }));
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPostFull | null> {
  const query = `*[_type == "post" && slug.current == $slug && defined(publishedAt)][0] {
    ${postFields}
  }`;

  const post = await client.fetch<
    | {
        _id: string;
        title: string;
        slug: string;
        publishedAt: string;
        body: unknown[];
        author: { name: string; image: unknown } | null;
        categories: { title: string }[] | null;
        mainImage: { asset: { _ref: string }; alt?: string } | null;
      }
    | null
  >(query, { slug });

  if (!post) return null;

  return {
    _id: post._id,
    title: post.title,
    slug: post.slug,
    excerpt: extractExcerpt(post.body),
    publishedAt: post.publishedAt,
    authorName: post.author?.name ?? "AStechnix",
    authorImage: null,
    categories: post.categories?.map((c) => c.title) ?? [],
    mainImageUrl: null,
    mainImageAlt: post.mainImage?.alt ?? null,
    estimatedReadingTime: calculateReadingTime(post.body),
    body: post.body,
  };
}

export async function getAllPostSlugs(): Promise<string[]> {
  const query = `*[_type == "post" && defined(publishedAt) && defined(slug.current)].slug.current`;
  return client.fetch<string[]>(query);
}
