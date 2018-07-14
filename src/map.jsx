import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Draw from 'ol/interaction/Draw';
import {Vector as VectorLayer} from 'ol/layer.js';
import {Vector as VectorSource} from 'ol/source.js';

class SolarMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
    };
  }

  componentDidMount() {
    const bostonCoords = [-71.05, 42.36];
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
    const mapShow = new Map({
      target: 'map',
      layers: [
        raster,
        vector
      ],
      view: new View({
        center: fromLonLat(bostonCoords),
        zoom: 11
      }),
    });

    mapShow.addInteraction(draw);
    this.setState({ map: mapShow });
  }
  render() {

    return(
      <div id='map' className="map"></div>
    );
  }
}

export default SolarMap;
