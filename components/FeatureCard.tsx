"use client";

import { ReactNode } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <AnimateOnScroll delay={delay}>
      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-heading text-brand-charcoal">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </AnimateOnScroll>
  );
}
