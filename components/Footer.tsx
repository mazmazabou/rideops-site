import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Demo" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.svg"
              alt="RideOps"
              width={120}
              height={28}
              className="brightness-0 invert"
            />
            <p className="max-w-xs text-sm text-emerald-200/80">
              Modern campus transportation management for universities that move
              forward.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Navigation
            </h4>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-emerald-100/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Contact
            </h4>
            <a
              href="mailto:hello@ride-ops.com"
              className="text-sm text-emerald-100/80 transition-colors hover:text-white"
            >
              hello@ride-ops.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-800 pt-6 text-center text-sm text-emerald-200/60">
          &copy; {new Date().getFullYear()} RideOps. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
