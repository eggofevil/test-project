import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withSortingType from '../../hocs/with-sorting-type';
import withCityMap from '../../hocs/with-city-map';

import SortingType from '../sorting-type/sorting-type';
import SortedOffersList from '../sorted-offers-list/sorted-offers-list';
import CityMap from '../city-map/city-map';

import offerPropTypes from '../prop-types/offer-prop-types';

const ExtendedSortingType = withSortingType(SortingType);
const ExtendedCityMap = withCityMap(CityMap);

const OffersContainer = ({cityName, offers}) => {
  const cityOffers = offers.filter((offer) => offer.city.name === cityName);
  return (
    <div className="cities">
      {cityOffers.length ?
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cityOffers.length} places to stay in {cityName}</b>
            <ExtendedSortingType />
            <SortedOffersList cityOffers={cityOffers} />
          </section>
          <div className="cities__right-section">
            <ExtendedCityMap
              mapClassName="cities"
              location={cityOffers[0].city.location}
              cityOffers={cityOffers}
            />
          </div>
        </div>
        :
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {cityName}</p>
            </div>
          </section>
          <div className="cities__right-section" />
        </div>
      }
    </div>
  );
};

OffersContainer.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

const mapStateToProps = ({DATA, LOGIC}) => ({cityName: LOGIC.cityName, offers: DATA.offers});

export {OffersContainer};
export default connect(mapStateToProps)(OffersContainer);
