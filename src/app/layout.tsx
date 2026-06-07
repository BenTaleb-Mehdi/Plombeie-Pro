import type { Metadata } from "next";
import { Geist, Geist_Mono, Satisfy } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";
import Chatbot from "@/components/Chatbot";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Plomberie Pro | Plombier à Tanger",
    template: "%s | Plomberie Pro",
  },
  description:
    "Artisan plombier à Tanger : dépannage d'urgence 30 min, installation sanitaire, rénovation de salle de bain et chauffe-eau.",
  metadataBase: new URL("https://plomberiepro.ma"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${satisfy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <Chatbot />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
