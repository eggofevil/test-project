import {extend} from '../../../utils';
import {SET_OFFERS, SET_CURRENT_CITY_AND_CITY_OFFERS} from './actions.js';

const initialState = {
  offers: [],
  currentCityName: `Amsterdam`,
  currentCityOffers: []
};

const data = (state = initialState, action) => {
  switch (action.type) {
  case SET_OFFERS:
    return extend(state, {
      offers: action.payload
    });
  case SET_CURRENT_CITY_AND_CITY_OFFERS:
    return extend(state, {
      currentCityName: action.payload,
      currentCityOffers: state.offers.filter((offer) => offer.city.name === action.payload)
    });
  default:
    return state;
  }
};

export default data;