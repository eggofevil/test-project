import {combineReducers} from 'redux';
import logic from './logic/logic.js';
import data from './data/data.js';

export const NameSpace = {
  DATA: `DATA`,
  LOGIC: `LOGIC`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.LOGIC]: logic
});
