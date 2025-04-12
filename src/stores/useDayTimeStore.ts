import { isDayTime } from "@/lib/utils";
import { create } from "zustand";

type DayTimeStore = {
  isDay: boolean;
  setIsDay: () => void;
};

export const useDayTimeStore = create<DayTimeStore>((set) => ({
  isDay: isDayTime(),
  setIsDay: () => set({ isDay: isDayTime() }),
}));
