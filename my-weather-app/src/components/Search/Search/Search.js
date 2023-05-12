import { useRecoilState } from "recoil";

import { TextField } from "@mui/material";

import {
  ImageSearch,
  KelvinToCelsius,
  currentPollutionLevel,
  currentWeatherInfo,
  locationInfo,
} from "../../../shared/functions";

import { airPollutionQualitativeName } from "../../../shared/constants";

import {
  SearchDoneState,
  cityState,
  currentPollutionLevelState,
  currentWeatherState,
  imageUrlState,
  isOpenState,
  locationState,
  newCityState,
} from "../../../recoil/state";

const Search = () => {
  const [city, setCity] = useRecoilState(cityState);
  const [, setLocation] = useRecoilState(locationState);
  const [, setCurrentWeather] = useRecoilState(currentWeatherState);
  const [, setCurrentPollutionLevel] = useRecoilState(
    currentPollutionLevelState
  );
  const [, setSearchDone] = useRecoilState(SearchDoneState);
  const [, setImageUrl] = useRecoilState(imageUrlState);
  const [, setIsOpen] = useRecoilState(isOpenState);

  const [, setNewCity] = useRecoilState(newCityState);

  const handleSearchCurrentWeather = () => {
    let lattitude, longitude, searchTerm;
    locationInfo(city)
      .then((response) => {
        const { lat, lon } = response.data[0];
        lattitude = lat;
        longitude = lon;
        setLocation({ lat: lat, lon: lon });
      })
      .then(() => {
        return currentWeatherInfo(lattitude, longitude);
      })
      .then((response) => {
        const { temp, feels_like, temp_min, temp_max } = response.data.main;
        const { main, description, icon } = response.data.weather[0];
        const { speed } = response.data.wind;

        searchTerm = main;

        setCurrentWeather({
          temp: KelvinToCelsius(temp),
          feels_like: KelvinToCelsius(feels_like),
          temp_min: KelvinToCelsius(temp_min),
          temp_max: KelvinToCelsius(temp_max),
          weather: main,
          weather_description: description,
          iconCode: icon,
          wind_speed: speed,
        });
      })
      .then(() => {
        return currentPollutionLevel(lattitude, longitude);
      })
      .then((response) => {
        const { aqi } = response.data.list[0].main;
        setCurrentPollutionLevel(airPollutionQualitativeName[aqi - 1]);
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      })
      .then(() => {
        return ImageSearch(`${searchTerm}-weather`);
      })
      .then((response) => {
        setImageUrl(response.data.urls.regular);
      })
      .then(() => {
        setSearchDone(true);
      });
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchCurrentWeather();
      setNewCity(city);
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  };

  return (
    <div>
      <div className="overlay" />
      <div className="modal">
        <TextField
          id="city-search"
          type="search"
          value={city}
          onChange={handleCityChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Search;
