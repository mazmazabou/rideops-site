import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";
import { Building2, Users, Palette, Smartphone, Send, Truck } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        headline="Campus Transportation, Modernized"
        subheadline="RideOps gives university transportation departments a single platform to dispatch rides, track vehicles in real time, and serve every rider on campus."
        primaryCTA={{ label: "Request a Demo", href: "/demo" }}
        secondaryCTA={{ label: "See Features", href: "/features" }}
      />

      {/* Value Props */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateOnScroll>
            <h2 className="text-center text-3xl font-heading text-brand-charcoal md:text-4xl">
              Why RideOps?
            </h2>
          </AnimateOnScroll>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Building2 className="h-6 w-6 text-brand-primary" />}
              title="Built for Campus"
              description="Purpose-built for university transportation departments — not a rideshare clone. RideOps understands your workflows."
              delay={0}
            />
            <FeatureCard
              icon={<Users className="h-6 w-6 text-brand-primary" />}
              title="Every Role, One Platform"
              description="Riders request, dispatchers manage, drivers deliver, and admins oversee — all from a single unified system."
              delay={0.1}
            />
            <FeatureCard
              icon={<Palette className="h-6 w-6 text-brand-primary" />}
              title="White-Label Ready"
              description="Your branding, your domain, your identity. RideOps powers the backend while your campus stays front and center."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateOnScroll>
            <h2 className="text-center text-3xl font-heading text-brand-charcoal md:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Three roles, one seamless flow — from ride request to drop-off.
            </p>
          </AnimateOnScroll>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <AnimateOnScroll delay={0}>
              <div className="relative rounded-2xl bg-white p-8 shadow-sm text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-xl font-bold text-white">
                  1
                </div>
                <Smartphone className="mx-auto mb-3 h-8 w-8 text-brand-primary" />
                <h3 className="text-xl font-heading text-brand-charcoal">Riders Request</h3>
                <p className="mt-2 text-gray-600">
                  Students and staff submit ride requests through a simple, accessible interface.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <div className="relative rounded-2xl bg-white p-8 shadow-sm text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-xl font-bold text-white">
                  2
                </div>
                <Send className="mx-auto mb-3 h-8 w-8 text-brand-primary" />
                <h3 className="text-xl font-heading text-brand-charcoal">Office Dispatches</h3>
                <p className="mt-2 text-gray-600">
                  Transportation coordinators review, assign, and optimize rides in real time.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <div className="relative rounded-2xl bg-white p-8 shadow-sm text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-xl font-bold text-white">
                  3
                </div>
                <Truck className="mx-auto mb-3 h-8 w-8 text-brand-primary" />
                <h3 className="text-xl font-heading text-brand-charcoal">Drivers Deliver</h3>
                <p className="mt-2 text-gray-600">
                  Drivers receive assignments, navigate routes, and confirm completions — all in-app.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-primary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-heading text-white md:text-4xl">
              Ready to modernize your campus transportation?
            </h2>
            <p className="mt-4 text-lg text-emerald-100">
              Join the universities already using RideOps to move their campuses forward.
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
