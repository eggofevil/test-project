import {combineReducers} from 'redux';
import appLogic from './app-logic/app-logic';

export const NameSpace = {
  LOGIC: `LOGIC`
};

export default combineReducers({
  [NameSpace.LOGIC]: appLogic
});
