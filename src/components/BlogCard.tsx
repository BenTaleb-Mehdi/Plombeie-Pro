"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const blogKeyMap: Record<string, string> = {
  "eviter-engorgement-canalisations": "blog_article1",
  "choisir-chauffe-eau-economique": "blog_article2",
};

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { t } = useTranslation();
  const transKey = blogKeyMap[post.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/50 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/[0.03]"
    >
      {post.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50 border-b border-slate-100">
          <Image
            src={post.image}
            alt={transKey ? t(`${transKey}.title`) : post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex rounded-full bg-slate-900/60 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md border border-white/10 shadow-sm">
              {t("blog_page.badge_tag")}
            </span>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-sky-600 shrink-0" />
              {transKey ? t(`${transKey}.date`) : post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-sky-600 shrink-0" />
              {transKey ? t(`${transKey}.readTime`) : post.readTime}
            </span>
          </div>

          <h3 className="mt-4 text-base sm:text-lg font-black text-slate-950 transition-colors duration-250 group-hover:text-sky-600 leading-snug">
            {transKey ? t(`${transKey}.title`) : post.title}
          </h3>

          <p className="mt-3.5 text-xs leading-relaxed text-slate-500 font-medium line-clamp-2">
            {transKey ? t(`${transKey}.excerpt`) : post.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-50">
          <Link
            href={`/blog/${post.id}`}
            className="group/link inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
          >
            {t("blog_page.read_article")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
