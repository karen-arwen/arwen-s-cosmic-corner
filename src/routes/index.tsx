import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Instagram, Mail, Youtube, Music2, Gamepad2, BookOpen, Sparkles,
  Monitor, Calendar, Package, Headphones, Camera, Play, Star,
  Heart, Gift, Video, Wand2, Palette, MessageSquare,
} from "lucide-react";
import arwenHero from "@/assets/arwen-hero.jpg";
import setupWide from "@/assets/setup-wide.jpg";
import catSetup from "@/assets/cat-setup.jpg";
import collectiblesImg from "@/assets/collectibles.jpg";
import gamingImg from "@/assets/gaming.jpg";
import makeupImg from "@/assets/makeup.jpg";
import booksImg from "@/assets/books.jpg";
import eventsImg from "@/assets/events.jpg";
import cozyImg from "@/assets/cozy.jpg";
import ugcImg from "@/assets/ugc.jpg";
import gamesImg from "@/assets/games.jpg";

export const Route = createFileRoute("/")({ component: Index });

const socials = [
  { icon: Instagram, label: "Instagram", handle: "@by.arwenn", href: "#" },
  { icon: Music2, label: "TikTok", handle: "@by.arwenn", href: "#" },
  { icon: Youtube, label: "YouTube", handle: "Arwen", href: "#" },
  { icon: Mail, label: "Email", handle: "by.arwenn.contato@gmail.com", href: "mailto:by.arwenn.contato@gmail.com" },
];

const hyperfixations = [
  { label: "Games", icon: Gamepad2, img: gamesImg },
  { label: "Books", icon: BookOpen, img: booksImg },
  { label: "Makeup", icon: Palette, img: makeupImg },
  { label: "Setup", icon: Monitor, img: catSetup },
  { label: "Geek Events", icon: Calendar, img: eventsImg },
  { label: "Collectibles", icon: Package, img: collectiblesImg },
  { label: "Cozy Content", icon: Headphones, img: cozyImg },
  { label: "UGC", icon: Camera, img: ugcImg },
];

const services = [
  { label: "Reviews", icon: Star },
  { label: "Unboxing", icon: Gift },
  { label: "TikTok/Reels Videos", icon: Video },
  { label: "Storytelling Videos", icon: MessageSquare },
  { label: "Aesthetic Content", icon: Wand2 },
  { label: "Geek Lifestyle Content", icon: Sparkles },
];

const portfolio = [
  { label: "Setup Tour", img: catSetup },
  { label: "Game Review", img: gamingImg },
  { label: "UGC Beauty", img: makeupImg },
  { label: "Geek Unboxing", img: collectiblesImg },
  { label: "Cozy Gaming", img: cozyImg },
  { label: "Makeup Reel", img: makeupImg },
];

// Brand display: stylized text "logos" with their own typographic feel
const brands = [
  { name: "Nintendo", className: "font-display italic tracking-tight" },
  { name: "REDRAGON", className: "font-sans font-black tracking-[0.18em]" },
  { name: "Pichau", className: "font-script text-3xl" },
  { name: "SHEGLAM", className: "font-sans font-extrabold tracking-[0.32em]" },
  { name: "press start", className: "font-display lowercase italic" },
  { name: "Funko", className: "font-display font-bold" },
];

// Floating stars background
function Stars({ count = 30, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 89) % 100;
        const size = 6 + ((i * 7) % 10);
        const delay = (i % 7) * 0.4;
        return (
          <Sparkles
            key={i}
            className="star absolute text-lilac/70"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, animationDelay: `${delay}s` }}
          />
        );
      })}
    </div>
  );
}

// Ambient drifting particles across the whole page
function AmbientParticles({ count = 24 }: { count?: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 37) % 100;
        const top = ((i * 53) % 100);
        const size = 2 + ((i * 3) % 4);
        const delay = (i % 10) * 1.2;
        const duration = 12 + ((i * 5) % 10);
        return (
          <span
            key={i}
            className="drift absolute rounded-full bg-lilac/70 blur-[1px]"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              boxShadow: "0 0 8px rgba(184,108,255,0.8)",
            }}
          />
        );
      })}
    </div>
  );
}

