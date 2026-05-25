import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import { getData } from "@/lib/data";
import type { Metadata } from "next";

const { services } = getData();

export const metadata: Metadata = {
  title: "Services | Plomberie Pro",
  description:
    "Dépannage d'urgence, installation sanitaire, rénovation de salle de bain et chauffe-eau à Tanger.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <SectionHeading
            label="Services"
            title="Toutes nos prestations"
            description="Des solutions adaptées à chaque besoin, réalisées avec rigueur et professionnalisme."
          />
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
