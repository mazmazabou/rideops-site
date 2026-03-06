import Image from "next/image";
import { Clock, Radio, Timer } from "lucide-react";
import PhoneFrame from "./PhoneFrame";

const bullets = [
  {
    icon: Clock,
    text: "Clock in and out with one tap — shifts sync to the coordinator dashboard instantly",
  },
  {
    icon: Radio,
    text: "See upcoming rides, rider details, and direct contact info",
  },
  {
    icon: Timer,
    text: "Grace period timer tracks no-shows automatically — no paperwork",
  },
];

export default function DriverShowcase() {
  return (
    <section className="fade-section bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row lg:gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-heading text-brand-charcoal md:text-4xl">
              Drivers stay focused, not frustrated
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600" style={{ lineHeight: 1.7 }}>
              A purpose-built mobile app that keeps it simple.
            </p>
            <ul className="mt-8 space-y-5">
              {bullets.map((bullet) => {
                const Icon = bullet.icon;
                return (
                  <li key={bullet.text} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light">
                      <Icon size={20} className="text-brand-primary" />
                    </div>
                    <p className="text-base leading-relaxed text-gray-600">
                      {bullet.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-1 justify-center">
            <PhoneFrame className="w-[260px]">
              <Image
                src="/screenshots/driver-grace-timer.png"
                alt="RideOps driver app showing grace period countdown timer for no-show tracking"
                width={390}
                height={844}
                quality={90}
                className="h-auto w-full"
              />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
