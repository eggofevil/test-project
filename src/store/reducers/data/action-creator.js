import {SET_OFFERS, SET_CURRENT_CITY_AND_CITY_OFFERS, SET_NEARBY_OFFERS} from './actions.js';

export const setOffers = (offers) => ({
  type: SET_OFFERS,
  payload: offers
});

export const setCurrentCityAndCityOffers = (cityName) => ({
  type: SET_CURRENT_CITY_AND_CITY_OFFERS,
  payload: cityName
});

export const setNearbyOffers = (nearbyOffers) => ({
  type: SET_NEARBY_OFFERS,
  payload: nearbyOffers
});
