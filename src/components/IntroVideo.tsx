"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function IntroVideo() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onCanPlay = () => setLoaded(true);
    v.addEventListener("canplay", onCanPlay);
    return () => v.removeEventListener("canplay", onCanPlay);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950"
      style={{ height: "clamp(260px, 55vw, 600px)" }}
      aria-label={t("video.title")}
    >
      {/* ── Video ──────────────────────────────────────────────── */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        src="/videos/intro.mp4"
        poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
        autoPlay
        muted
        loop
        playsInline
        aria-label={t("video.title")}
      />

      {/* Poster fallback shown while video loads */}
      {!loaded && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
          alt={t("video.title")}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* ── Gradient Overlays ────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/75 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent pointer-events-none" />

      {/* ── Text Overlay ─────────────────────────────────────── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 text-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-sky-300">
            Plomberie Pro – Tanger
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-lg max-w-2xl"
        >
          {t("video.title")}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-3 max-w-lg text-sm sm:text-base text-slate-300 font-medium leading-relaxed drop-shadow"
        >
          {t("video.subtitle")}
        </motion.p>
      </div>

      {/* ── Playback Controls ────────────────────────────────── */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        {/* Mute toggle */}
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-sky-400"
        >
          {muted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>

        {/* Play / Pause toggle */}
        <button
          onClick={togglePlay}
          aria-label={playing ? t("video.pause") : t("video.play")}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600/80 border border-sky-400/40 text-white backdrop-blur-sm hover:bg-sky-600 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-sky-400"
        >
          {playing ? (
            <Pause className="h-4 w-4 fill-white" />
          ) : (
            <Play className="h-4 w-4 fill-white" />
          )}
        </button>
      </div>

      {/* ── Bottom wave shape ────────────────────────────────── */}
      <div className="absolute bottom-0 inset-x-0 h-10 overflow-hidden">
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="h-full w-full fill-white"
          aria-hidden="true"
        >
          <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
        </svg>
      </div>
    </section>
  );
}
