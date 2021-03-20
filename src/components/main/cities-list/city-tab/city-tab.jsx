import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setCurrentCity} from '../../../../store/reducers/action-creator.js';

const CityTab = ({cityName, tabClassName, changeCurrentCity}) => {
  const handleClick = () => {
    changeCurrentCity(cityName);
  };
  return (
    <li className="locations__item">
      <a className={tabClassName} onClick={handleClick}>
        <span>{cityName}</span>
      </a>
    </li>
  );
};

CityTab.propTypes = {
  cityName: PropTypes.string.isRequired,
  tabClassName: PropTypes.string.isRequired,
  changeCurrentCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity(cityName) {
    dispatch(setCurrentCity(cityName));
  }
});

export {CityTab};
export default connect(null, mapDispatchToProps)(CityTab);
