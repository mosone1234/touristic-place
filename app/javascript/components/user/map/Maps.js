import React, { Component } from 'react';
// import ReactMapGL from 'react-map-gl';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibW9zMTIiLCJhIjoiY2pjNXM0encxMThhdjMybjN5bXU0eTEyaiJ9.tYmRiOdFVrrTeYOuGW4UyA';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Maps.css';
import bolivia from './bolivia.json';
import axios from 'axios';

class Maps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: -16.695,
            lng: -61.841,
            zoom: 4.64,
            department: null,
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

    async showDepartments (map) {
        console.log('---------------------------------------------')
        console.log('---------------------------------------------')
        console.log('-----------------MAPA-------------------')
        console.log('---------------------------------------------')
        console.log('---------------------------------------------')
        console.log('---------------------------------------------')
        try {
            const instance = axios.create({
                baseURL: 'http://localhost:3000',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                }
            })
            const response = await instance.get('/departments/index')
            console.log('22222222222222222222222222222222')
            console.log('22222222222222222222222222222222') 
            console.log(response.data)
            console.log('22222222222222222222222222222222')
            console.log('22222222222222222222222222222222')
            // const aa = response.data.features.map(x => { 
            //     // x.geometry.type = "Polygon"
            //     // const d2 = x.geometry.coordinates[0][0]
            //     // x.geometry.coordinates = x.geometry.coordinates[0]
            //     const data1 = x.geometry.coordinates[0]
            //     const data = 
            //         {
            //             // bolivia
            //             'type': 'Feature',
            //             'geometry': {
            //                 'type': 'Polygon',
            //                 'coordinates': data1
            //             }
            //         }
            //     return data
            // })
            // this.paintDepartment(response.data.features[0].geometry.coordinates[0])
            this.paintDepartment(response.data)
          
                            
            this.setState({ department: aa }, () => {
                console.log('--------------------ASIGNA EL VALOR')
                console.log('--------------------ASIGNA EL VALOR')
                console.log('--------------------ASIGNA EL VALOR')
                if (this.state.department) {
                    console.log(this.state.department)
                    // this.paintDepartment(this.state.department)
                }
                console.log('--------------------ASIGNA EL VALOR')
                console.log('--------------------ASIGNA EL VALOR')
                console.log('--------------------ASIGNA EL VALOR')
            });
        } catch (error) {
            console.log(error)
        }
    }

    layerOnCountry(map) {

        console.log('================================?????', bolivia.geometry.coordinates[0])
        map.on('load', function () {
            map.addSource('country', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            // bolivia
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

        this.showDepartments()

    }

    paintDepartment(map1) {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mos12/ck6ss9j730hj11iu0hxxwfncu',
            center: [-61.841, -16.695],
            zoom: 4.64
        });
        let hoveredStateId = null;
        map.on('load', function () {
            // map1.features.map(x => {
                map.addSource('departments', {
                    'type': 'geojson',
                    'data': {
                        // map1
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                // bolivia
                                'type': 'Feature',
                                'id': 1,
                                'properties': {
                                    'dep_name': map1.features[0].properties.dep_name,
                                    'description': 
                                    'Sucre (quechua: Chuqichaka; aimara: Sukri; guaraní: Sucre), cuyo nombre originario es “Charcas” hasta 1538, “La Plata” desde 1538 a 1776, “Chuquisaca” de 1776 a 1839, “Sucre” desde el año 1839 hasta el día de hoy, es la capital histórica y constitucional de Bolivia.1​2​nota 1​ Es además la sede del poder judicial del país e igualmente es capital del departamento de Chuquisaca. En Sucre se resume la historia de la Confederación de los Charcas.'
                                },
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': map1.features[0].geometry.coordinates[0]
                                }
                            },
                            {
                                // bolivia
                                'type': 'Feature',
                                'id': 2,
                                'properties': {
                                    'dep_name': map1.features[1].properties.dep_name,
                                    'description': ''
                                },
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': map1.features[1].geometry.coordinates[0]
                                }
                            },
                            {
                                // bolivia
                                'type': 'Feature',
                                'id': 3,
                                'properties': {
                                    'dep_name': map1.features[2].properties.dep_name,
                                    'description': ''
                                },
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': map1.features[2].geometry.coordinates[0]
                                }
                            },
                            {
                                // bolivia
                                'type': 'Feature',
                                'id': 4,
                                'properties': {
                                    'dep_name': map1.features[3].properties.dep_name,
                                    'description': ''
                                },
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': map1.features[3].geometry.coordinates[0]
                                }
                            },
                            {
                                // bolivia
                                'type': 'Feature',
                                'id': 5,
                                'properties': {
                                    'dep_name': map1.features[4].properties.dep_name,
                                    'description': ''
                                },
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': map1.features[4].geometry.coordinates[0]
                                }
                            },
                            {
                                // bolivia
                                'type': 'Feature',
                                'id': 6,
                                'properties': {
                                    'dep_name': map1.features[5].properties.dep_name,
                                    'description': ''
                                },
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': map1.features[5].geometry.coordinates[0]
                                }
                            },
                            {
                                // bolivia
                                'type': 'Feature',
                                'id': 7,
                                'properties': {
                                    'dep_name': map1.features[6].properties.dep_name,
                                    'description': ''
                                },
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': map1.features[6].geometry.coordinates[0]
                                }
                            },
                            {
                                // bolivia
                                'type': 'Feature',
                                'id': 8,
                                'properties': {
                                    'dep_name': map1.features[7].properties.dep_name,
                                    'description': ''
                                },
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': map1.features[7].geometry.coordinates[0]
                                }
                            },
                            {
                                // bolivia
                                'type': 'Feature',
                                'id': 9,
                                'properties': {
                                    'dep_name': map1.features[8].properties.dep_name,
                                    'description': ''
                                },
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': map1.features[8].geometry.coordinates[0]
                                }
                            }
                        ]
                    }
                });

                map.addLayer({
                    'id': 'maine_',
                    'type': 'fill',
                    'source': 'departments', // reference the data source
                    'layout': {},
                    'paint': {
                        'fill-color': '#0080ff', // blue color fill
                        'fill-opacity': 0.5
                    },
                    'filter': ['==', '$type', 'Polygon']
                });

                map.addLayer({
                    'id': 'outline',
                    'type': 'line',
                    'source': 'departments',
                    'layout': {},
                    'paint': {
                        // 'line-color': '#000',
                        // 'line-width': 1
                        'line-color': '#627BC1',
                        'line-width': 2
                    },
                    'filter': ['==', '$type', 'Polygon']
                });

                map.addLayer({
                    'id': 'state-fills',
                    'type': 'fill',
                    'source': 'departments',
                    'layout': {},
                    'paint': {
                        'fill-color': '#627BC1',
                        'fill-opacity': [
                            'case',
                            ['boolean', ['feature-state', 'hover'], false], 1, 0.5
                        ]
                    }
                });

                // Add a layer showing the places.
                map.addLayer({
                    'id': 'A',
                    'type': 'symbol',
                    'source': 'departments',
                    'layout': {}
                    // 'icon-image': '{icon}',
                    // 'icon-allow-overlap': true
                    // }
                });

                map.on('mousemove', 'state-fills', (e) => {
                    if (e.features.length > 0) {
                        if (hoveredStateId !== null) {
                            map.setFeatureState({ source: 'departments', id: hoveredStateId }, { hover: false });
                        }
                        hoveredStateId = e.features[0].id;
                        map.setFeatureState(
                            { source: 'departments', id: hoveredStateId },
                            { hover: true }
                        );
                        // const popup = new mapboxgl.Popup({ closeOnClick: false })
                        // .setLngLat([-96, 37.8])
                        // .setHTML('<h1>Hello World!</h1>')
                        // .addTo(map);
                    }
                });

                map.on('mouseleave', 'state-fills', () => {
                    if (hoveredStateId !== null) {
                        map.setFeatureState(
                        { source: 'departments', id: hoveredStateId },
                        { hover: false }
                        );
                    }
                    hoveredStateId = null;
                });
                map.addLayer({
                    'id': 'states-layer',
                    'type': 'fill',
                    'source': 'departments',
                    'paint': {
                    'fill-color': 'rgba(100, 50, 100, 0.01)',
                    'fill-outline-color': 'rgba(100, 50, 100, 0.01)'
                    }
                    });
                    
                    map.on('click', 'states-layer', (e) => {
                        console.log('---------------------')
                        console.log(e)
                        console.log(e.features)
                        console.log('-------------------')
                    new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML("<strong>" + e.features[1].properties.dep_name + "</strong> </br>" + e.features[1].properties.description)
                    // .setHTML("POPUP!")
                    .addTo(map);
                    });
                    
                    map.on('mouseenter', 'states-layer', () => {
                    map.getCanvas().style.cursor = 'pointer';
                    });
                    
                    map.on('mouseleave', 'states-layer', () => {
                    map.getCanvas().style.cursor = '';
                    });
            // }) -----------------------------------------------------------
            // --------------------------------------------------------------
            // --------------------------------------------------------------

        });
        map.on('move', () => {
            const { lng, lat } = map.getCenter();

            this.setState({
                lat: lat.toFixed(4),
                lng: lng.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

    }

    async getProvinces () {
        console.log('ESTA ES LA NUEVA FUNCION')
        try {
            const instance = axios.create({
                baseURL: 'http://localhost:3000',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                }
            })
            const response = await instance.get('/provinces/index')
            console.log('------------------------')
            console.log('------------------------')
            console.log(response.data)
            this.drawerProvincias(response.data)
            console.log('------------------------')
            console.log('------------------------')
        } catch (error) {
            console.log(error)
        }
    }

    drawerProvincias (map1) {
        const provincias = map1.features.map(x => {
            x.geometry.coordinates = x.geometry.coordinates[0]
            x.geometry.type = 'Polygon'
            return x
        })
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mos12/ck6ss9j730hj11iu0hxxwfncu',
            center: [-61.841, -16.695],
            zoom: 4.64
        });
        let hoveredStateId = null;

        map.on('load', function () {
            map.addSource('provinces', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': provincias
                }
            });
            map.addLayer({
                'id': 'maine_',
                'type': 'fill',
                'source': 'provinces', // reference the data source
                'layout': {},
                'paint': {
                    'fill-color': '#0080ff', // blue color fill
                    'fill-opacity': 0.5
                },
                'filter': ['==', '$type', 'Polygon']
            });

            map.addLayer({
                'id': 'outline',
                'type': 'line',
                'source': 'provinces',
                'layout': {},
                'paint': {
                    // 'line-color': '#000',
                    // 'line-width': 1
                    'line-color': '#627BC1',
                    'line-width': 2
                },
                'filter': ['==', '$type', 'Polygon']
            });


            map.addLayer({
                'id': 'state-fills',
                'type': 'fill',
                'source': 'provinces',
                'layout': {},
                'paint': {
                    'fill-color': '#627BC1',
                    'fill-opacity': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false], 1, 0.5
                    ]
                }
            });

            map.on('mousemove', 'state-fills', (e) => {
                if (e.features.length > 0) {
                    if (hoveredStateId !== null) {
                        map.setFeatureState({ source: 'provinces', id: hoveredStateId }, { hover: false });
                    }
                    hoveredStateId = e.features[0].id;
                    map.setFeatureState(
                        { source: 'provinces', id: hoveredStateId },
                        { hover: true }
                    );
                }
            });

            map.addLayer({
                'id': 'states-layer',
                'type': 'fill',
                'source': 'provinces',
                'paint': {
                'fill-color': 'rgba(100, 50, 100, 0.01)',
                'fill-outline-color': 'rgba(100, 50, 100, 0.01)'
                }
            });
                
            map.on('click', 'states-layer', (e) => {
                console.log('---------------------------------------111111111111111111111')
                console.log(e.features)
                console.log('---------------------------------------111111111111111111111')
                new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML("<strong>" + e.features[0].properties.pro_name + "</strong> </br>")
                .addTo(map);
                });
                
                map.on('mouseenter', 'states-layer', () => {
                map.getCanvas().style.cursor = 'pointer';
                });
                
                map.on('mouseleave', 'states-layer', () => {
                map.getCanvas().style.cursor = '';
            });

        });
    }


    render() {
        const { lng, lat, zoom } = this.state;
        return (
            <div className="container">
                <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
                    <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
                </div>
                <div id="map" />
                <nav id="listing-group" className="listing-group">
                    <input type="checkbox" id="scrollZoom" onClick={() => {  this.getProvinces()}}/>
                    {/* <button type="button" onClick={() => { this.getProvinces()}}>dsdkskdkskds</button> */}
                    <label for="scrollZoom">PROVINCIAS</label>
                    <input type="checkbox" id="boxZoom" checked="checked" />
                    <label for="boxZoom">DEPARTMENTOS</label>
                    {/* <input type="checkbox" id="scrollZoom" checked="checked" />
                    <label for="scrollZoom">Chuquisaca</label>
                    <input type="checkbox" id="boxZoom" checked="checked" />
                    <label for="boxZoom">Cochabamba</label>
                    <input type="checkbox" id="dragRotate" checked="checked" />
                    <label for="dragRotate">El Beni</label>
                    <input type="checkbox" id="dragPan" checked="checked" />
                    <label for="dragPan">La Paz</label>
                    <input type="checkbox" id="keyboard" checked="checked" />
                    <label for="keyboard">Oruro</label>
                    <input type="checkbox" id="doubleClickZoom" checked="checked" />
                    <label for="doubleClickZoom">Pando</label>
                    <input type="checkbox" id="touchZoomRotate" checked="checked" />
                    <label for="touchZoomRotate">PotosÃ­</label>
                    <input type="checkbox" id="touchZoomRotate" checked="checked" />
                    <label for="touchZoomRotate">Santa Cruz­</label>
                    <input type="checkbox" id="touchZoomRotate" checked="checked" />
                    <label for="touchZoomRotate">Tarija</label> */}
                </nav>
            </div>
        );
    }
}

export default Maps;