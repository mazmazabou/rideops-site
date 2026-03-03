import Image from "next/image";
import BrowserFrame from "./BrowserFrame";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand-light/40 to-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl leading-tight font-heading text-brand-charcoal md:text-5xl lg:text-6xl">
          Campus transportation ops, finally under control.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          RideOps replaces email chains, spreadsheets, and guesswork with a
          real-time dispatch platform built for university accessibility
          programs.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@ride-ops.com"
            className="rounded-lg bg-brand-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Book a Demo
          </a>
          <a
            href="#features"
            className="rounded-lg border-2 border-brand-primary px-8 py-3.5 text-base font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
          >
            See How It Works
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-6 md:mt-16">
        <BrowserFrame>
          <Image
            src="/screenshots/dispatch-dashboard.png"
            alt="RideOps dispatch dashboard showing live KPI cards, driver schedules, and ride status grid"
            width={1440}
            height={900}
            quality={90}
            priority
            className="h-auto w-full"
          />
        </BrowserFrame>
      </div>
    </section>
  );
}
