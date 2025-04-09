import { clothImage, recommendClothes } from "@/lib/cloth";
import Image from "next/image";

type ToggleButtonProps = {
  temp: number;
  locationName: string;
  icon: string;
  showClothing: boolean;
  toggleView: () => void;
};

export default function ToggleButton({ temp, locationName, icon, showClothing, toggleView }: ToggleButtonProps) {
  return (
    <button
      className="rounded-lg w-fit flex gap-1 p-1.5 text-sm items-center bg-[rgba(255,255,255,0.3)] cursor-pointer"
      onClick={toggleView}>
      <p>
        <Image
          src={
            showClothing
              ? `https://openweathermap.org/img/wn/${icon}@2x.png`
              : `/images/${clothImage(Math.round(temp))}`
          }
          alt={showClothing ? "날씨 이미지" : "옷 이미지"}
          width={30}
          height={30}
          className="m-auto"
        />
      </p>
      <div>
        <span className="block">{showClothing ? locationName : "옷차림"}</span>
        <span className="block">{showClothing ? `${Math.round(temp)}º` : recommendClothes(Math.round(temp))}</span>
      </div>
    </button>
  );
}
