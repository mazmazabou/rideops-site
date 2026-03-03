export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl text-brand-charcoal md:text-4xl">
          Ready to modernize your campus transportation?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
          RideOps is currently serving university accessibility programs across
          California. Book a 20-minute demo to see how it works for your campus.
        </p>
        <a
          href="mailto:hello@ride-ops.com"
          className="mt-8 inline-block rounded-lg bg-brand-primary px-8 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Book a Demo
        </a>
        <p className="mt-4 text-sm text-gray-500">
          Questions?{" "}
          <a
            href="mailto:hello@ride-ops.com"
            className="transition-colors hover:text-brand-primary"
          >
            hello@ride-ops.com
          </a>
        </p>
      </div>
    </section>
  );
}
