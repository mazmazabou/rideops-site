import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Accessibility, Target, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about RideOps — built by a university transportation insider to modernize campus mobility.",
};

const values = [
  {
    icon: Accessibility,
    title: "Accessibility First",
    description:
      "Campus transportation exists to serve everyone. We design for inclusivity — ADA compliance, paratransit support, and equitable access for all riders.",
  },
  {
    icon: Target,
    title: "Operational Excellence",
    description:
      "Every wasted trip, missed ride, and manual workaround is a solvable problem. We build tools that make transportation offices run like clockwork.",
  },
  {
    icon: GraduationCap,
    title: "Campus-Native",
    description:
      "We don't bolt campus features onto a generic platform. RideOps is designed from the ground up for the unique rhythms and requirements of university life.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Founder Story */}
      <section className="bg-gradient-to-b from-brand-light/40 to-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateOnScroll>
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="relative flex-shrink-0">
                <img
                  src="/headshotAtUSC.png"
                  alt="Mazen Abouelela"
                  className="h-40 w-40 rounded-full object-cover"
                />
                <div className="absolute bottom-1 right-1 w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-white">
                  <img src="/logoWithBackground.png" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-heading text-brand-charcoal md:text-4xl">
                  Built by Someone Who Lived It
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  RideOps was created by{" "}
                  <strong className="text-brand-charcoal">
                    Mazen Abouelela
                  </strong>
                  , who worked inside a university transportation department and
                  saw the daily friction firsthand — paper logs, phone-tag
                  dispatching, and disconnected systems that failed riders and
                  staff alike.
                </p>
                <p className="mt-3 text-lg leading-relaxed text-gray-600">
                  Instead of waiting for a solution, Mazen built one. RideOps is
                  the platform he wished existed — purpose-built for campus
                  transportation from day one.
                </p>
                <a
                  href="https://www.linkedin.com/in/mazen-abouelela-88a559205/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-brand-primary hover:underline"
                >
                  Connect on LinkedIn &rarr;
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-heading text-brand-charcoal md:text-4xl">
              Our Mission
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              To make campus transportation accessible, efficient, and modern —
              so that every university can provide reliable, dignified mobility
              to the students, faculty, and staff who depend on it.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateOnScroll>
            <h2 className="text-center text-3xl font-heading text-brand-charcoal md:text-4xl">
              Our Values
            </h2>
          </AnimateOnScroll>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light">
                    <value.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-heading text-brand-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
