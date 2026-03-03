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
    <section id="theming" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-brand-charcoal">
            Your campus, your brand
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto" style={{ lineHeight: 1.7 }}>
            Every university gets their own colors, terminology, and campus
            locations. Same platform underneath — completely different experience
            on top.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-14">
          {themes.map((theme) => (
            <div key={theme.label}>
              <BrowserFrame>
                <Image
                  src={theme.src}
                  alt={theme.alt}
                  width={1440}
                  height={900}
                  quality={90}
                  className="w-full h-auto"
                />
              </BrowserFrame>
              <p className="text-sm font-medium text-gray-500 mt-3 text-center">
                {theme.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
