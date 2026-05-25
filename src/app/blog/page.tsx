import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import { getData } from "@/lib/data";
import type { Metadata } from "next";

const { blog } = getData();

export const metadata: Metadata = {
  title: "Blog | Plomberie Pro",
  description:
    "Conseils d'entretien, guides techniques et actualités de la plomberie.",
};

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <SectionHeading
            label="Blog"
            title="Conseils & actualités"
            description="Astuces pratiques et guides techniques pour l'entretien de vos installations sanitaires."
          />
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {blog.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
