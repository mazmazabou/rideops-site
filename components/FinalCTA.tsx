export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="fade-section bg-gradient-to-br from-brand-charcoal to-[#2a2a4e] py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-heading text-white md:text-4xl">
          Ready to modernize your campus transportation?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
          RideOps is serving university accessibility programs across California.
          Book a 20-minute demo to see how it works for your campus.
        </p>
        <a
          href="/demo"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 font-semibold text-brand-charcoal transition-colors hover:bg-gray-100"
        >
          Book a Demo
        </a>
        <p className="mt-4 text-sm text-gray-400">
          Questions?{" "}
          <a
            href="mailto:hello@ride-ops.com"
            className="transition-colors hover:text-white"
          >
            hello@ride-ops.com
          </a>
        </p>
      </div>
    </section>
  );
}
