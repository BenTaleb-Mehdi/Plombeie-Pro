import { getData } from "@/lib/data";
import { notFound } from "next/navigation";
import PortfolioDetailClient from "./PortfolioDetailClient";
import type { Metadata } from "next";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const { portfolio } = getData();
  return portfolio.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { id } = await params;
  const { portfolio } = getData();
  const item = portfolio.find((p) => p.id === id);

  if (!item) {
    return {
      title: "Projet non trouvé | Plomberie Pro",
    };
  }

  return {
    title: `${item.title} | Portfolio Plomberie Pro`,
    description: item.description,
  };
}

export default async function ProjectDetailsPage({ params }: RouteParams) {
  const { id } = await params;
  const { portfolio } = getData();
  const item = portfolio.find((p) => p.id === id);

  if (!item) {
    notFound();
  }

  return <PortfolioDetailClient id={id} />;
}
