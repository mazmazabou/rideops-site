import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="fade-section relative overflow-hidden bg-gradient-to-br from-brand-charcoal to-[#2a2a4e] py-24 md:py-32"
    >
      {/* Top transition line */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      {/* Centered blue glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37, 99, 235, 0.12), transparent)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-heading text-white md:text-4xl">
          Ready to modernize your campus transportation?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
          RideOps is serving university accessibility programs across California.
          Book a 20-minute demo to see how it works for your campus.
        </p>
        <a
          href="/demo"
          className="group mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-10 py-4 text-lg font-semibold text-brand-charcoal shadow-lg shadow-white/10 transition-all hover:bg-gray-50 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
        >
          Book a Demo
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </a>
        <p className="mt-4 text-sm text-gray-400">
          Questions?{" "}
          <a
            href="mailto:hello@ride-ops.com"
            className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal rounded-sm"
          >
            hello@ride-ops.com
          </a>
        </p>
      </div>
    </section>
  );
}
