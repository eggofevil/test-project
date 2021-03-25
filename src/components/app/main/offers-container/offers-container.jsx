import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SortingPane from './sorting-pane/sorting-pane.jsx';
import SortedOffersList from './sorted-offers-list/sorted-offers-list.jsx';
import CityMap from '../../shared/city-map/city-map.jsx';

import offerPropTypes from '../../../prop-types/offer.proptypes.js';

const OffersContainer = ({currentCityName, currentCityOffers}) => {
  return (
    <div className="cities">
      {currentCityOffers.length ?
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentCityOffers.length} places to stay in {currentCityName}</b>
            <SortingPane />
            <SortedOffersList currentCityOffers={currentCityOffers} />
          </section>
          <div className="cities__right-section">
            <CityMap
              mapClassName="cities"
              location={currentCityOffers[0].city.location}
              offers={currentCityOffers}
            />
          </div>
        </div>
        :
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {currentCityName}</p>
            </div>
          </section>
          <div className="cities__right-section" />
        </div>
      }
    </div>
  );
};

OffersContainer.propTypes = {
  currentCityName: PropTypes.string.isRequired,
  currentCityOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

const mapStateToProps = ({DATA}) => ({currentCityName: DATA.currentCityName, currentCityOffers: DATA.currentCityOffers});

export {OffersContainer};
export default connect(mapStateToProps)(OffersContainer);

/*

*/
/*
<div className="cities">
  {currentCityOffers.length ?
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentCityOffers.length} places to stay in {currentCityName}</b>
        <SortingType />
        <SortedOffersList cityOffers={currentCityOffers} />
      </section>
      <div className="cities__right-section">
        <ExtendedCityMap
          mapClassName="cities"
          location={currentCityOffers[0].city.location}
          cityOffers={currentCityOffers}
        />
      </div>
    </div>
    :
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {currentCityName}</p>
        </div>
      </section>
      <div className="cities__right-section" />
    </div>
  }
</div>
*/
