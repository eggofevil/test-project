import {SET_CURRENT_CITY} from './app-logic/actions.js';

export const setCurrentCity = (cityName) => ({
  type: SET_CURRENT_CITY,
  payload: cityName
});
