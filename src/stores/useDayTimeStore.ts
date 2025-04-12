import { create } from "zustand";

type DayTimeStore = {
  isDay: boolean;
  setIsDay: (value: boolean) => void;
};

export const useDayTimeStore = create<DayTimeStore>((set) => ({
  isDay: true,
  setIsDay: (value) => set({ isDay: value }),
}));
