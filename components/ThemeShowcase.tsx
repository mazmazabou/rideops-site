import Image from "next/image";
import BrowserFrame from "./BrowserFrame";

const themes = [
  {
    src: "/screenshots/theme-usc.png",
    alt: "RideOps themed for USC DART program",
    label: "USC DART",
  },
  {
    src: "/screenshots/theme-ucla.png",
    alt: "RideOps themed for UCLA BruinAccess program",
    label: "UCLA BruinAccess",
  },
  {
    src: "/screenshots/theme-stanford.png",
    alt: "RideOps themed for Stanford ATS program",
    label: "Stanford ATS",
  },
  {
    src: "/screenshots/theme-uci.png",
    alt: "RideOps themed for UCI AnteaterExpress program",
    label: "UCI AnteaterExpress",
  },
];

export default function ThemeShowcase() {
  return (
    <section
      id="theming"
      className="fade-section py-24 md:py-36"
      style={{ backgroundColor: "#F0F5FA" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-heading text-brand-charcoal md:text-4xl">
            Your campus, your brand
          </h2>
          <p
            className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-600"
            style={{ lineHeight: 1.7 }}
          >
            Every university gets their own colors, logo, and program name. Same
            platform underneath — completely different experience on top.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {themes.map((theme) => (
            <div key={theme.label}>
              <BrowserFrame>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={theme.src}
                    alt={theme.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={90}
                    className="object-cover object-top"
                  />
                </div>
              </BrowserFrame>
              <p className="mt-3 text-center text-sm font-medium text-gray-500">
                {theme.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
