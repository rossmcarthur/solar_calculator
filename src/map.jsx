import React from 'react';
import Geocoder from 'ol-geocoder';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import OSM from 'ol/source/osm';
import Draw from 'ol/interaction/draw';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import Coords from 'ol/proj';
import Style from 'ol/style';

class SolarMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
    };
  }

  componentDidMount() {
    const bostonCoords = Coords.fromLonLat([-71.05, 42.36]);
    const raster = new TileLayer({
      source: new OSM()
    });
    const source = new VectorSource({wrapX: false});
    const vector = new VectorLayer({
      source: source
    });
    const draw = new Draw({
      source: source,
      type: "Polygon"
    });
    const geocoder = new Geocoder('nominatim', {
      autoComplete: true,
      placeholder: 'Search for an address',
      countrycodes: 'us',
      featureStyle : Style.style,
      keepOpen: false
    });
    const mapShow = new Map({
      target: 'map',
      layers: [
        raster,
        vector
      ],
      view: new View({
        center: bostonCoords,
        zoom: 11,
      }),
    });

    mapShow.addInteraction(draw);
    mapShow.addControl(geocoder);
    this.setState({ map: mapShow });
  }

  render() {
    return(
      <div>
        <div id='map' className="map"></div>
      </div>
    );
  }
}

export default SolarMap;
