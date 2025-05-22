"use client";

import { fetchForecast } from "@/app/api/weather";
import { clothImage, recommendClothes } from "@/lib/cloth";
import { formatKoreanTime, formatMonthDay } from "@/lib/utils";
import { useDayTimeStore } from "@/stores/useDayTimeStore";
import { useWeatherViewStore } from "@/stores/weatherViewStore";
import { ForecastItem, ForecastType } from "@/types/weather";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Forecast() {
  const [forecast, setForecast] = useState<ForecastType | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude.toString();
      const lon = position.coords.longitude.toString();

      const data = await fetchForecast(lat, lon);

      setForecast(data);
    });
  }, []);

  const { showClothing } = useWeatherViewStore();
  const isDay = useDayTimeStore((state) => state.isDay);

  return (
    <div className="px-2 py-2">
      {
        <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.3)]">
          <h2 className="mb-3.5">시간별 예보</h2>

          <ul className="space-y-2.5">
            {forecast?.list.map((item: ForecastItem, index: number) => {
              return (
                <li key={index} className="flex justify-between">
                  <p>
                    <span className="block">{formatKoreanTime(item.dt_txt)}</span>
                    <span className={`${isDay ? "text-gray-500" : "text-gray-700"} text-sm`}>
                      {formatMonthDay(item.dt_txt)}
                    </span>
                  </p>
                  <ul className="flex gap-5 w-[70%]">
                    <li className="flex items-center gap-2 w-1/2">
                      <p className="shrink-0">
                        {
                          <Image
                            src={
                              showClothing
                                ? `/images/${clothImage(Math.round(item.main.temp))}`
                                : `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
                            }
                            alt="날씨 이미지"
                            width={30}
                            height={30}
                            className="m-auto"
                          />
                        }
                      </p>
                      <p className="text-center w-[calc(100%-30px)]">
                        <span className="block text-sm">
                          {showClothing ? recommendClothes(Math.round(item.main.temp)) : item.weather[0].main}
                        </span>
                        <span className="text-sm">{`${Math.round(item.main.temp)}º`}</span>
                      </p>
                    </li>
                    <li className="w-1/2">
                      <p className="text-sm">
                        습도 <span>{Math.round(item.main.humidity)}%</span>
                      </p>
                      <p className="text-sm">
                        강수 확률 <span>{Math.round(item.pop * 100)}%</span>
                      </p>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      }
    </div>
  );
}
