"use client";

type BackgroundProps = {
  isDay: boolean;
  children: React.ReactNode;
};

export default function Background({ isDay, children }: BackgroundProps) {
  return <div className={`${isDay ? "bg-[dodgerblue]" : "bg-[midnightblue] text-white"}`}>{children}</div>;
}
