import BlogPageClient from "./BlogPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Conseils | Plomberie Pro",
  description:
    "Astuces de professionnels pour entretenir vos canalisations, choisir votre chauffe-eau et économiser sur vos factures à Tanger.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
