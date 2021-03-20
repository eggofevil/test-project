import React from 'react';
import {showOfferId1, showOffers} from './../../store/api-actions.js';

const TestComponent = () => {
  showOfferId1();
  showOffers();
  return (
    <div>
      Hello world!
    </div>
  );
};

export default TestComponent;
