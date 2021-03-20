import {createAPI} from '../services/api';
import {setCurrentCity} from './reducers/action-creator.js';

const api = createAPI();

export const getCurrentCity = () => (dispatch, _getState) => (
  api.get(`/hotels/1`)
    .then(({data}) => {
      dispatch(setCurrentCity(data.city.name));
    })
    .catch(()=>{})
);
