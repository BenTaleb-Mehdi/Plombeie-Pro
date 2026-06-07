"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import CtaSection from "@/components/CtaSection";
import { getData } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const { blog, company } = getData();

const blogKeyMap: Record<string, string> = {
  "eviter-engorgement-canalisations": "blog_article1",
  "choisir-chauffe-eau-economique": "blog_article2",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function BlogPageClient() {
  const { t } = useTranslation();
  const featuredPost = blog[0];
  const gridPosts = blog.slice(1);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-950 overflow-hidden pt-28 pb-16 sm:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/pro1.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />
        </div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-6xl px-5 w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sky-400 uppercase">
              <BookOpen className="h-3 w-3" />
              {t("blog_page.badge")}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-5 text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.12] text-white"
            >
              {t("blog_page.title")}{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                {t("blog_page.title2")}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300"
            >
              {t("blog_page.subtitle")}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/10 hover:bg-sky-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                {t("hero.cta_primary")}
                <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>
              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-4 w-4 text-sky-400" />
                {t("hero.cta_secondary")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-slate-50/50 py-20 border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-5">
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.27em] text-sky-600 block mb-6 text-center lg:text-left">
                {t("blog_page.featured")}
              </span>
              
              <div className="group relative grid gap-8 lg:grid-cols-12 bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-md hover:shadow-xl hover:shadow-sky-500/[0.02] transition-all duration-300">
                {featuredPost.image && (
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px] bg-slate-50 overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-5 left-5 z-10">
                      <span className="inline-flex rounded-full bg-slate-900/60 px-4 py-2 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md border border-white/10 shadow-md">
                        {t("blog_page.featured_badge")}
                      </span>
                    </div>
                  </div>
                )}

                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                        {blogKeyMap[featuredPost.id] ? t(`${blogKeyMap[featuredPost.id]}.date`) : featuredPost.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                        {blogKeyMap[featuredPost.id] ? t(`${blogKeyMap[featuredPost.id]}.readTime`) : featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl sm:text-2xl font-black text-slate-950 transition-colors duration-250 group-hover:text-sky-600 leading-snug">
                      {blogKeyMap[featuredPost.id] ? t(`${blogKeyMap[featuredPost.id]}.title`) : featuredPost.title}
                    </h3>

                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">
                      {blogKeyMap[featuredPost.id] ? t(`${blogKeyMap[featuredPost.id]}.excerpt`) : featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-50">
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow hover:bg-slate-900 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                      {t("blog_page.read_full")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {gridPosts.length > 0 && (
            <div className="pt-8 border-t border-slate-100">
              <span className="text-[10px] font-black uppercase tracking-[0.27em] text-sky-600 block mb-8 text-center lg:text-left">
                {t("blog_page.other_articles")}
              </span>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
                {gridPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
