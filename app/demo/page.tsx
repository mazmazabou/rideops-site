import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Try the RideOps demo — see real-time dispatch, ride tracking, and campus transportation management in action.",
};

export default function DemoPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-light/40 to-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl font-heading text-brand-charcoal md:text-5xl">
              See RideOps in Action
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Explore the live demo below to experience how RideOps streamlines
              campus transportation — from ride requests to dispatch to delivery.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll>
            {/* Browser chrome frame */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-100 px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 rounded-md bg-white px-4 py-1 text-center text-sm text-gray-500">
                  rideops-app-production.up.railway.app
                </div>
              </div>
              {/* Iframe */}
              <iframe
                src="https://rideops-app-production.up.railway.app/demo.html"
                title="RideOps Demo"
                className="h-[600px] w-full border-0 md:h-[700px]"
                loading="lazy"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Want a personalized walkthrough tailored to your campus?
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-block text-base font-semibold text-brand-primary hover:underline"
              >
                Schedule a live demo &rarr;
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
