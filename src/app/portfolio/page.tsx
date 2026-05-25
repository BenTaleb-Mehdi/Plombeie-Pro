import PortfolioCard from "@/components/PortfolioCard";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import { getData } from "@/lib/data";
import type { Metadata } from "next";

const { portfolio } = getData();

export const metadata: Metadata = {
  title: "Portfolio | Plomberie Pro",
  description:
    "Découvrez nos réalisations en plomberie et rénovation sanitaire à Tanger.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <SectionHeading
            label="Portfolio"
            title="Nos réalisations"
            description="Chaque projet reflète notre exigence de qualité et notre souci du détail."
          />
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {portfolio.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
