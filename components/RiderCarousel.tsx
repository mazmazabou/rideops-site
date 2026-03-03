"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

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

function PhoneCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-[2.5rem] border-4 border-brand-charcoal bg-brand-charcoal shadow-xl">
      <div className="absolute top-0 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-brand-charcoal" />
      <div className="overflow-hidden rounded-[2.1rem]">
        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          quality={90}
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}

export default function RiderCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  // Auto-advance (shared for both desktop & mobile)
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (pausedRef.current) return;
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  // Sync mobile scroll when active changes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Only scroll if mobile layout is visible
    if (el.offsetParent === null) return;
    el.scrollTo({ left: active * el.offsetWidth, behavior: "smooth" });
  }, [active]);

  // Mobile: sync active from scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setActive(Math.min(idx, steps.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile: pause on touch
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

  const handleDesktopClick = (idx: number) => {
    if (idx === active) return;
    setActive(idx);
    pausedRef.current = false;
    resetTimer();
  };

  // Compute positions: left, center, right relative to active
  const getPosition = (idx: number): "center" | "left" | "right" => {
    if (idx === active) return "center";
    if (idx === (active + 1) % steps.length) return "right";
    return "left";
  };

  return (
    <section className="fade-section py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered text above carousel */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-brand-charcoal">
            Riders request in three taps
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed" style={{ lineHeight: 1.7 }}>
            A guided booking wizard walks riders through pickup, dropoff, date,
            and time. They track their ride status in real time and can cancel if
            plans change. No phone calls, no email chains.
          </p>
        </div>

        {/* Desktop: center-stage fan layout */}
        <div className="hidden md:flex items-center justify-center relative" style={{ height: 520 }}>
          {steps.map((step, idx) => {
            const pos = getPosition(idx);
            const isCenter = pos === "center";
            const isLeft = pos === "left";

            return (
              <div
                key={step.label}
                onClick={() => handleDesktopClick(idx)}
                className="absolute transition-all duration-300 ease-in-out"
                style={{
                  width: 260,
                  transform: isCenter
                    ? "translateX(0) scale(1)"
                    : isLeft
                    ? "translateX(-200px) scale(0.85)"
                    : "translateX(200px) scale(0.85)",
                  opacity: isCenter ? 1 : 0.6,
                  zIndex: isCenter ? 10 : 5,
                  cursor: isCenter ? "default" : "pointer",
                  filter: isCenter ? "none" : "brightness(0.95)",
                }}
              >
                <PhoneCard src={step.src} alt={step.alt} />
              </div>
            );
          })}
        </div>

        {/* Desktop: step label for center phone */}
        <p className="hidden md:block text-sm text-gray-500 text-center mt-4">
          {steps[active].label}
        </p>

        {/* Desktop: dot indicators */}
        <div className="hidden md:flex justify-center gap-2 mt-3">
          {steps.map((step, i) => (
            <button
              key={step.label}
              aria-label={`Go to step ${i + 1}`}
              onClick={() => handleDesktopClick(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === active ? "bg-brand-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Mobile: scroll-snap single phone */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {steps.map((step) => (
              <div
                key={step.label}
                className="snap-center shrink-0 w-full flex flex-col items-center px-8"
              >
                <div className="max-w-[280px] w-full">
                  <PhoneCard src={step.src} alt={step.alt} />
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">{step.label}</p>
              </div>
            ))}
          </div>

          {/* Mobile dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {steps.map((step, i) => (
              <button
                key={step.label}
                aria-label={`Go to step ${i + 1}`}
                onClick={() => {
                  setActive(i);
                  pausedRef.current = false;
                  resetTimer();
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === active ? "bg-brand-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
