import CurrentWeather from "@/components/CurrentWeather";
import Forecast from "@/components/Forecast";

export default function Home() {
  // const [lat, setLat] = useState("37.485869289607");
  // const [lon, setLon] = useState("126.87860762339");
  const lat = "37.359519120216";
  const lon = "126.9227157731";

  return (
    <>
      <CurrentWeather lat={lat} lon={lon} />
      <Forecast lat={lat} lon={lon} />
    </>
  );
}
