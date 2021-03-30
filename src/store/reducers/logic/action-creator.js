import {SET_SORTING_TYPE, SET_ACTIVE_CARD} from './actions.js';

export const setSortingType = (sortingType) => ({
  type: SET_SORTING_TYPE,
  payload: sortingType
});

export const setActiveCard = (offer = null) => ({
  type: SET_ACTIVE_CARD,
  payload: offer
});
