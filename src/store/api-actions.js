import {setOffers, setCurrentCityAndCityOffers} from './reducers/data/action-creator.js';

export const getHotels = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(setOffers(data));
      dispatch(setCurrentCityAndCityOffers(data[0].city.name));
    })
);
