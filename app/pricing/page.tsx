import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PricingCard from "@/components/PricingCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for campus transportation. Choose the plan that fits your university.",
};

const tiers = [
  {
    name: "Starter",
    description: "For small campuses getting started with modern dispatch.",
    features: [
      "Up to 3 drivers",
      "Core dispatch & ride management",
      "Rider request portal",
      "Email support",
    ],
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing programs that need the full toolkit.",
    features: [
      "Unlimited drivers",
      "Analytics & reporting dashboard",
      "Recurring rides & automated scheduling",
      "White-label branding",
      "Priority support",
      "Email notifications",
    ],
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For multi-campus operations with custom needs.",
    features: [
      "Everything in Professional",
      "Multi-campus support",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Onboarding & training",
    ],
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        headline="Simple Pricing, Built for Campus"
        subheadline="Every campus is different. Choose a starting point, and we'll tailor a plan that works for you."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <PricingCard
                key={tier.name}
                name={tier.name}
                description={tier.description}
                features={tier.features}
                ctaLabel={tier.ctaLabel}
                ctaHref={tier.ctaHref}
                highlighted={tier.highlighted}
                delay={i * 0.1}
              />
            ))}
          </div>
          <AnimateOnScroll>
            <p className="mt-12 text-center text-gray-500">
              Every campus is different. Contact us for a custom quote tailored
              to your institution&apos;s needs.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
