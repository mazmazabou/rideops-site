import { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
  className?: string;
}

export default function BrowserFrame({ children, className = "" }: BrowserFrameProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-2xl ${className}`}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E0E0E0]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E0E0E0]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E0E0E0]" />
      </div>

      {/* Screenshot content */}
      <div className="overflow-hidden rounded-b-xl">
        {children}
      </div>
    </div>
  );
}
