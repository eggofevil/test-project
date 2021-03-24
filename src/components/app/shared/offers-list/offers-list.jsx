import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from './offer-card/offer-card.jsx';

import offerPropTypes from '../../../prop-types/offer.proptypes.js';

const OffersList = ({currentCityOffers, offersListClassName, offerCardArticleClassName, offerCardDivClassName}) => {
  return (
    <div className={`places__list ` + offersListClassName}>
      {currentCityOffers.map((offer, i) => (
        <OfferCard
          key={`offer-${i}`}
          offerCardArticleClassName={offerCardArticleClassName}
          offerCardDivClassName={offerCardDivClassName}
          offer={offer}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offersListClassName: PropTypes.string.isRequired,
  offerCardArticleClassName: PropTypes.string.isRequired,
  offerCardDivClassName: PropTypes.string.isRequired,
  currentCityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
};

export default OffersList;
