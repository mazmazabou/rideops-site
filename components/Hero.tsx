import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BrowserFrame from "./BrowserFrame";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/50 via-brand-light/20 to-white py-24 md:py-32">
      {/* Soft radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 30%, rgba(37, 99, 235, 0.06), transparent),
            radial-gradient(ellipse 50% 40% at 80% 70%, rgba(37, 99, 235, 0.03), transparent)
          `,
        }}
      />
      {/* Faint dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="hero-stagger hero-stagger-1 text-4xl leading-tight font-heading text-brand-charcoal md:text-5xl lg:text-6xl">
          Campus transportation ops, finally under control.
        </h1>
        <p className="hero-stagger hero-stagger-2 mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          RideOps replaces radio calls, spreadsheets, and guesswork with a
          real-time dispatch platform built for university accessibility
          programs.
        </p>
        <div className="hero-stagger hero-stagger-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/demo"
            className="group inline-flex items-center gap-2 rounded-lg bg-brand-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            Book a Demo
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="rounded-lg border-2 border-brand-primary px-8 py-3.5 text-base font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            See How It Works
          </a>
        </div>
      </div>

      <div className="hero-stagger hero-stagger-4 relative z-10 mx-auto mt-12 max-w-6xl px-6 md:mt-16">
        <BrowserFrame>
          <Image
            src="/screenshots/dispatch-board-usc.png"
            alt="RideOps dispatch dashboard showing live KPI cards, driver schedules, and ride status grid"
            width={1920}
            height={1080}
            quality={90}
            priority
            className="h-auto w-full"
          />
        </BrowserFrame>
      </div>
    </section>
  );
}
