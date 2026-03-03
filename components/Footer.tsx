export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
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
    </footer>
  );
}
