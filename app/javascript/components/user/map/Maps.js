import React, { Component } from 'react';
// import ReactMapGL from 'react-map-gl';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibW9zMTIiLCJhIjoiY2pjNXM0encxMThhdjMybjN5bXU0eTEyaiJ9.tYmRiOdFVrrTeYOuGW4UyA';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Maps.css';

class Maps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: 1.2217,
            lat: 39.8499,
            zoom: 6.48
        };

    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;

        var map = new mapboxgl.Map({
            container: 'map',
            center: [lng, lat],
            style: 'mapbox://styles/mapbox/streets-v10',
            zoom: zoom
        });

        map.on('move', () => {
            const { lng, lat } = map.getCenter();

            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        const { lng, lat, zoom } = this.state;
        return (
            <div className="App">
                <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
                    <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
                </div>
                <div id="map"/>
            </div>
        );
    }
}

export default Maps;