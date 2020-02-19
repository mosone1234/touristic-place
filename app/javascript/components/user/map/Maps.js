import React, { Component } from 'react';
// import ReactMapGL from 'react-map-gl';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibW9zMTIiLCJhIjoiY2pjNXM0encxMThhdjMybjN5bXU0eTEyaiJ9.tYmRiOdFVrrTeYOuGW4UyA';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Maps.css';
import bolivia from './bolivia.json';

class Maps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: -16.695,
            lng: -61.841,
            zoom: 4.64
        };

    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        console.log('----< ', bolivia.geometry.coordinates);

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mos12/ck6ss9j730hj11iu0hxxwfncu',
            center: [lng, lat],
            zoom: zoom
        });
        this.layerOnCountry(map);
        // this.paintCountry(map);


        map.on('move', () => {
            const { lng, lat } = map.getCenter();

            this.setState({
                lat: lat.toFixed(4),
                lng: lng.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    layerOnCountry(map) {

        map.on('load', function () {
            map.addSource('country', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Polygon',
                                'coordinates': bolivia.geometry.coordinates[0]
                            }
                        }
                    ]
                }
            });

            map.addLayer({
                'id': 'bolivia',
                'type': 'fill',
                'source': 'country',
                'paint': {
                    'fill-color': '#888888',
                    'fill-opacity': 0.4
                },
                'filter': ['==', '$type', 'Polygon']
            });

        });

    }

    render() {
        const { lng, lat, zoom } = this.state;

        // console.log('----< ', bolivia);
        return (
            <div className="App">
                <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
                    <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
                </div>
                <div id="map" />
            </div>
        );
    }
}

export default Maps;