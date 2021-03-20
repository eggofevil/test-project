import {createAPI} from '../services/api';
import {setCurrentCity} from './reducers/action-creator.js';

const api = createAPI();

export const getCurrentCity = () => (dispatch, _getState) => (
  api.get(`/hotels/145`)
    .then(({data}) => {
      dispatch(setCurrentCity(data.city.name));
    })
    .catch(() => {
      dispatch(setCurrentCity());
    })
);


// test api requests
export const showOfferId1 = () => (
  api.get(`/hotels/1`)
    .then(({data}) => {
      console.log(data);
    })
);

export const showOffers = () => (
  api.get(`/hotels`)
    .then(({data}) => {
      console.log(data);
    })
);

/*
export const getOffers = () => (dispatch, _getState) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const cityName = data[0].city.name;
      dispatch(setCity(cityName));
      dispatch(setOffers(data));
    })
);
*/
