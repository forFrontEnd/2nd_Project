import {useRecoilValue} from 'recoil';
import {currentWeatherState} from '../recoil/state';

const WeatherIcon = () => {
  const currentWeather = useRecoilValue(currentWeatherState);

  const baseUrl = 'http://openweathermap.org/img/wn/';
  const iconUrl = `${baseUrl}${currentWeather.iconCode}@2x.png`;

  return <img src={iconUrl} alt="Weather icon" />;
};

export default WeatherIcon;
