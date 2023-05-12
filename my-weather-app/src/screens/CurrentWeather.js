import {useRecoilValue} from 'recoil';
import CurrentClothes from '../components/CurrentClothes';
import CurrentWeatherDetail from '../components/CurrentWeatherDetail';

import './CurrentWeather.css';
import {imageUrlState} from '../recoil/state';
import CurrentDate from '../components/CurrentDate';

const CurrentWeather = () => {
  const imageUrl = useRecoilValue(imageUrlState);

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    opacity: 0.8,
  };

  return (
    <div className="current-container">
      <div className="clothes-container" style={style}>
        <CurrentDate />
        <CurrentClothes />
      </div>
      <div className="weather-container" style={style}>
        <CurrentWeatherDetail />
      </div>
    </div>
  );
};

export default CurrentWeather;
