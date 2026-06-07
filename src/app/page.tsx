"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import IntroVideo from "@/components/IntroVideo";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import StatsSection from "@/components/StatsSection";
import BlogCard from "@/components/BlogCard";
import CtaSection from "@/components/CtaSection";
import SectionHeading from "@/components/SectionHeading";
import PortfolioModal from "@/components/PortfolioModal";
import { getData, type PortfolioItem } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const { services, portfolio, about, blog } = getData();

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const { t } = useTranslation();

  return (
    <>
      <Hero />

      {/* ── Intro Video Section ─────────────────────────── */}
      <IntroVideo />

      <StatsSection stats={about.stats} />

      {/* ── Services Section ────────────────────────────── */}
      <section className="border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 py-14 sm:py-20">
          <SectionHeading
            label={t("services.label")}
            title={t("services.title")}
            description={t("services.description")}
          />
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Section ────────────────────────────── */}
      <section className="border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 py-14 sm:py-20">
          <SectionHeading
            label={t("portfolio.label")}
            title={t("portfolio.title")}
          />
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2">
            {portfolio.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onClick={() => setSelectedProject(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Section ─────────────────────────────────── */}
      <section className="border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 py-14 sm:py-20">
          <SectionHeading
            label={t("blog.label")}
            title={t("blog.title")}
            description={t("blog.description")}
          />
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2">
            {blog.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      {/* ── Project Details Modal ────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <PortfolioModal
            item={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
