import PortfolioGrid from "@/components/PortfolioGrid";
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
      <section className="border-b border-slate-200/50 bg-slate-50 bg-grid-pattern relative overflow-hidden">
        {/* Ambient premium background blurs */}
        <div className="absolute top-[-30%] right-[-10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
        
        <div className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <SectionHeading
            label="Portfolio"
            title="Nos réalisations"
            description="Chaque projet reflète notre exigence de qualité et notre souci du détail."
          />
        </div>
      </section>

      <section className="border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <PortfolioGrid portfolio={portfolio} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
