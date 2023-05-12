import { useRecoilValue } from "recoil";
import { imageUrlState } from "../../recoil/state";

import WeatherDetail from "./WeatherDetail/WeatherDetail";

const WeatherContainer = () => {
  const imageUrl = useRecoilValue(imageUrlState);

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    opacity: 0.8,
  };

  return (
    <div className="weather-container" style={style}>
      <WeatherDetail />
    </div>
  );
};

export default WeatherContainer;
