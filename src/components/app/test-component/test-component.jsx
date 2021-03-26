import React, {useState, useEffect} from 'react';
import {createAPI} from '../../../services/api.js';

const TestComponent = () => {
  const [nearByOffers, setNearbyOffers] = useState(null);
  const api = createAPI();

  const getNearbyOffers = (offerId) => (
    api.get(`/hotels/${offerId}/nearby`)
      .then(({data}) => {
        setNearbyOffers(data);
      })
  );
  useEffect(() => {
    getNearbyOffers(1);
  }, []);
  console.log(nearByOffers);
  return (
    <div>
      <h1>TestComponent</h1>
      <div>{nearByOffers ? JSON.stringify(nearByOffers[0]) : `Hello world!!!`}</div>
    </div>
  );
};

export default TestComponent;
