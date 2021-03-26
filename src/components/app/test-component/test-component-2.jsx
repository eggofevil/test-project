import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {getNearbyOffers} from '../../../store/api-actions.js';
import {selectNearbyOffers} from '../../../store/reducers/data/selectors.js';

const Room = () => {
  const offer = {
    id: 1
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNearbyOffers(offer.id));
  }, []);
  const nearbyOffers = selectNearbyOffers();

  return (
    <div>
      {nearbyOffers.map((nearbyOffer, i) => (
        <div key={`offer-${i}`}>{offer.id}</div>
      ))}
    </div>
  );
};

Room.propTypes = {
  state: PropTypes.shape({
    offer: Object.isRequired,
  }),
};

export default Room;
