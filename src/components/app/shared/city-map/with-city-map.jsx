import React from 'react';

function withCityMap(Component) {
  const WithCityMap = () => {
    const map = <section id="map" className={`${mapClassName}__map map`} />;
    return (
      {map}
    );
  };
  return WithCityMap;
}

export default withCityMap;
