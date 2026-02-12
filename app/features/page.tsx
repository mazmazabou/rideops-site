import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";
import {
  Radio,
  Users,
  Palette,
  CalendarClock,
  BarChart3,
  Mail,
  ShieldAlert,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore RideOps features: real-time dispatch, multi-role access, white-label branding, automated scheduling, analytics, and more.",
};

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Radio,
    title: "Real-Time Dispatch & Ride Tracking",
    description:
      "See every vehicle on the map in real time. Dispatchers assign rides instantly, riders track their shuttle live, and drivers follow optimized routes — all updated second-by-second.",
  },
  {
    icon: Users,
    title: "Multi-Role Access",
    description:
      "One platform, every stakeholder. Riders request rides, dispatchers coordinate, drivers execute, and administrators oversee — each with a tailored interface and the right level of control.",
  },
  {
    icon: Palette,
    title: "White-Label & Configurable",
    description:
      "Make it yours. Custom branding, configurable ride types, adjustable service areas, and flexible scheduling rules let you tailor RideOps to your campus identity and policies.",
  },
  {
    icon: CalendarClock,
    title: "Automated Scheduling & Recurring Rides",
    description:
      "Set up recurring rides for regular routes or individual needs. RideOps automates the scheduling process so your team spends less time on logistics and more time on service.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting Dashboard",
    description:
      "Make data-driven decisions with built-in analytics. Track ride volume, driver utilization, peak hours, no-show rates, and more — exportable and ready for stakeholder reports.",
  },
  {
    icon: Mail,
    title: "Email Notifications",
    description:
      "Keep everyone informed automatically. Riders get booking confirmations, drivers receive assignments, and coordinators get alerts — all without manual follow-up.",
  },
  {
    icon: ShieldAlert,
    title: "No-Show Tracking & Enforcement",
    description:
      "Reduce wasted trips with built-in no-show tracking. Flag repeat offenders, enforce policies automatically, and keep your fleet running efficiently.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Hero
        headline="Everything Your Transportation Office Needs"
        subheadline="RideOps is purpose-built for campus transportation — with tools for every role and every workflow."
        primaryCTA={{ label: "Request a Demo", href: "/demo" }}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-24">
            {features.map((feature, i) => {
              const isReversed = i % 2 === 1;
              return (
                <AnimateOnScroll
                  key={feature.title}
                  direction={isReversed ? "right" : "left"}
                >
                  <div
                    className={`flex flex-col items-center gap-8 md:flex-row ${
                      isReversed ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-light">
                      <feature.icon className="h-12 w-12 text-brand-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-heading text-brand-charcoal md:text-3xl">
                        {feature.title}
                      </h2>
                      <p className="mt-3 text-lg leading-relaxed text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-heading text-white md:text-4xl">
              See it in action
            </h2>
            <p className="mt-4 text-lg text-emerald-100">
              Schedule a personalized demo and see how RideOps fits your campus.
            </p>
            <Link
              href="/demo"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-brand-primary transition-colors hover:bg-emerald-50"
            >
              Request a Demo
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
