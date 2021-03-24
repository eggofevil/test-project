import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {SortingTypes} from '../../../../../const.js';

import SortingTab from './sorting-tab/sorting-tab.jsx';

const SortingPane = ({sortingType}) => {
  const [sortingPaneState, setSortingPaneState] = useState(0);
  const handleClick = () => {
    const state = sortingPaneState ? 0 : 1;
    setSortingPaneState(state);
  };
  const ulClassName = `places__options places__options--custom${sortingPaneState ? ` places__options--opened` : ``}`;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleClick}>
        {sortingType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={ulClassName}>
        {Object.values(SortingTypes).map((value, id) => (
          <SortingTab key={`sortingOption-${id}`} value={value} active={value === sortingType} handleClick={handleClick} />
        ))}
      </ul>
    </form>
  );
};

const mapStateToProps = ({LOGIC}) => ({sortingType: LOGIC.sortingType});

SortingPane.propTypes = {
  sortingType: PropTypes.string.isRequired
};

export {SortingPane};
export default connect(mapStateToProps)(SortingPane);
