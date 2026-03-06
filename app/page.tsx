import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import PersonaCards from "@/components/PersonaCards";
import TabbedFeature from "@/components/TabbedFeature";
import RiderCarousel from "@/components/RiderCarousel";
import DriverShowcase from "@/components/DriverShowcase";
import FeatureSection from "@/components/FeatureSection";
import BentoGrid from "@/components/BentoGrid";
import ThemeShowcase from "@/components/ThemeShowcase";
import OriginStory from "@/components/OriginStory";
import TechSection from "@/components/TechSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Social Proof */}
      <SocialProof />

      {/* 3. Three Personas */}
      <PersonaCards />

      {/* 4. Dispatch & Ride Management */}
      <TabbedFeature
        id="features"
        title="Your entire operation, one screen"
        subtitle="Approve pending rides, monitor driver schedules, and track every status change in real time. No more switching between spreadsheets and group texts."
        tabs={[
          {
            label: "Dispatch Board",
            src: "/screenshots/dispatch-board-ucla.png",
            alt: "RideOps dispatch board showing real-time ride assignments and driver status",
          },
          {
            label: "Ride Management",
            src: "/screenshots/rides-filtered-ucla.png",
            alt: "RideOps ride management table with status filters and search",
          },
          {
            label: "Ride Details",
            src: "/screenshots/ride-details-usc.png",
            alt: "RideOps ride detail view with full audit trail and status history",
          },
        ]}
        bgColor="bg-gray-50"
      />

      {/* 5. Rider Booking Flow */}
      <RiderCarousel />

      {/* 6. Driver Experience */}
      <DriverShowcase />

      {/* 7. Analytics Dashboard */}
      <FeatureSection
        id="analytics"
        headline="Know what's happening before anyone asks"
        body="Drag-and-drop widget dashboards with everything from ride volume to driver punctuality. Filter by academic term, compare semesters, and spot trends before your next budget meeting."
        imageSrc="/screenshots/analytics-dashboard-usc.png"
        imageAlt="RideOps analytics dashboard with customizable widgets showing ride volume and completion rates"
        imageWidth={1920}
        imageHeight={1080}
        side="left"
        frameType="browser"
        features={[
          "Ride volume, completion rates, and peak hours",
          "Driver leaderboard and shift coverage",
          "Filterable by term — Spring, Summer, Fall, Winter",
        ]}
      />

      {/* 8. Analytics Deep-Dive */}
      <TabbedFeature
        title="Five analytics views, zero guesswork"
        subtitle="Dashboard, Hotspots, Milestones, Attendance, and Reports — each answers a different question your team is already asking."
        tabs={[
          {
            label: "Hotspots",
            src: "/screenshots/analytics-hotspots.png",
            alt: "RideOps hotspot analytics showing top pickup and dropoff locations",
          },
          {
            label: "Attendance",
            src: "/screenshots/analytics-attendance.png",
            alt: "RideOps attendance analytics showing driver shift coverage",
          },
          {
            label: "Reports",
            src: "/screenshots/analytics-reports-stanford.png",
            alt: "RideOps reports view with exportable multi-sheet Excel workbooks",
          },
        ]}
        bgColor="bg-gray-50"
      />

      {/* 9. Staff & Fleet */}
      <BentoGrid />

      {/* 10. Theming Showcase */}
      <ThemeShowcase />

      {/* 11. Origin Story & Founder */}
      <OriginStory />

      {/* 12. Integration / Technical */}
      <TechSection />

      {/* 13. Final CTA */}
      <FinalCTA />
    </>
  );
}
