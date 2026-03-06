export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <a href="#features" className="transition-colors hover:text-brand-primary">
            Features
          </a>
          <a href="#analytics" className="transition-colors hover:text-brand-primary">
            Analytics
          </a>
          <a href="#story" className="transition-colors hover:text-brand-primary">
            About
          </a>
          <a href="/demo" className="transition-colors hover:text-brand-primary">
            Book a Demo
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-gray-500">
            &copy; 2026 RideOps
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:hello@ride-ops.com"
              className="text-sm text-gray-500 transition-colors hover:text-brand-primary"
            >
              hello@ride-ops.com
            </a>
            <a
              href="https://app.ride-ops.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition-colors hover:text-brand-primary"
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
