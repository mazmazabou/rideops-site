"use client";

import Image from "next/image";
import PhoneFrame from "./PhoneFrame";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    src: "/screenshots/rider-step1-where.png",
    alt: "Rider booking step 1: choose pickup and dropoff locations",
    label: "Choose pickup & dropoff",
  },
  {
    src: "/screenshots/rider-step2-when.png",
    alt: "Rider booking step 2: pick date and time",
    label: "Pick date & time",
  },
  {
    src: "/screenshots/rider-step3-confirm.png",
    alt: "Rider booking step 3: confirm ride request",
    label: "Confirm & go",
  },
];

export default function RiderCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  // Sync dot indicator with scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const width = el.offsetWidth;
      const idx = Math.round(scrollLeft / width);
      setActive(Math.min(idx, steps.length - 1));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-advance on mobile every 4s
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      // Only auto-advance on mobile (scroll container visible)
      if (el.scrollWidth <= el.offsetWidth) return;
      if (pausedRef.current) return;

      const next = (active + 1) % steps.length;
      el.scrollTo({ left: next * el.offsetWidth, behavior: "smooth" });
    }, 4000);

    return () => clearInterval(interval);
  }, [active]);

  // Pause on touch
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const pause = () => { pausedRef.current = true; };
    const resume = () => { setTimeout(() => { pausedRef.current = false; }, 4000); };

    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    return () => {
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-heading text-brand-charcoal">
              Riders request in three taps
            </h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed" style={{ lineHeight: 1.7 }}>
              A guided booking wizard walks riders through pickup, dropoff, date,
              and time. They track their ride status in real time and can cancel if
              plans change. No phone calls, no email chains.
            </p>
          </div>

          {/* Phones — desktop: 3 side-by-side, mobile: scroll-snap */}
          <div className="flex-1 w-full">
            {/* Desktop: 3 phones in a row */}
            <div className="hidden md:flex items-end justify-center gap-6 lg:gap-8">
              {steps.map((step) => (
                <div key={step.label} className="flex flex-col items-center">
                  <PhoneFrame className="max-w-[200px] lg:max-w-[220px]">
                    <Image
                      src={step.src}
                      alt={step.alt}
                      width={390}
                      height={844}
                      quality={90}
                      className="w-full h-auto"
                    />
                  </PhoneFrame>
                  <p className="text-sm text-gray-500 mt-3 text-center">{step.label}</p>
                </div>
              ))}
            </div>

            {/* Mobile: scroll-snap carousel */}
            <div className="md:hidden">
              <div
                ref={scrollRef}
                className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {steps.map((step) => (
                  <div
                    key={step.label}
                    className="snap-center shrink-0 w-full flex flex-col items-center px-4"
                  >
                    <PhoneFrame className="max-w-[260px]">
                      <Image
                        src={step.src}
                        alt={step.alt}
                        width={390}
                        height={844}
                        quality={90}
                        className="w-full h-auto"
                      />
                    </PhoneFrame>
                    <p className="text-sm text-gray-500 mt-3 text-center">{step.label}</p>
                  </div>
                ))}
              </div>

              {/* Dot indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {steps.map((step, i) => (
                  <button
                    key={step.label}
                    aria-label={`Go to step ${i + 1}`}
                    onClick={() => {
                      scrollRef.current?.scrollTo({
                        left: i * (scrollRef.current?.offsetWidth ?? 0),
                        behavior: "smooth",
                      });
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === active ? "bg-brand-primary" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
