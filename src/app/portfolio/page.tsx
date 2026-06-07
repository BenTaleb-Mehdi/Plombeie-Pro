import PortfolioPageClient from "./PortfolioPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Plomberie Pro",
  description:
    "Découvrez nos projets récents de plomberie : rénovations sanitaires complètes, débouchage et installations de chauffe-eau à Tanger.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
