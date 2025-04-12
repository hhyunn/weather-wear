"use client";

import { isDayTime } from "@/lib/utils";
import { useDayTimeStore } from "@/stores/useDayTimeStore";
import { useEffect } from "react";

export default function Background({ children }: { children: React.ReactNode }) {
  const { isDay, setIsDay } = useDayTimeStore();

  useEffect(() => {
    const day = isDayTime();
    setIsDay(day);
  }, []);

  return <div className={`${isDay ? "bg-[dodgerblue]" : "bg-[midnightblue] text-white"}`}>{children}</div>;
}
