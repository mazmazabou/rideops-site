import Image from "next/image";

const values = [
  "Accountability, not surveillance",
  "Built for universities, not rideshare",
  "Visibility without micromanagement",
];

export default function OriginStory() {
  return (
    <section id="story" className="fade-section py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Our Story
          </p>
          <h2 className="mt-4 text-3xl font-heading text-brand-charcoal md:text-4xl">
            Born at USC DART
          </h2>
        </div>

        <p className="mt-8 text-lg leading-relaxed text-gray-600">
          RideOps started at USC, where the DART program — Disabled Access to
          Road Transportation — moves students with disabilities across campus by
          golf cart. The program ran on a messy Google Calendar with ride details
          crammed into event titles, group chats for coordination, and guesswork
          for scheduling. Rides got missed. Drivers didn&apos;t know their schedules
          until the last minute. Managers couldn&apos;t answer basic questions without
          counting by hand.
        </p>

        <blockquote className="mt-8 border-l-4 border-brand-primary pl-6 text-xl italic text-gray-700">
          The problem wasn&apos;t the people — it was the tools.
        </blockquote>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {values.map((value) => (
            <span
              key={value}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600"
            >
              {value}
            </span>
          ))}
        </div>

        <hr className="my-16 border-gray-200" />

        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          <div className="shrink-0">
            <div className="h-80 w-64 overflow-hidden rounded-2xl">
              <Image
                src="/headshotAtUSC.png"
                alt="Mazen Abouelela, founder of RideOps, at USC"
                width={256}
                height={320}
                quality={80}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
              Meet the Founder
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              RideOps was founded by Mazen Abouelela, a USC graduate who saw
              firsthand how campus accessibility programs struggled with outdated
              tools. What started as a solution for USC&apos;s DART program is now a
              white-label platform built to serve campuses across the United
              States.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
