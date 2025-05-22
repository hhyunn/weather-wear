import CurrentWeather from "@/components/CurrentWeather";
import Forecast from "@/components/Forecast";

export default async function Home() {
  return (
    <>
      <CurrentWeather />
      <Forecast />
    </>
  );
}
