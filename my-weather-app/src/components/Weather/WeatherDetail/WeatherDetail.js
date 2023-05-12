import { useRecoilValue } from "recoil";

import WeatherIcon from "../WeatherIcon/WeatherIcon";

import {
  currentPollutionLevelState,
  currentWeatherState,
  newCityState,
} from "../../../recoil/state";

import "./WeatherDetail.css";

const WeatherDetail = () => {
  const currentWeather = useRecoilValue(currentWeatherState);
  const currentPollutionLevel = useRecoilValue(currentPollutionLevelState);
  const newCity = useRecoilValue(newCityState);

  return (
    <div className="weatherdetail-container">
      <div style={{ fontSize: "40px" }}>{newCity}</div>
      <div style={{ fontSize: "20px" }}>
        <div>현재: {currentWeather.temp}°</div>
        <WeatherIcon />
        <div>체감: {currentWeather.feels_like}°</div>
        <div>
          최고: {currentWeather.temp_max}° 최저: {currentWeather.temp_min}°
        </div>
        <div>대기 오염 수준: {currentPollutionLevel}</div>
      </div>
    </div>
  );
};

export default WeatherDetail;
