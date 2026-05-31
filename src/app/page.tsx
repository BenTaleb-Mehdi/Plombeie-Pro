"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import StatsSection from "@/components/StatsSection";
import BlogCard from "@/components/BlogCard";
import CtaSection from "@/components/CtaSection";
import SectionHeading from "@/components/SectionHeading";
import PortfolioModal from "@/components/PortfolioModal";
import { getData, type PortfolioItem } from "@/lib/data";

const { services, portfolio, about, blog } = getData();

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <>
      <Hero />

      <StatsSection stats={about.stats} />

      {/* Services Section */}
      <section className="border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            label="Services"
            title="Un savoir-faire complet"
            description="De l'urgence à la rénovation, nous intervenons sur tous vos besoins en plomberie."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            label="Réalisations"
            title="Nos projets récents"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
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

      {/* Blog Section */}
      <section className="border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            label="Blog"
            title="Conseils & actualités"
            description="Astuces pratiques et guides techniques pour l'entretien de vos installations."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {blog.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      {/* Project details Modal */}
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
