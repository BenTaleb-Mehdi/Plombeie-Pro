"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronLeft, ArrowRight, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const blogKeyMap: Record<string, string> = {
  "eviter-engorgement-canalisations": "blog_article1",
  "choisir-chauffe-eau-economique": "blog_article2",
};

const { blog, company } = getData();

export default function BlogPostClient({ id }: { id: string }) {
  const { t } = useTranslation();
  const post = blog.find((p) => p.id === id);
  const transKey = blogKeyMap[id];

  if (!post) return null;

  const otherPosts = blog.filter((p) => p.id !== id).slice(0, 2);

  return (
    <>
      <article className="min-h-screen bg-white">
        {/* Header Hero Section */}
        <div className="relative overflow-hidden bg-slate-50 border-b border-slate-100 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
          <div className="mx-auto max-w-4xl px-5 relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors duration-200 mb-6 group"
            >
              <ChevronLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
              {t("blog_page.back_to")}
            </Link>

            <div className="flex items-center gap-4 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded">
                {t("blog_page.badge_tag")}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              {transKey ? t(`${transKey}.title`) : post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-500 border-t border-slate-200/60 pt-6">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" />
                {transKey ? t(`${transKey}.date`) : post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-400" />
                {t("blog_page.reading_time")} : {transKey ? t(`${transKey}.readTime`) : post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image & Main Body */}
        <div className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
          {post.image && (
            <div className="relative mb-12 overflow-hidden rounded-2xl shadow-xl aspect-video bg-slate-100 border border-slate-100">
              <Image
                src={post.image}
                alt={transKey ? t(`${transKey}.title`) : post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-w-4xl) 100vw, 800px"
              />
            </div>
          )}

          <div className="prose prose-slate lg:prose-lg max-w-none">
            {transKey
              ? [0, 1, 2, 3].map((idx) => {
                  const content = t(`${transKey}.content.${idx}`);
                  if (content === `${transKey}.content.${idx}`) return null;
                  return (
                    <p key={idx} className="text-base sm:text-lg leading-relaxed text-slate-600 mb-6 last:mb-0">
                      {content}
                    </p>
                  );
                })
              : post.content?.map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg leading-relaxed text-slate-600 mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
          </div>

          {/* Quick Contact Box */}
          <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50/50 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">{t("blog_page.cta_title")}</h3>
              <p className="mt-1 text-sm text-slate-600">{t("blog_page.cta_desc")}</p>
            </div>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-green-700 transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4" />
              {t("cta.button")}
            </a>
          </div>

          {/* Related Articles */}
          {otherPosts.length > 0 && (
            <div className="mt-20 border-t border-slate-200 pt-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                {t("blog_page.related_title")}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {otherPosts.map((other) => {
                  const oKey = blogKeyMap[other.id];
                  const oTitle = oKey ? t(`${oKey}.title`) : other.title;
                  const oExcerpt = oKey ? t(`${oKey}.excerpt`) : other.excerpt;
                  return (
                    <div
                      key={other.id}
                      className="group border border-slate-200 bg-white p-6 hover:border-blue-600 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs font-medium text-slate-400">
                          {oKey ? t(`${oKey}.date`) : other.date}
                        </span>
                        <h4 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {oTitle}
                        </h4>
                        <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                          {oExcerpt}
                        </p>
                      </div>
                      <Link
                        href={`/blog/${other.id}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700"
                      >
                        {t("blog_page.read_article")}
                        <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
