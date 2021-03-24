import {extend} from '../../../utils';
import {SET_SORTING_TYPE, SET_ACTIVE_CARD} from './actions.js';
import {SortingTypes} from '../../../const';

const initialState = {
  sortingType: SortingTypes.POPULARITY,
  activeCard: null
};

const logic = (state = initialState, action) => {
  switch (action.type) {
  case SET_SORTING_TYPE:
    return extend(state, {
      sortingType: action.payload
    });
  case SET_ACTIVE_CARD:
    return extend(state, {
      activeCard: action.payload
    });
  default:
    return state;
  }
};

export default logic;
