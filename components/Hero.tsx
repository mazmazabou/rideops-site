"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-brand-light/40 to-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimateOnScroll>
          <h1 className="text-4xl leading-tight font-heading text-brand-charcoal md:text-5xl lg:text-6xl">
            {headline}
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
            {subheadline}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryCTA.href}
              className="rounded-lg bg-brand-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              {primaryCTA.label}
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="rounded-lg border-2 border-brand-primary px-8 py-3.5 text-base font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
