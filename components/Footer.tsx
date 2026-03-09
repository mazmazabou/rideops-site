import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top row: logo + mini CTA */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logoWithoutBackground.png"
              alt="RideOps"
              width={24}
              height={24}
              quality={80}
              className="object-contain"
            />
            <span
              style={{
                fontWeight: 800,
                fontSize: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              <span style={{ color: "#2563EB" }}>Ride</span>
              <span style={{ color: "#1a1a2e" }}>Ops</span>
            </span>
          </div>
          <a
            href="/demo"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-md"
          >
            Ready to modernize? Book a demo
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Nav links */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
          <a href="/#features" className="rounded-md px-3 py-2 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
            Features
          </a>
          <a href="/#analytics" className="rounded-md px-3 py-2 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
            Analytics
          </a>
          <a href="/#story" className="rounded-md px-3 py-2 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
            About
          </a>
          <a href="/demo" className="rounded-md px-3 py-2 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
            Book a Demo
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-gray-500">
            &copy; 2026 RideOps
          </p>
          <div className="flex gap-2">
            <a
              href="mailto:hello@ride-ops.com"
              className="rounded-md px-3 py-2 text-sm text-gray-500 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              hello@ride-ops.com
            </a>
            <a
              href="https://www.linkedin.com/in/mazen-abouelela-88a559205/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 text-sm text-gray-500 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              LinkedIn
            </a>
            <a
              href="https://app.ride-ops.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 text-sm text-gray-500 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              Login
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          FERPA compliant &middot; SOC 2 ready &middot; No tracking cookies
        </p>
      </div>
    </footer>
  );
}
