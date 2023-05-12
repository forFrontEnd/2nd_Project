import {useRecoilValue} from 'recoil';
import ClothIcon from './ClothIcon';
import {currentWeatherState} from '../recoil/state';
import {getClothingForTemperature} from '../shared/functions';

import './CurrentClothes.css';

const CurrentClothes = () => {
  const currentWeather = useRecoilValue(currentWeatherState);
  const clothes = getClothingForTemperature(
    parseInt(currentWeather.feels_like),
  );

  return (
    <>
      <div className="today-font">{'Today Recommend Clothes'}</div>
      <div className="icon-container">
        {clothes.map((cloth, index) => (
          <ClothIcon key={index} clothName={cloth} />
        ))}
      </div>
    </>
  );
};

export default CurrentClothes;
