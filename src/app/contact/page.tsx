"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowUpRight, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";
import { getData } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const { company } = getData();

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const text = `*Nouveau message depuis le site Plomberie Pro*%0A%0A👤 *Nom :* ${encodeURIComponent(formData.name)}%0A📧 *Email :* ${encodeURIComponent(formData.email)}%0A📞 *Téléphone :* ${encodeURIComponent(formData.phone)}%0A💬 *Message :* ${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `${company.whatsapp}?text=${text}`;

    setSent(true);
    setSending(false);

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[65vh] flex items-center bg-slate-950 overflow-hidden pt-28 pb-16 sm:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/plumber.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />
        </div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-6xl px-5 w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sky-400 uppercase">
              <Sparkles className="h-3 w-3" />
              {t("contact.page_title")}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-5 text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.12] text-white"
            >
              {t("contact.page_title")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300"
            >
              {t("contact.page_description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-sky-600">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {t("contact.phone_title")}
                  </h3>
                  <a
                    href={`tel:${company.phone}`}
                    className="mt-1 block text-sm text-slate-500 hover:text-sky-600 transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-sky-600">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {t("contact.email_title")}
                  </h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block text-sm text-slate-500 hover:text-sky-600 transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-sky-600">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {t("contact.address_title")}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {company.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-sky-600">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {t("contact.whatsapp_title")}
                  </h3>
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-slate-500 hover:text-sky-600 transition-colors"
                  >
                    {t("contact.whatsapp_link")}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="border border-slate-200 bg-white p-8 rounded-2xl shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {t("contact.form_title")}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                {t("contact.form_description")}
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 mb-5">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <p className="text-sm font-bold text-slate-900">
                    {t("contact.form_success")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("contact.form_name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all duration-200"
                      placeholder={t("contact.form_name")}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t("contact.form_email")}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all duration-200"
                        placeholder={t("contact.form_email")}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t("contact.form_phone")}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all duration-200"
                        placeholder={t("contact.form_phone")}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("contact.form_message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all duration-200 resize-none"
                      placeholder={t("contact.form_message")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex w-full items-center justify-center gap-2 bg-sky-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-sky-700 transition-all duration-200 disabled:opacity-60"
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi...
                      </span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {t("contact.form_submit")}
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
