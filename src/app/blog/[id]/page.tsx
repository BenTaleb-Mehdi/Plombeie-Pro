import { getData } from "@/lib/data";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import type { Metadata } from "next";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const { blog } = getData();
  return blog.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { id } = await params;
  const { blog } = getData();
  const post = blog.find((p) => p.id === id);

  if (!post) {
    return {
      title: "Article non trouvé | Plomberie Pro",
    };
  }

  return {
    title: `${post.title} | Blog Plomberie Pro`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: RouteParams) {
  const { id } = await params;
  const { blog } = getData();
  const post = blog.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return <BlogPostClient id={id} />;
}
