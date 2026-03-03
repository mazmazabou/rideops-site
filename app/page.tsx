import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import FeatureSection from "@/components/FeatureSection";
import ThemeShowcase from "@/components/ThemeShowcase";
import FinalCTA from "@/components/FinalCTA";
import RiderCarousel from "@/components/RiderCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />

      {/* Feature: Rider Carousel */}
      <RiderCarousel />

      {/* Feature: Analytics */}
      <FeatureSection
        id="analytics"
        headline="Know what's happening before anyone asks"
        body="Customizable dashboards with drag-and-drop widgets. Ride volume, completion rates, peak hours, no-show tracking — all filterable by academic term. Export to Excel when leadership wants a report."
        imageSrc="/screenshots/analytics-dashboard.png"
        imageAlt="RideOps analytics dashboard with customizable widgets showing ride volume and completion rates"
        imageWidth={1440}
        imageHeight={900}
        side="right"
        frameType="browser"
      />

      {/* Feature: Hotspots */}
      <FeatureSection
        headline="Find the patterns your staff already suspects"
        body="Top pickup and dropoff locations, busiest routes, demand heatmaps by day and hour. Stop guessing which buildings need coverage — the data shows you."
        imageSrc="/screenshots/analytics-hotspots-v2.png"
        imageAlt="RideOps hotspot analytics showing top pickup and dropoff locations with demand patterns"
        imageWidth={1440}
        imageHeight={900}
        side="left"
        frameType="browser"
        bgColor="bg-gray-50"
      />

      {/* Feature: Reports */}
      <FeatureSection
        id="features"
        headline="Reports that write themselves"
        body="Export 8-sheet Excel workbooks with one click — summary, daily volume, routes, driver performance, rider analysis, fleet, shift coverage, and peak hours. Compare semesters side-by-side to spot trends before your next budget meeting."
        imageSrc="/screenshots/analytics-reports.png"
        imageAlt="RideOps analytics reports showing exportable Excel workbooks with multi-sheet data analysis"
        imageWidth={1440}
        imageHeight={900}
        side="right"
        frameType="browser"
      />

      {/* Theme Showcase */}
      <ThemeShowcase />

      {/* Feature: Rides Management */}
      <FeatureSection
        headline="Every ride, every status, every driver"
        body="Filter by status, search by rider, export to CSV. Full audit trail from request to completion. Bulk operations for end-of-day cleanup."
        imageSrc="/screenshots/rides-table.png"
        imageAlt="RideOps rides management table with status filters, search, and export capabilities"
        imageWidth={1440}
        imageHeight={900}
        side="left"
        frameType="browser"
        bgColor="bg-gray-50"
      />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
