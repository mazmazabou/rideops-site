"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/features", label: "Features" },
  { href: "/demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" alt="RideOps" width={140} height={32} priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                pathname === link.href
                  ? "text-brand-primary"
                  : "text-brand-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demo"
            className="rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-brand-charcoal md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200/60 bg-white px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  pathname === link.href
                    ? "text-brand-primary"
                    : "text-brand-charcoal"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/demo"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-brand-primary px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
