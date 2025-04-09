"use client";

import { clothImage, recommendClothes } from "@/lib/cloth";
import { useWeatherViewStore } from "@/stores/weatherViewStore";
import { CurrentWeatherType } from "@/types/weather";
import Image from "next/image";
import ToggleButton from "./ToggleButton";

export default function CurrentWeather({ currentWeather }: { currentWeather: CurrentWeatherType }) {
  const { showClothing, toggleView } = useWeatherViewStore();

  return (
    <div className="pt-12 pb-2 px-2">
      <h2 className="sr-only">현재 날씨</h2>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-1.5">{currentWeather.name}</h1>
        <h2>
          {showClothing ? recommendClothes(Math.round(currentWeather?.main.temp)) : currentWeather.weather[0].main}
        </h2>
        <p className="my-4">
          <Image
            src={
              showClothing
                ? `/images/${clothImage(Math.round(currentWeather.main.temp))}`
                : `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
            }
            alt="날씨 이미지"
            width={80}
            height={80}
            className="m-auto"
          />
        </p>
        <strong className="block text-5xl mb-1">{`${Math.round(currentWeather.main.temp)}º`}</strong>
        {<span>체감 {Math.round(currentWeather.main.feels_like)}º</span>}
      </div>
      {
        <ToggleButton
          temp={currentWeather.main.temp}
          locationName={currentWeather.name}
          icon={currentWeather.weather[0].icon}
          showClothing={showClothing}
          toggleView={toggleView}
        />
      }
    </div>
  );
}
