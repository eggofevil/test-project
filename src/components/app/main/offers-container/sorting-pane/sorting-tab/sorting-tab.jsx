import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setSortingType} from '../../../../../../store/reducers/logic/action-creator.js';

const SortingTab = ({value, active, handleClick, changeSortingType}) => {
  const liClassName = active ? `places__option places__option--active` : `places__option`;
  const sortingTabHandleClick = (sortingType) => {
    handleClick();
    changeSortingType(sortingType);
  };
  return (
    <li className={liClassName} tabIndex={0} onClick={() => sortingTabHandleClick(value)}>{value}</li>
  );
};

SortingTab.propTypes = {
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  changeSortingType: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeSortingType(sortingType) {
    dispatch(setSortingType(sortingType));
  }
});

export {SortingTab};
export default connect(null, mapDispatchToProps)(SortingTab);
