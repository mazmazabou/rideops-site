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
          <p className="mt-4 text-lg leading-relaxed text-gray-600" style={{ lineHeight: 1.7 }}>
            {subtitle}
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
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
            <Image
              src={tabs[activeTab].src}
              alt={tabs[activeTab].alt}
              width={1920}
              height={1080}
              quality={90}
              className="h-auto w-full"
            />
          </BrowserFrame>
        </div>
      </div>
    </section>
  );
}
