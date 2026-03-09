"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import PhoneFrame from "./PhoneFrame";

const steps = [
  {
    src: "/screenshots/rider-booking-where.png",
    alt: "Rider booking step 1: choose pickup and dropoff locations",
    label: "1. Choose pickup & dropoff",
  },
  {
    src: "/screenshots/rider-booking-when.png",
    alt: "Rider booking step 2: pick date and time",
    label: "2. Pick date & time",
  },
  {
    src: "/screenshots/rider-step3-confirm.png",
    alt: "Rider booking step 3: confirm ride request",
    label: "3. Confirm & go",
  },
];

export default function RiderCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (pausedRef.current) return;
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (el.offsetParent === null) return;
    el.scrollTo({ left: active * el.offsetWidth, behavior: "smooth" });
  }, [active]);

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

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const pause = () => {
      pausedRef.current = true;
    };
    const resume = () => {
      setTimeout(() => {
        pausedRef.current = false;
      }, 4000);
    };
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    return () => {
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="fade-section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-heading text-brand-charcoal md:text-4xl">
            Riders book in three taps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600" style={{ lineHeight: 1.7 }}>
            A guided wizard walks riders through pickup, dropoff, and
            scheduling. Real-time status updates and direct driver messaging. No
            phone calls, no email chains.
          </p>
        </div>

        {/* Desktop: 3 static phones side-by-side */}
        <div className="hidden md:flex items-end justify-center gap-10">
          {steps.map((step, idx) => (
            <div key={step.label} className="flex flex-col items-center">
              <div
                className="transition-all duration-300"
                style={{
                  width: 220,
                  boxShadow:
                    idx === active
                      ? "0 0 0 3px rgba(37, 99, 235, 0.4)"
                      : "none",
                  borderRadius: "2.5rem",
                }}
              >
                <PhoneFrame>
                  <Image
                    src={step.src}
                    alt={step.alt}
                    width={390}
                    height={844}
                    quality={90}
                    className="h-auto w-full"
                  />
                </PhoneFrame>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-500">
                {step.label}
              </p>
            </div>
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
                className="flex w-full shrink-0 snap-center flex-col items-center px-8"
              >
                <div className="w-full max-w-[280px]">
                  <PhoneFrame>
                    <Image
                      src={step.src}
                      alt={step.alt}
                      width={390}
                      height={844}
                      quality={90}
                      className="h-auto w-full"
                    />
                  </PhoneFrame>
                </div>
                <p className="mt-3 text-center text-sm text-gray-500">
                  {step.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {steps.map((step, i) => (
              <button
                key={step.label}
                aria-label={`Go to step ${i + 1}`}
                onClick={() => {
                  setActive(i);
                  pausedRef.current = false;
                  resetTimer();
                }}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
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
