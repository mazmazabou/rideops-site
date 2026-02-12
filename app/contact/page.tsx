import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the RideOps team. Request a demo, ask questions, or get a custom quote for your campus.",
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateOnScroll>
          <h1 className="text-center text-4xl font-heading text-brand-charcoal md:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-600">
            Have a question, want a demo, or ready to get started? We&apos;d
            love to hear from you.
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {/* Form */}
          <div className="md:col-span-2">
            <AnimateOnScroll direction="left">
              <ContactForm />
            </AnimateOnScroll>
          </div>

          {/* Sidebar */}
          <div>
            <AnimateOnScroll direction="right" delay={0.15}>
              <div className="rounded-2xl bg-gray-50 p-8">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" />
                  <div>
                    <h3 className="font-semibold text-brand-charcoal">Email</h3>
                    <a
                      href="mailto:hello@ride-ops.com"
                      className="text-sm text-brand-primary hover:underline"
                    >
                      hello@ride-ops.com
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" />
                  <div>
                    <h3 className="font-semibold text-brand-charcoal">
                      Response Time
                    </h3>
                    <p className="text-sm text-gray-600">
                      We typically respond within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
