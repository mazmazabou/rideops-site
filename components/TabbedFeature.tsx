"use client";

import Image from "next/image";
import { useState } from "react";
import BrowserFrame from "./BrowserFrame";

interface Tab {
  label: string;
  src: string;
  alt: string;
}

interface TabbedFeatureProps {
  id?: string;
  title: string;
  subtitle: string;
  tabs: Tab[];
  bgColor?: string;
}

export default function TabbedFeature({
  id,
  title,
  subtitle,
  tabs,
  bgColor,
}: TabbedFeatureProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id={id} className={`fade-section py-20 md:py-28 ${bgColor ?? ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading text-brand-charcoal md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                  i === activeTab
                    ? "bg-brand-primary text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-brand-primary hover:text-brand-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-5xl">
          <BrowserFrame>
            <div className="relative">
              {tabs.map((tab, i) => (
                <Image
                  key={tab.src}
                  src={tab.src}
                  alt={tab.alt}
                  width={1920}
                  height={1080}
                  quality={80}
                  className={`h-auto w-full transition-opacity duration-300 ${
                    i === activeTab ? "opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
                  }`}
                />
              ))}
            </div>
          </BrowserFrame>
        </div>
      </div>
    </section>
  );
}
