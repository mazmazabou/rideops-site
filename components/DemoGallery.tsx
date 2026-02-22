"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Smartphone, User, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Screenshot {
  src: string;
  caption: string;
}

const tabs = [
  {
    key: "office",
    label: "Office Dashboard",
    icon: Monitor,
    layout: "desktop" as const,
    hero: { src: "/demo/18_office_hero_1280.png", caption: "Office dashboard overview — real-time ride status at a glance" },
    screenshots: [
      { src: "/demo/01_login_desktop.png", caption: "Desktop login screen" },
      { src: "/demo/03_office_dispatch.png", caption: "Live dispatch board with ride assignments" },
      { src: "/demo/04_office_rides.png", caption: "Ride management — search, filter, and track all rides" },
      { src: "/demo/05_office_staff.png", caption: "Staff directory and role management" },
      { src: "/demo/06_office_fleet.png", caption: "Fleet overview with vehicle status" },
      { src: "/demo/07_office_analytics.png", caption: "Analytics dashboard with ride metrics" },
      { src: "/demo/08_office_settings.png", caption: "System settings and configuration" },
      { src: "/demo/09_office_collapsed_sidebar.png", caption: "Compact sidebar for a wider workspace" },
    ],
  },
  {
    key: "driver",
    label: "Driver App",
    icon: Smartphone,
    layout: "mobile" as const,
    screenshots: [
      { src: "/demo/02_login_mobile.png", caption: "Mobile login screen" },
      { src: "/demo/10_driver_home.png", caption: "Driver home — upcoming rides and quick actions" },
      { src: "/demo/11_driver_my_rides.png", caption: "My rides list with status indicators" },
      { src: "/demo/12_driver_account.png", caption: "Driver account and profile settings" },
    ],
  },
  {
    key: "rider",
    label: "Rider App",
    icon: User,
    layout: "mobile" as const,
    screenshots: [
      { src: "/demo/13_rider_my_rides.png", caption: "My rides — upcoming and past bookings" },
      { src: "/demo/14_rider_book_step1.png", caption: "Step 1: Select pickup location" },
      { src: "/demo/15_rider_book_step2.png", caption: "Step 2: Choose date and time" },
      { src: "/demo/16_rider_book_step3.png", caption: "Step 3: Confirm ride details" },
      { src: "/demo/17_rider_history.png", caption: "Ride history with trip details" },
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function BrowserChrome({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 shadow-lg ${className ?? ""}`}>
      <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-100 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 rounded-md bg-white px-3 py-0.5 text-center text-xs text-gray-400">
          app.ride-ops.com
        </div>
      </div>
      {children}
    </div>
  );
}

function PhoneMockup({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-[220px] ${className ?? ""}`}>
      <div className="overflow-hidden rounded-[2rem] border-[3px] border-gray-800 bg-gray-800 shadow-lg">
        {/* Notch */}
        <div className="flex justify-center bg-gray-800 py-1.5">
          <div className="h-4 w-20 rounded-full bg-gray-900" />
        </div>
        <div className="overflow-hidden bg-white">{children}</div>
        {/* Home bar */}
        <div className="flex justify-center bg-gray-800 py-2">
          <div className="h-1 w-16 rounded-full bg-gray-600" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Lightbox                                                           */
/* ------------------------------------------------------------------ */

function Lightbox({
  screenshots,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  screenshots: Screenshot[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const shot = screenshots[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white"
          aria-label="Close lightbox"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src={shot.src}
            alt={shot.caption}
            width={1280}
            height={800}
            className="h-auto max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
          />
        </div>

        {/* Caption */}
        <p className="mt-3 text-center text-sm text-white/80">
          {shot.caption}
          <span className="ml-2 text-white/50">
            ({index + 1} / {screenshots.length})
          </span>
        </p>

        {/* Prev / Next */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Gallery Panels                                                     */
/* ------------------------------------------------------------------ */

function DesktopGallery({
  hero,
  screenshots,
  onOpen,
}: {
  hero: Screenshot;
  screenshots: Screenshot[];
  onOpen: (idx: number) => void;
}) {
  return (
    <div className="space-y-6">
      {/* Hero — full width */}
      <BrowserChrome className="cursor-pointer transition-shadow hover:shadow-xl">
        <div onClick={() => onOpen(0)}>
          <Image
            src={hero.src}
            alt={hero.caption}
            width={1280}
            height={800}
            className="w-full"
          />
        </div>
      </BrowserChrome>
      <p className="text-center text-sm text-gray-500">{hero.caption}</p>

      {/* 2-col grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {screenshots.map((shot, i) => (
          <div key={shot.src}>
            <BrowserChrome className="cursor-pointer transition-shadow hover:shadow-xl">
              <div onClick={() => onOpen(i + 1)}>
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  width={1280}
                  height={800}
                  className="w-full"
                />
              </div>
            </BrowserChrome>
            <p className="mt-2 text-center text-sm text-gray-500">{shot.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileGallery({
  screenshots,
  onOpen,
}: {
  screenshots: Screenshot[];
  onOpen: (idx: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
      {screenshots.map((shot, i) => (
        <div key={shot.src}>
          <PhoneMockup className="cursor-pointer transition-transform hover:scale-[1.02]">
            <div onClick={() => onOpen(i)}>
              <Image
                src={shot.src}
                alt={shot.caption}
                width={390}
                height={844}
                className="w-full"
              />
            </div>
          </PhoneMockup>
          <p className="mt-3 text-center text-xs text-gray-500">{shot.caption}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function DemoGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tab = tabs[activeTab];

  // Flatten all screenshots for the current tab into a single list (for lightbox nav)
  const allScreenshots: Screenshot[] =
    tab.layout === "desktop"
      ? [tab.hero, ...tab.screenshots]
      : [...tab.screenshots];

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevLightbox = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + allScreenshots.length) % allScreenshots.length : null,
    );
  const nextLightbox = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % allScreenshots.length : null,
    );

  return (
    <div>
      {/* Tab Bar */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-xl bg-gray-100 p-1.5">
          {tabs.map((t, i) => {
            const Icon = t.icon;
            const active = activeTab === i;
            return (
              <button
                key={t.key}
                onClick={() => {
                  setActiveTab(i);
                  setLightboxIndex(null);
                }}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-white text-brand-primary shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {tab.layout === "desktop" ? (
            <DesktopGallery
              hero={tab.hero}
              screenshots={[...tab.screenshots]}
              onOpen={openLightbox}
            />
          ) : (
            <MobileGallery screenshots={[...tab.screenshots]} onOpen={openLightbox} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            screenshots={allScreenshots}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevLightbox}
            onNext={nextLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
