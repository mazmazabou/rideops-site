import Image from "next/image";
import { Monitor, Smartphone, MapPin } from "lucide-react";
import BrowserFrame from "./BrowserFrame";

const personas = [
  {
    title: "Operations",
    icon: Monitor,
    description:
      "Real-time dispatch board, ride management, analytics, and staff scheduling.",
    screenshot: "/screenshots/dispatch-board-usc.png",
    alt: "RideOps dispatch board for operations coordinators",
    frame: "browser" as const,
    width: 1920,
    height: 1080,
  },
  {
    title: "Drivers",
    icon: Smartphone,
    description:
      "Clock in, claim rides, navigate to pickups, and mark completions from any phone.",
    screenshot: "/screenshots/driver-grace-timer.png",
    alt: "RideOps driver mobile app showing grace timer",
    frame: "phone" as const,
    width: 390,
    height: 844,
  },
  {
    title: "Riders",
    icon: MapPin,
    description:
      "Book accessible transportation, track your driver, and manage your rides in three taps.",
    screenshot: "/screenshots/rider-myrides.png",
    alt: "RideOps rider My Rides screen showing active ride status",
    frame: "phone" as const,
    width: 390,
    height: 844,
  },
];

export default function PersonaCards() {
  return (
    <section className="fade-section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading text-brand-charcoal md:text-4xl">
            One platform, three apps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600" style={{ lineHeight: 1.7 }}>
            Coordinators dispatch from the web. Drivers manage rides on their
            phone. Riders book in three taps. Everyone stays in sync.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {personas.map((persona) => {
            const Icon = persona.icon;
            return (
              <div
                key={persona.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light">
                    <Icon size={20} className="text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-charcoal">
                    {persona.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {persona.description}
                </p>
                <div className="mt-4 max-h-[240px] overflow-hidden rounded-lg">
                  {persona.frame === "browser" ? (
                    <BrowserFrame>
                      <Image
                        src={persona.screenshot}
                        alt={persona.alt}
                        width={persona.width}
                        height={persona.height}
                        quality={90}
                        className="h-auto w-full"
                      />
                    </BrowserFrame>
                  ) : (
                    <div className="mx-auto max-w-[140px] overflow-hidden rounded-2xl border-[4px] border-gray-800 bg-gray-800">
                      <Image
                        src={persona.screenshot}
                        alt={persona.alt}
                        width={persona.width}
                        height={persona.height}
                        quality={90}
                        className="h-auto w-full rounded-xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
