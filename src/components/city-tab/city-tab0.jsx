import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setCity} from '../../store/reducers/actions';

const CityTab = ({cityName, tabClassName, changeCity}) => {
  const handleClick = () => {
    changeCity(cityName);
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
  changeCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(cityName) {
    dispatch(setCity(cityName));
  }
});

export {CityTab};
export default connect(null, mapDispatchToProps)(CityTab);
