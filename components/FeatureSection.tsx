import Image from "next/image";
import BrowserFrame from "./BrowserFrame";
import PhoneFrame from "./PhoneFrame";

interface FeatureSectionProps {
  id?: string;
  headline: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  side: "left" | "right";
  frameType: "browser" | "phone";
  bgColor?: string;
}

export default function FeatureSection({
  id,
  headline,
  body,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  side,
  frameType,
  bgColor,
}: FeatureSectionProps) {
  const image = (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
      quality={90}
      className="w-full h-auto"
    />
  );

  const imageContent =
    frameType === "browser" ? (
      <div className="flex-1">
        <BrowserFrame>{image}</BrowserFrame>
      </div>
    ) : (
      <div className="flex-1 flex items-center justify-center">
        <PhoneFrame className="max-w-[280px]">{image}</PhoneFrame>
      </div>
    );

  const textContent = (
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-heading text-brand-charcoal">
        {headline}
      </h2>
      <p className="text-lg text-gray-600 mt-4 leading-relaxed" style={{ lineHeight: 1.7 }}>
        {body}
      </p>
    </div>
  );

  return (
    <section id={id} className={`fade-section py-20 md:py-28 ${bgColor ?? ""}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex flex-col ${
            side === "left" ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-12 lg:gap-16`}
        >
          {imageContent}
          {textContent}
        </div>
      </div>
    </section>
  );
}
