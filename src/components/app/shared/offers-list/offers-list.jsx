import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from './offer-card/offer-card.jsx';

import offerPropTypes from '../../../prop-types/offer.proptypes.js';

const OffersList = ({offers, offersListClassName, offerCardArticleClassName, offerCardDivClassName}) => {
  return (
    <div className={`places__list ` + offersListClassName}>
      {offers.map((offer, i) => (
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
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  offersListClassName: PropTypes.string.isRequired,
  offerCardArticleClassName: PropTypes.string.isRequired,
  offerCardDivClassName: PropTypes.string.isRequired,
};

export default OffersList;
