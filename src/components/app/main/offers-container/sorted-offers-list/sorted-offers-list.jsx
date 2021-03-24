import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersList from '../../../shared/offers-list/offers-list.jsx';
import {SortingTypes} from '../../../../../const.js';
import {sortArrayByKeyValue} from '../../../../../utils.js';

import offerPropTypes from '../../../../prop-types/offer.proptypes.js';

const SortedOffersList = ({currentCityOffers, sortingType}) => {
  const sortedCurrentCityOffers = (() => {
    switch (sortingType) {
    case SortingTypes.PRICE_HIGH_TO_LOW:
      return sortArrayByKeyValue(currentCityOffers.slice(), `price`, `descending`);
    case SortingTypes.PRICE_LOW_TO_HIGH:
      return sortArrayByKeyValue(currentCityOffers.slice(), `price`, `ascending`);
    case SortingTypes.RATING:
      return sortArrayByKeyValue(currentCityOffers.slice(), `rating`, `descending`);
    default:
      return currentCityOffers;
    }
  })();

  return (
    <OffersList
      offersListClassName="cities__places-list tabs__content"
      offerCardArticleClassName="cities__place-card"
      offerCardDivClassName="cities__image-wrapper"
      offers={sortedCurrentCityOffers}
    />
  );
};

SortedOffersList.propTypes = {
  sortingType: PropTypes.string.isRequired,
  currentCityOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

const mapStateToProps = ({LOGIC}) => ({sortingType: LOGIC.sortingType});

export {SortedOffersList};
export default connect(mapStateToProps)(SortedOffersList);
