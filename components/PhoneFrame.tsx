import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export default function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`relative max-w-[280px] rounded-[2.5rem] border-[12px] border-gray-800 bg-gray-800 shadow-xl ${className}`}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-800" />

      {/* Screenshot content */}
      <div className="overflow-hidden rounded-[1.75rem]">
        {children}
      </div>
    </div>
  );
}
