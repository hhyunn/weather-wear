import { create } from "zustand";

type WeatherViewStore = {
  showClothing: boolean;
  toggleView: () => void;
};

export const useWeatherViewStore = create<WeatherViewStore>((set) => ({
  showClothing: false,
  toggleView: () => set((state) => ({ showClothing: !state.showClothing })),
}));
