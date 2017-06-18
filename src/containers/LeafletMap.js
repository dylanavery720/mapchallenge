import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import AllMarkers from './AllMarkers'

class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      centerLat: props.locations[props.locations.length - 1].lat,
      centerLon: props.locations[props.locations.length - 1].lng,
    };
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      centerLat: nextProps.locations[nextProps.locations.length - 1].lat,
      centerLon: nextProps.locations[nextProps.locations.length - 1].lng })
  }

  drawPolygon() {
    return (
    <Polygon positions={this.props.positionArray} />
    )
  }

  render() {
    const { centerLat, centerLon } = this.state
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={[centerLat, centerLon]}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl
            position="bottomright"
          />
          <AllMarkers handleClick={this.props.addPolygon} />
           {this.drawPolygon()}
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
