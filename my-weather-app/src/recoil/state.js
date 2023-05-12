import {atom} from 'recoil';

export const SearchDoneState = atom({
  key: 'SearchDoneState',
  default: false,
});

export const cityState = atom({
  key: 'cityState',
  default: '',
});

export const locationState = atom({
  key: 'locationState',
  default: null,
});

export const currentWeatherState = atom({
  key: 'currentWeatherState',
  default: {},
});

export const currentPollutionLevelState = atom({
  key: 'currentPollutionLevelState',
  default: null,
});

export const imageUrlState = atom({
  key: 'imageUrlState',
  default: null,
});

export const isOpenState = atom({
  key: 'isOpenState',
  default: false,
});

export const newCityState = atom({
  key: 'newCityState',
  default: '',
});
