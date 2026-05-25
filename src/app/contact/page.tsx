"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { getData } from "@/lib/data";

const { company } = getData();

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <SectionHeading
            label="Contact"
            title="Parlons de votre projet"
            description="Une question, un devis ou une urgence ? Nous sommes à votre écoute."
          />
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-blue-600 bg-blue-600">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Téléphone
                  </h3>
                  <a
                    href={`tel:${company.phone}`}
                    className="mt-1 block text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-blue-600 bg-blue-600">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Email
                  </h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-blue-600 bg-blue-600">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Adresse
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {company.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-blue-600 bg-blue-600">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    WhatsApp
                  </h3>
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    Nous écrire instantanément
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="border border-slate-200 bg-slate-50 p-8"
            >
              <h3 className="text-lg font-bold text-slate-900">
                Envoyez-nous un message
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Utilisez WhatsApp pour une réponse rapide, ou
                laissez-nous vos coordonnées via le formulaire ci-dessous.
              </p>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                Contacter via WhatsApp
              </a>
              <p className="mt-4 text-xs text-slate-400 text-center">
                Réponse sous 30 minutes en moyenne
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
