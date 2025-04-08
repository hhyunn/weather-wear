"use client";

import { clothImage, recommendClothes } from "@/lib/cloth";
import { formatKoreanTime, formatMonthDay } from "@/lib/utils";
import { useWeatherViewStore } from "@/stores/weatherViewStore";
import { ForecastItem, ForecastType } from "@/types/weather";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

type ForecastProps = { lat: string; lon: string };

export default function Forecast(props: ForecastProps) {
  const { lat, lon } = props;

  const [forecast, setForecast] = useState<ForecastType>();

  const { showClothing } = useWeatherViewStore();

  const fetchData = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric&lang=kr`
      )
      .then((res) => {
        setForecast(res.data);
      })
      .catch((error) => {
        console.error("예보 데이터 호출 오류:", error);
      });
  };

  useEffect(() => {
    console.log("test2");
    fetchData();
  }, []);

  return (
    <div className="px-2 py-2">
      {forecast ? (
        <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.3)]">
          <h2 className="mb-3.5">시간별 예보</h2>

          <ul className="space-y-2.5">
            {forecast?.list.map((item: ForecastItem, index: number) => {
              return (
                <li key={index} className="flex justify-between">
                  <p>
                    <span className="block">{formatKoreanTime(item.dt_txt)}</span>
                    <span className="text-gray-500 text-sm">{formatMonthDay(item.dt_txt)}</span>
                  </p>
                  <ul className="flex gap-5 w-[70%]">
                    <li className="flex items-center gap-2 w-1/2">
                      <p className="shrink-0">
                        {forecast ? (
                          <Image
                            src={
                              showClothing
                                ? `/images/${clothImage(item.main.temp)}`
                                : `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
                            }
                            alt="날씨 이미지"
                            width={30}
                            height={30}
                            className="m-auto"
                          />
                        ) : (
                          <span className="inline-block w-8 h-8 bg-white/40 animate-pulse rounded-full" />
                        )}
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
      ) : (
        <span className="inline-block w-full h-screen bg-white/40 animate-pulse rounded-lg" />
      )}
    </div>
  );
}
