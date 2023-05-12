import axios from 'axios';
import {DressAccordingToTemp} from './constants';

export const locationInfo = async city => {
  const response = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  );

  return response;
};

export const currentWeatherInfo = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  );

  return response;
};

export const currentPollutionLevel = async (lat, lon) => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  );

  return response;
};

export const ImageSearch = async searchTerm => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/random/?query=${searchTerm}&client_id=${process.env.REACT_APP_PICTURE_ACCESS_KEY}`,
  );

  return response;
};

export const KelvinToCelsius = KelvinTemp => {
  return (KelvinTemp - 273.15).toFixed(0);
};

export const getClothingForTemperature = temp => {
  let clothing = [];

  if (temp > 28) {
    clothing = DressAccordingToTemp.find(
      range => range.up28 !== undefined,
    )?.up28;
  } else if (temp >= 23 && temp <= 27) {
    clothing = DressAccordingToTemp.find(
      range => range.betweem23to27 !== undefined,
    )?.betweem23to27;
  } else if (temp >= 20 && temp <= 22) {
    clothing = DressAccordingToTemp.find(
      range => range.between20tp22 !== undefined,
    )?.between20tp22;
  } else if (temp >= 17 && temp <= 19) {
    clothing = DressAccordingToTemp.find(
      range => range.between17to19 !== undefined,
    )?.between17to19;
  } else if (temp >= 12 && temp <= 16) {
    clothing = DressAccordingToTemp.find(
      range => range.between12to16 !== undefined,
    )?.between12to16;
  } else if (temp >= 9 && temp <= 11) {
    clothing = DressAccordingToTemp.find(
      range => range.between9to11 !== undefined,
    )?.between9to11;
  } else if (temp >= 5 && temp <= 8) {
    clothing = DressAccordingToTemp.find(
      range => range.between5to8 !== undefined,
    )?.between5to8;
  } else if (temp < 4) {
    clothing = DressAccordingToTemp.find(
      range => range.below4 !== undefined,
    )?.below4;
  }

  return clothing;
};
