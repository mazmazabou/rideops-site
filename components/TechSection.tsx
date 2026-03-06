import { Shield, Key, Plug, Database, BarChart3, Zap } from "lucide-react";

const cards = [
  {
    icon: Shield,
    title: "FERPA Compliant",
    description:
      "Bcrypt hashing, server-side sessions, RBAC, parameterized SQL, and audit trails on every ride event.",
  },
  {
    icon: Key,
    title: "SSO & Identity",
    description:
      "Shibboleth, SAML 2.0, Duo — whatever your IT team runs, we integrate.",
  },
  {
    icon: Plug,
    title: "API & Webhooks",
    description:
      "Connect to budget forecasting, HR platforms, and student information systems. Webhooks fire on every ride lifecycle event.",
  },
  {
    icon: Database,
    title: "Campus Isolation",
    description:
      "Multi-tenant architecture. Each university's data is completely isolated with zero cross-contamination.",
  },
  {
    icon: BarChart3,
    title: "Full Data Export",
    description:
      "8-sheet Excel reports, CSV exports for rides, drivers, and riders. Your data, your way.",
  },
  {
    icon: Zap,
    title: "Real-Time Sync",
    description:
      "WebSocket-powered updates. When a driver claims a ride, every screen updates instantly.",
  },
];

export default function TechSection() {
  return (
    <section className="fade-section bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading text-brand-charcoal md:text-4xl">
            Enterprise-ready from day one
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600" style={{ lineHeight: 1.7 }}>
            Built with the security and integration standards university IT
            teams expect.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light">
                  <Icon size={20} className="text-brand-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-brand-charcoal">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
