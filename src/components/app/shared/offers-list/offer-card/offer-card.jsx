import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {setActiveCard} from '../../../../../store/reducers/logic/action-creator.js';
import {RATING_BAR_DIVISION} from '../../../../../const.js';

import offerPropTypes from '../../../../prop-types/offer.proptypes.js';

const OfferCard = ({offerCardArticleClassName, offerCardDivClassName, offer, changeActiveCard}) => {
  const offerLinkProps = {
    pathname: `/offer${offer.id}`,
    state: {
      offer,
    }
  };

  const handleMouseEnter = () => {
    changeActiveCard(offer);
  };

  const handleMouseLeave = () => {
    changeActiveCard();
  };

  const articleArguments = {
    className: `place-card ` + offerCardArticleClassName
  };

  if (offerCardArticleClassName === `cities__place-card`) {
    articleArguments.onMouseEnter = handleMouseEnter;
    articleArguments.onMouseLeave = handleMouseLeave;
  }

  return (
    <article {...articleArguments}>
      {offer[`is_premium`] ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={`place-card__image-wrapper ` + offerCardDivClassName}>
        <Link to={offerLinkProps}>
          <img className="place-card__image" src={offer[`preview_image`]} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * RATING_BAR_DIVISION}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLinkProps}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offerCardArticleClassName: PropTypes.string.isRequired,
  offerCardDivClassName: PropTypes.string.isRequired,
  offer: offerPropTypes.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard(offer) {
    dispatch(setActiveCard(offer));
  }
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
