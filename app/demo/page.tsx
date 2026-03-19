import type { Metadata } from "next";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Book a Demo — RideOps",
  description:
    "Schedule a 20-minute demo to see how RideOps modernizes campus transportation operations with real-time dispatch, rider booking, and analytics.",
  openGraph: {
    type: "website",
    title: "Book a Demo — RideOps",
    description:
      "Schedule a 20-minute demo to see how RideOps modernizes campus transportation operations with real-time dispatch, rider booking, and analytics.",
    url: "https://ride-ops.com/demo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Demo — RideOps",
    description:
      "Schedule a 20-minute demo to see how RideOps modernizes campus transportation operations with real-time dispatch, rider booking, and analytics.",
  },
};

export default function DemoPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="font-heading text-3xl text-brand-charcoal md:text-4xl">
          Book a Demo
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          See how RideOps can streamline your campus transportation program.
          Fill out the form below and we&apos;ll set up a 20-minute walkthrough.
        </p>

        <div className="mt-10">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
