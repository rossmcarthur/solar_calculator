import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Draw from 'ol/interaction/Draw';

class SolarMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
    };
  }

  componentDidMount() {
    const bostonCoords = [-71.05, 42.36];
    const mapShow = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat(bostonCoords),
        zoom: 11
      }),
    });

    this.setState({ map: mapShow });
  }
  render() {

    return(
      <div id='map' className="map"></div>
    );
  }
}

export default SolarMap;
