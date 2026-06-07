"use client";

import { getData } from "@/lib/data";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

const { company, navigation } = getData();

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-slate-950">
              {company.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-950">
              {t("nav.home")}
            </h4>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-slate-950 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-950">
              {t("contact.page_title")}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-950 transition-colors duration-200"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-950 transition-colors duration-200"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {company.email}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {company.address}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-950">
              {t("cta.title")}
            </h4>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              {t("cta.subtitle")}
            </p>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 hover:text-slate-700 transition-colors duration-200"
            >
              {t("cta.button")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200/70 pt-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {company.name}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
