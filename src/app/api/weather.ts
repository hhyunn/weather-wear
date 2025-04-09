import axios from "axios";

// 현재 날씨 데이터
export const fetchCurrentWeather = async (lat: string, lon: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric&lang=kr`
    );
    return response.data;
  } catch (error) {
    console.error("현재 날씨 호출 오류:", error);
    throw error;
  }
};

// 5일/3시간 예보 데이터
export const fetchForecast = async (lat: string, lon: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric&lang=kr`
    );
    return response.data;
  } catch (error) {
    console.error("예보 데이터 호출 오류:", error);
    throw error;
  }
};
