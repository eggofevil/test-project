import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CityTab from '../city-tab/city-tab.jsx';

const CitiesList = ({cityName}) => {
  const cityNames = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
  const elementClassName = `locations__item-link tabs__item`;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityNames.map((name, id) => {
            return (
              <CityTab key={`city-${id}`} cityName={name} tabClassName={name === cityName ? elementClassName + ` tabs__item--active` : elementClassName}/>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

const mapStateToProps = ({LOGIC}) => ({cityName: LOGIC.cityName});

CitiesList.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export {CitiesList};
export default connect(mapStateToProps)(CitiesList);
