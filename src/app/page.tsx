import CurrentWeather from "@/components/CurrentWeather";
import Forecast from "@/components/Forecast";
import { fetchCurrentWeather, fetchForecast } from "./api/weather";

export const dynamic = "force-dynamic";

export default async function Home() {
  // const [lat, setLat] = useState("37.485869289607");
  // const [lon, setLon] = useState("126.87860762339");
  const lat = "37.3030918";
  const lon = "126.8130208";

  const currentWeather = await fetchCurrentWeather(lat, lon);
  const forecast = await fetchForecast(lat, lon);

  return (
    <>
      <CurrentWeather currentWeather={currentWeather} />
      <Forecast forecast={forecast} />
    </>
  );
}
