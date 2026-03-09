import Image from "next/image";
import { CircleCheck } from "lucide-react";
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
  features?: string[];
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
  features,
}: FeatureSectionProps) {
  const image = (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
      quality={80}
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
      <p className="text-lg text-gray-600 mt-4 leading-relaxed">
        {body}
      </p>
      {features && features.length > 0 && (
        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CircleCheck size={20} className="mt-0.5 shrink-0 text-brand-primary" />
              <span className="text-base text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      )}
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