function PixelHeart() {
  return (
    <div className="flex items-center justify-center gap-3 py-12 sm:py-16">
      <span className="h-px flex-1 max-w-[160px] bg-gradient-to-r from-transparent to-lilac/50" />
      <div className="text-2xl float-slow" aria-hidden>💜</div>
      <span className="h-px flex-1 max-w-[160px] bg-gradient-to-l from-transparent to-lilac/50" />
    </div>
  );
}

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMouse({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden text-[color:var(--foreground)]">
      <AmbientParticles count={28} />
      <Stars count={40} />

      {/* ===== HERO (mockup style: unified frame) ===== */}
      <section ref={heroRef} className="relative px-3 pt-4 pb-10 sm:px-6 sm:pt-6 lg:px-10">
        {/* Mouse-reactive ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 transition-[background] duration-300"
          style={{
            background: `radial-gradient(700px circle at ${mouse.x}% ${mouse.y}%, rgba(216,109,255,0.22), transparent 60%), radial-gradient(900px circle at ${100 - mouse.x}% ${100 - mouse.y}%, rgba(120,80,220,0.18), transparent 65%)`,
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-lavender/30 blur-3xl" />

        {/* Unified hero frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] glass-strong neon-border"
        >
          {/* Portrait — full bleed right side */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
            <img
              src={arwenHero}
              alt="Arwen — geek creator portrait in cozy purple gaming setup"
              width={1400} height={1200}
              className="h-full w-full object-cover object-[center_top] lg:object-[center_center]"
            />
            {/* Left fade so text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0418] via-[#0c0418]/85 to-transparent lg:from-[#0c0418] lg:via-[#0c0418]/70 lg:to-transparent" />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c0418] to-transparent" />
          </div>

          {/* Inner overlay layout */}
          <div className="relative grid min-h-[640px] grid-rows-[auto_1fr_auto] p-5 sm:p-8 lg:min-h-[760px] lg:p-12">
            {/* Top nav */}
            <nav className="relative z-10 flex items-center justify-between">
              <div className="font-display text-xl tracking-wide">
                <span className="text-lilac">✦</span> <span className="gradient-text font-semibold">Arwen</span> <span className="text-lilac">✦</span>
              </div>
              <motion.a whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.97 }}
                href="mailto:by.arwenn.contato@gmail.com"
                className="btn-ghost sweep flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm transition hover:shadow-[0_0_30px_rgba(184,108,255,0.5)]">
                <Mail size={14} /> Business Contact
              </motion.a>
            </nav>

            {/* Center content (left aligned) */}
            <div className="relative z-10 mt-8 max-w-xl lg:mt-12 lg:max-w-2xl">
              <div className="relative inline-block">
                <Sparkles className="absolute -left-6 -top-4 text-lilac float-slow" size={22} />
                <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-glow sm:text-7xl lg:text-8xl">
                  Arwen<span className="text-lilac">,</span>
                </h1>
                <Sparkles className="absolute -right-8 top-2 text-accent float-slow" size={20} style={{ animationDelay: "1s" }} />
              </div>
              <p className="font-script mt-1 text-5xl text-glow gradient-text sm:text-6xl">Geek Creator</p>

              <h2 className="mt-6 text-2xl font-semibold leading-tight sm:text-3xl">
                Developer by day,<br />geek permanently <span className="inline-block float-slow">✨</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--muted-foreground)] sm:text-base">
                Geek, gamer and lifestyle creator sharing games, books, makeup, setup content,
                events and chaotic hyperfixations with a maximalist cozy aesthetic.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
                <motion.a
                  whileHover={{ scale: 1.06, y: -3, boxShadow: "0 14px 50px rgba(216,109,255,0.7)" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  href="#portfolio"
                  className="btn-primary sweep flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                  <Gamepad2 size={18} /> UGC Portfolio
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.06, y: -3, boxShadow: "0 10px 40px rgba(184,108,255,0.45)" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  href="mailto:by.arwenn.contato@gmail.com"
                  className="btn-ghost sweep flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                  <Mail size={18} /> Business Contact
                </motion.a>
              </div>
            </div>

            {/* Bottom social bar inside hero frame */}
            <div className="relative z-10 mt-10 lg:mt-14">
              <div className="glass-strong rounded-2xl p-4 sm:p-5">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {socials.map((s) => (
                    <motion.a key={s.label} href={s.href}
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="group sweep relative flex items-center gap-3 rounded-xl p-1.5">
                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lavender/30 to-accent/20 neon-border transition group-hover:shadow-[0_0_28px_rgba(216,109,255,0.7)]">
                        <s.icon size={18} className="text-lilac transition group-hover:scale-110 group-hover:text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="gradient-text text-xs font-semibold sm:text-sm">{s.label}</div>
                        <div className="truncate text-[10px] text-[color:var(--muted-foreground)] sm:text-xs">{s.handle}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative sparkles inside frame */}
          <Sparkles className="absolute right-6 top-20 z-10 text-white/80 float-slow" size={20} />
          <Star className="absolute right-24 top-40 z-10 text-lilac float-slow" size={14} style={{ animationDelay: "1.4s" }} />
          <Sparkles className="absolute right-10 bottom-32 z-10 text-accent float-slow" size={16} style={{ animationDelay: "2.2s" }} />
        </motion.div>

        {/* Wide cozy room strip below frame */}
        <div className="relative mx-auto mt-10 max-w-[1400px] overflow-hidden rounded-3xl glass">
          <img src={setupWide} alt="Cozy purple gamer setup" width={1280} height={400} loading="lazy"
            className="h-28 w-full object-cover opacity-60 sm:h-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#170822]/30 to-[#08030d]" />
        </div>
      </section>

      <PixelHeart />

      {/* ===== HYPERFIXATIONS ===== */}
      <section className="relative px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-lilac/50 sm:w-24" />
            <h3 className="text-center text-xs font-bold tracking-[0.35em] text-lilac sm:text-sm">CURRENT HYPERFIXATIONS</h3>
            <span className="h-px w-12 bg-lilac/50 sm:w-24" />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {hyperfixations.map((h, i) => (
              <motion.div key={h.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl glass aspect-[3/4]">
                <img src={h.img} alt={h.label} width={300} height={400} loading="lazy"
                     className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-115" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08030d] via-[#08030d]/40 to-transparent" />
                <Sparkles className="absolute right-2 top-2 text-white/0 transition group-hover:text-lilac" size={14} />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <div className="flex items-center gap-1.5">
                    <h.icon size={14} className="text-lilac" />
                    <span className="text-xs font-semibold text-white">{h.label}</span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-lavender/30 transition duration-500 group-hover:ring-2 group-hover:ring-lavender/90 group-hover:shadow-[0_0_40px_rgba(216,109,255,0.6)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PixelHeart />

      {/* ===== UGC + CREATOR ===== */}
      <section className="relative px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl glass-strong rounded-[2rem] p-6 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-5xl font-semibold gradient-text sm:text-6xl">UGC + Creator</h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]">
                I create authentic, modern and engaging content designed for connection,
                storytelling and social media performance.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {services.map((s, i) => (
                  <motion.div key={s.label}
                    whileHover={{ scale: 1.06, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 16 }}
                    style={{ animationDelay: `${i * 0.3}s` }}
                    className="group sweep flex items-center gap-3 rounded-2xl glass p-4 transition hover:shadow-[0_0_28px_rgba(184,108,255,0.5)] hover:ring-1 hover:ring-lavender/80">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lavender/40 to-accent/30 transition group-hover:shadow-[0_0_20px_rgba(216,109,255,0.8)]">
                      <s.icon size={16} className="text-white transition group-hover:scale-110" />
                    </div>
                    <span className="text-sm font-medium">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Collage */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl glass">
                <img src={gamingImg} alt="" width={300} height={600} loading="lazy" className="h-full w-full object-cover"/>
              </div>
              <div className="col-span-2 overflow-hidden rounded-2xl glass relative group">
                <img src={ugcImg} alt="" width={500} height={300} loading="lazy" className="h-44 w-full object-cover sm:h-56"/>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
                  <Play className="text-white" size={36} fill="white"/>
                </div>
              </div>
              <div className="col-span-1 overflow-hidden rounded-2xl glass">
                <img src={catSetup} alt="" width={300} height={300} loading="lazy" className="h-32 w-full object-cover sm:h-40"/>
              </div>
              <div className="col-span-1 overflow-hidden rounded-2xl glass">
                <img src={collectiblesImg} alt="" width={300} height={300} loading="lazy" className="h-32 w-full object-cover sm:h-40"/>
              </div>
              <div className="col-span-3 overflow-hidden rounded-2xl glass relative group">
                <img src={makeupImg} alt="" width={900} height={300} loading="lazy" className="h-40 w-full object-cover"/>
                <div className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 backdrop-blur">
                  <Sparkles size={12} className="text-lilac" />
                  <span className="text-xs">Aesthetic content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PixelHeart />

      {/* ===== PORTFOLIO ===== */}
      <section id="portfolio" className="relative px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-lilac/50 sm:w-24" />
            <h3 className="text-center text-xs font-bold tracking-[0.35em] text-lilac sm:text-sm">PORTFOLIO</h3>
            <span className="h-px w-12 bg-lilac/50 sm:w-24" />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {portfolio.map((p, i) => (
              <motion.div key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 240, damping: 18 }}
                className="group relative aspect-[9/12] cursor-pointer overflow-hidden rounded-2xl glass">
                <img src={p.img} alt={p.label} width={300} height={400} loading="lazy"
                     className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08030d] via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur transition duration-300 group-hover:scale-125 group-hover:bg-white/40 group-hover:shadow-[0_0_30px_rgba(216,109,255,0.9)]">
                    <Play size={20} className="text-white transition group-hover:translate-x-[1px]" fill="white" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-lavender/20 transition duration-500 group-hover:ring-2 group-hover:ring-lavender/80 group-hover:shadow-[0_0_36px_rgba(216,109,255,0.55)]" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-xs font-semibold">{p.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.06, y: -3, boxShadow: "0 14px 50px rgba(216,109,255,0.7)" }}
              whileTap={{ scale: 0.96 }}
              className="btn-primary sweep rounded-full px-8 py-3 text-sm font-semibold">
              View full portfolio
            </motion.button>
          </div>
        </div>
      </section>

      <PixelHeart />

      {/* ===== PARTNERSHIPS ===== */}
      <section className="relative px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl glass-strong rounded-3xl p-8 sm:p-12">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-lilac/50 sm:w-24" />
            <h3 className="text-center text-xs font-bold tracking-[0.35em] text-lilac sm:text-sm">PARTNERSHIPS</h3>
            <span className="h-px w-12 bg-lilac/50 sm:w-24" />
          </div>
          <p className="mt-3 text-center text-xs italic text-[color:var(--muted-foreground)]">
            Dream brands &amp; future collaborations
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((b) => (
              <motion.div key={b.name}
                whileHover={{ y: -4, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="group sweep flex items-center justify-center rounded-2xl glass px-4 py-5 transition hover:shadow-[0_0_32px_rgba(216,109,255,0.55)] hover:ring-1 hover:ring-lavender/70">
                <span className={`text-lg text-lilac/85 transition group-hover:text-white ${b.className}`}>
                  {b.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PixelHeart />

      {/* ===== CTA ===== */}
      <section className="relative px-4 sm:px-8 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] gradient-lilac p-8 sm:p-14">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay"
               style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white, transparent 40%), radial-gradient(circle at 80% 50%, white, transparent 40%)" }} />
          <Stars count={20} className="opacity-60" />
          <div className="relative grid items-center gap-6 sm:grid-cols-[auto_1fr_auto]">
            <div className="text-7xl float-slow" aria-hidden>👾</div>
            <div className="text-center sm:text-left">
              <h3 className="font-display text-3xl font-semibold leading-tight text-[#1a0820] sm:text-4xl">
                Let's create something amazing together 💜
              </h3>
              <a href="mailto:by.arwenn.contato@gmail.com"
                 className="mt-3 inline-block text-base font-medium text-[#2a0a3a] underline-offset-4 hover:underline">
                by.arwenn.contato@gmail.com
              </a>
            </div>
            <div className="hidden text-6xl float-slow sm:block" aria-hidden style={{ animationDelay: "1.5s" }}>🎮</div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative mt-20 px-4 pb-12 text-center text-xs text-[color:var(--muted-foreground)] sm:px-8">
        {/* Decorative geek row */}
        <div className="mx-auto mb-6 flex max-w-md items-center justify-center gap-5 text-2xl" aria-hidden>
          <span className="float-slow" style={{ animationDelay: "0s" }}>✨</span>
          <span className="float-slow" style={{ animationDelay: "0.4s" }}>🎮</span>
          <span className="float-slow" style={{ animationDelay: "0.8s" }}>💜</span>
          <span className="float-slow" style={{ animationDelay: "1.2s" }}>👾</span>
          <span className="float-slow" style={{ animationDelay: "1.6s" }}>⭐</span>
          <span className="float-slow" style={{ animationDelay: "2.0s" }}>🕹️</span>
        </div>
        {/* pixel heart row */}
        <div className="mx-auto mb-4 flex max-w-xs items-center justify-center gap-1" aria-hidden>
          {[0,1,2,3,4,5,6,7,8].map((i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-sm" style={{
              background: i % 3 === 0 ? "rgba(216,109,255,0.9)" : i % 3 === 1 ? "rgba(184,108,255,0.6)" : "rgba(229,184,255,0.4)",
              boxShadow: "0 0 6px rgba(216,109,255,0.6)",
            }} />
          ))}
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <Heart size={12} className="text-lilac" fill="currentColor" />
          © 2026 Arwen · made with cozy chaos &amp; purple magic
          <Heart size={12} className="text-lilac" fill="currentColor" />
        </div>
      </footer>
    </main>
  );
}
