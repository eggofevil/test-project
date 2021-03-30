import React, {useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import PropTypes from 'prop-types';

import UserPane from '../shared/user-pane/user-pane.jsx';
import MainPageLink from '../shared/main-page-link/main-page-link.jsx';
import Property from './property/property.jsx';
import OffersList from '../shared/offers-list/offers-list.jsx';
import CityMap from '../shared/city-map/city-map.jsx';

import {getNearbyOffers} from '../../../store/api-actions.js';
import {selectNearbyOffers} from '../../../store/reducers/data/selectors.js';

import offerPropTypes from '../../prop-types/offer.proptypes.js';

const Room = ({state: {offer}, nearbyOffers}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNearbyOffers(offer.id));
  }, [offer]);
  window.scroll(0, 0);
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <MainPageLink />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <UserPane />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <Property offer={offer} />
          <CityMap
            mapClassName="property"
            location={offer.location}
            offers={nearbyOffers}
            selectedOffer={offer}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              offers={nearbyOffers}
              offersListClassName="near-places__list"
              offerCardArticleClassName="near-places__card"
              offerCardDivClassName="near-places__image-wrapper"
            />
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = ({DATA}) => ({nearbyOffers: selectNearbyOffers(DATA)});

Room.propTypes = {
  state: PropTypes.shape({
    offer: offerPropTypes.isRequired,
  }),
  nearbyOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired
};

export {Room};
export default connect(mapStateToProps)(Room);
