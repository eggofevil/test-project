import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import '../../../../../node_modules/leaflet/dist/leaflet.css';

import offerPropTypes from '../../../prop-types/offer.proptypes.js';

const CityMap = ({mapClassName, location, offers, activeCard, selectedOffer}) => {
  console.log(`rerender CityMap`);
  const [map, setMap] = useState(null);

  const inactivePin = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 40]
  });
  const activePin = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 40]
  });

  const addIcon = (latitude, longitude, icon) => {
    leaflet.marker([latitude, longitude], {icon}).addTo(map);
  };

  useEffect(() => {
    const newMap = leaflet.map(`map`, {
      zoomControl: false,
      marker: true
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(newMap);
    setMap(newMap);
  }, []);

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  let icon;
  if (mapClassName === `property`) {
    useEffect(() => {
      if (map) {
        icon = activePin;
        addIcon(selectedOffer.location.latitude, selectedOffer.location.longitude, icon);
        offers.map((offer) => {
          icon = inactivePin;
          addIcon(offer.location.latitude, offer.location.longitude, icon);
        });
      }
    });
  } else {
    useEffect(() => {
      if (map) {
        offers.map((offer) => {
          icon = offer.id === activeCard ? activePin : inactivePin;
          addIcon(offer.location.latitude, offer.location.longitude, icon);
        });
      }
    });
  }

  return (
    <section id="map" className={`${mapClassName}__map map`} />
  );
};

CityMap.propTypes = {
  mapClassName: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  activeCard: PropTypes.number,
  selectedOffer: offerPropTypes
};

const mapStateToProps = ({LOGIC}) => ({activeCard: LOGIC.activeCard});

export {CityMap};
export default connect(mapStateToProps)(CityMap);
