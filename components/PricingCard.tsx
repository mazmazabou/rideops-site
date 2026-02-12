"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

interface PricingCardProps {
  name: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  delay?: number;
}

export default function PricingCard({
  name,
  description,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <AnimateOnScroll delay={delay}>
      <div
        className={`flex h-full flex-col rounded-2xl border p-8 ${
          highlighted
            ? "border-brand-primary ring-2 ring-brand-primary/20 shadow-lg"
            : "border-gray-200 shadow-sm"
        }`}
      >
        {highlighted && (
          <span className="mb-4 inline-block w-fit rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white">
            Most Popular
          </span>
        )}
        <h3 className="text-2xl font-heading text-brand-charcoal">{name}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8">
          <Link
            href={ctaHref}
            className={`block w-full rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
              highlighted
                ? "bg-brand-primary text-white hover:bg-brand-dark"
                : "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
            }`}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
