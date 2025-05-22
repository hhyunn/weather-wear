"use client";

import { fetchCurrentWeather } from "@/app/api/weather";
import { clothImage, recommendClothes } from "@/lib/cloth";
import { useWeatherViewStore } from "@/stores/weatherViewStore";
import { CurrentWeatherType } from "@/types/weather";
import Image from "next/image";
import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";

export default function CurrentWeather() {
  // const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude.toString();
      const lon = position.coords.longitude.toString();

      const data = await fetchCurrentWeather(lat, lon);

      setCurrentWeather(data);
    });
  }, []);

  const { showClothing, toggleView } = useWeatherViewStore();

  return (
    <div className="pt-12 pb-2 px-2">
      <h2 className="sr-only">현재 날씨</h2>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-1.5">
          {currentWeather ? (
            currentWeather.name
          ) : (
            <span className="inline-block w-24 h-6 bg-white/40 animate-pulse rounded-lg" />
          )}
        </h1>
        <h2>
          {currentWeather ? (
            showClothing ? (
              recommendClothes(Math.round(currentWeather?.main.temp))
            ) : (
              currentWeather.weather[0].main
            )
          ) : (
            <span className="inline-block w-14 h-5 bg-white/40 animate-pulse rounded-lg" />
          )}
        </h2>
        <p className="my-4">
          {currentWeather ? (
            <Image
              src={
                showClothing
                  ? `/images/${clothImage(Math.round(currentWeather?.main.temp))}`
                  : `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
              }
              alt="날씨 이미지"
              width={80}
              height={80}
              className="m-auto"
              priority
            />
          ) : (
            <span className="inline-block w-20 h-20 bg-white/40 animate-pulse rounded-full" />
          )}
        </p>
        <strong className="block text-5xl mb-1">
          {currentWeather ? (
            `${Math.round(currentWeather.main.temp)}º`
          ) : (
            <span className="inline-block w-16 h-10 bg-white/40 animate-pulse rounded-lg" />
          )}
        </strong>
        {currentWeather ? (
          <span>체감 {Math.round(currentWeather.main.feels_like)}º</span>
        ) : (
          <span className="inline-block w-16 h-5 bg-white/40 animate-pulse rounded-lg" />
        )}
      </div>
      {currentWeather ? (
        <ToggleButton
          temp={currentWeather.main.temp}
          locationName={currentWeather.name}
          icon={currentWeather.weather[0].icon}
          showClothing={showClothing}
          toggleView={toggleView}
        />
      ) : (
        <span className="inline-block w-28 h-12 bg-white/40 animate-pulse rounded-lg" />
      )}
    </div>
  );
}
