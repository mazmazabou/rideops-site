import Image from "next/image";
import BrowserFrame from "./BrowserFrame";

const cards = [
  {
    title: "Staff & Shifts",
    description:
      "Week-view calendar with per-driver color coding. Clock-in status at a glance.",
    screenshot: "/screenshots/staff-calendar-stanford.png",
    alt: "RideOps staff calendar with weekly shift scheduling and color-coded drivers",
  },
  {
    title: "Fleet Management",
    description:
      "Vehicle cards with maintenance tracking, mileage logs, and overdue alerts.",
    screenshot: "/screenshots/fleet-drawer-uci.png",
    alt: "RideOps fleet management showing vehicle cards with maintenance status",
  },
];

export default function BentoGrid() {
  return (
    <section className="fade-section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading text-brand-charcoal md:text-4xl">
            Schedule drivers, track vehicles
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-charcoal">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>
              <div className="px-6 pb-6">
                <BrowserFrame>
                  <Image
                    src={card.screenshot}
                    alt={card.alt}
                    width={1920}
                    height={1080}
                    quality={90}
                    className="h-auto w-full"
                  />
                </BrowserFrame>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
