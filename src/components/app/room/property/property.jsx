import React from 'react';

// import ReviewsList from '../reviews-list/reviews-list';
// import ReviewForm from '../review-form/review-form';

import {RATING_BAR_DIVISION} from '../../../../const.js';

import offerPropTypes from '../../../prop-types/offer.proptypes.js';

const Property = ({offer}) => {
  const hostAvatarClassName = offer.host[`is_pro`] ?
    `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` :
    `property__avatar-wrapper user__avatar-wrapper`;
  return (
    <>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {offer.images.map((img, i) => (
            <div key={`photo-${i}`} className="property__image-wrapper">
              <img className="property__image" src={img} alt="photo of property" />
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {offer[`is_premium`] ? (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          ) : null}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {offer.title}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${offer.rating * RATING_BAR_DIVISION}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{offer.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {offer.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {offer.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              {offer[`max_adults`] ? `Max ${offer[`max_adults`]} adults` : null}
              {offer[`max_adults`] && offer[`max_children`] ? <br></br> : null}
              {offer[`max_children`] ? `Max ${offer[`max_children`]} children` : null}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">€{offer.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {offer.goods.map((amentity, i) =>
                <li key={`amentity-${i}`} className="property__inside-item">
                  {amentity}
                </li>
              )}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={hostAvatarClassName}>
                <img className="property__avatar user__avatar" src={offer.host[`avatar_url`]} width={74} height={74} alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {offer.host[`name`]}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">{offer.description}</p>
            </div>
          </div>
          <section className="property__reviews reviews">
            {/* <ExtendedReviewsList offerId={offer.id} />
            <ExtendedReviewForm offerId={offer.id} /> */}
          </section>
        </div>
      </div>
    </>
  );
};

Property.propTypes = {
  offer: offerPropTypes.isRequired,
};

export default Property;
