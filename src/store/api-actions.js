import {setCurrentCity} from './reducers/action-creator.js';

export const getCurrentCity = () => (dispatch, _getState, api) => (
  api.get(`/hotels/145`)
    .then(({data}) => {
      dispatch(setCurrentCity(data.city.name));
    })
    .catch(()=>{})
);
