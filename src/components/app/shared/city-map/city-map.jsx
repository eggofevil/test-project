import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import '../../../../../node_modules/leaflet/dist/leaflet.css';

import offerPropTypes from '../../../prop-types/offer.proptypes.js';

const CityMap = ({mapClassName, location, offers, activeCard, selectedOffer}) => {
  const [map, setMap] = useState(null);
  const [markersLayer, setMarkersLayer] = useState(null);
  const [activeMarkerLayer, setActiveMarkerLayer] = useState(null);

  const inactiveMarker = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 40]
  });
  const activeMarker = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 40]
  });

  const createMarkerLayer = (lat, long, icon) => leaflet.marker([lat, long], {icon});
  const removePreviousLayer = (previousLayer) => {
    if (previousLayer) {
      setMap(map.removeLayer(previousLayer));
    }
  };
  const applyActiveMarkerLayer = (prop) => {
    if (map) {
      removePreviousLayer(activeMarkerLayer);
      if (prop) {
        const newActiveMarkerLayer = createMarkerLayer(prop.location.latitude, prop.location.longitude, activeMarker);
        setActiveMarkerLayer(newActiveMarkerLayer);
        setMap(map.addLayer(newActiveMarkerLayer));
      }
    }
  };

  useEffect(() => {
    const newMap = leaflet.map(`map`, {
      zoomControl: false,
      marker: true
    });
    const titleLayer = leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      });
    newMap.addLayer(titleLayer);
    newMap.setView([location.latitude, location.longitude], location.zoom);
    setMap(newMap);
  }, []);

  useEffect(() => {
    if (map) {
      setMap(map.setView([location.latitude, location.longitude], location.zoom));
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      removePreviousLayer(markersLayer);
      const newMarkersLayer = leaflet.layerGroup();
      offers.map((offer) => {
        newMarkersLayer.addLayer(createMarkerLayer(offer.location.latitude, offer.location.longitude, inactiveMarker));
      });
      setMarkersLayer(newMarkersLayer);
      setMap(map.addLayer(newMarkersLayer));
    }
  }, [map, offers]);

  useEffect(() => {
    applyActiveMarkerLayer(activeCard);
  }, [activeCard]);

  useEffect(() => {
    applyActiveMarkerLayer(selectedOffer);
  }, [map, selectedOffer]);

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
  activeCard: offerPropTypes,
  selectedOffer: offerPropTypes
};

const mapStateToProps = ({LOGIC}) => ({activeCard: LOGIC.activeCard});

export {CityMap};
export default connect(mapStateToProps)(CityMap);
