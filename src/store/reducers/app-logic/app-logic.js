import {extend} from '../../../utils';
import {SET_CURRENT_CITY} from './actions.js';

const initialState = {
  currentCityName: `Amsterdam`
};

const appLogic = (state = initialState, action) => {
  switch (action.type) {
  case SET_CURRENT_CITY:
    return extend(state, {
      currentCityName: action.payload
    });
  default:
    return state;
  }
};

export default appLogic;
