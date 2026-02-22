import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import DemoGallery from "@/components/DemoGallery";
import { Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Try the RideOps demo — see real-time dispatch, ride tracking, and campus transportation management in action.",
};

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-light/40 to-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl font-heading text-brand-charcoal md:text-5xl">
              See RideOps in Action
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Browse screenshots from every role in the platform — office
              dispatch, driver mobile app, and rider booking experience.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll>
            <DemoGallery />
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

      {/* Video Walkthrough Placeholder */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="text-3xl font-heading text-brand-charcoal">
                Video Walkthrough
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-600">
                A narrated tour of the entire platform is coming soon.
              </p>
            </div>

            <div className="mt-10 flex aspect-video items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-white">
              <div className="text-center">
                <Play className="mx-auto h-12 w-12 text-gray-300" />
                <p className="mt-3 text-sm font-medium text-gray-400">
                  Coming Soon
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
