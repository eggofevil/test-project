import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const OffersContainer = ({currentCityName}) => {
  return (
    <div>{currentCityName}</div>
  );
};

OffersContainer.propTypes = {
  currentCityName: PropTypes.string.isRequired
};

const mapStateToProps = ({DATA}) => ({currentCityName: DATA.currentCityName});

export {OffersContainer};
export default connect(mapStateToProps)(OffersContainer);

/*
<div className="cities">
  {cityOffers.length ?
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cityOffers.length} places to stay in {cityName}</b>


      </section>
      <div className="cities__right-section">

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
*/
