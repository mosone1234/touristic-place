import React, { Component } from 'react';
// import ReactMapGL from 'react-map-gl';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibW9zMTIiLCJhIjoiY2pjNXM0encxMThhdjMybjN5bXU0eTEyaiJ9.tYmRiOdFVrrTeYOuGW4UyA';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Maps.css';
import bolivia from './bolivia.json';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

class Maps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: -16.695,
            lng: -61.841,
            zoom: 4.64,
            department: null,
            open: false,
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

    async showDepartments () {
        try {
            const instance = axios.create({
                baseURL: 'http://localhost:3000',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            this.setState({ open: true })
            const response = await instance.get('/departments/index')
            this.setState({ open: false })
            this.paintDepartment(response.data)
          
                            
            this.setState({ department: aa }, () => {
                if (this.state.department) {
                    console.log(this.state.department)
                    // this.paintDepartment(this.state.department)
                }
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
                                    'description': 'Cochabamba es una ciudad boliviana, capital de la provincia Cercado y del departamento homónimo. Se encuentra situada en el centro del país, en el valle central del departamento. Tiene una población estimada de 841.000 habitantes a 2021, y de 1.4 millones en su región metropolitana,4​ llamada también como Región metropolitana de Kanata, a la cual pertenece, junto a los municipios de: Sacaba, Quillacollo, Colcapirhua, Tiquipaya, Vinto y Sipe Sipe.'
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
                                    'description': 'Trinidad, oficialmente Santísima Trinidad, es una ciudad de Bolivia, capital del Departamento del Beni y de la Provincia de Cercado, tiene una superficie de 35 km² y cuenta con una población estimada de 132.785 habitantes, siendo el municipio más poblado del Departamento del Beni.'
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
                                    'description': 'La ciudad de La Paz, oficialmente Nuestra Señora de La Paz (en aimara y quechua, Chuqiyapu, labrantío de oro; españolizado como Chuquiago, Chuquiabo o Choqueyapu) es la Sede de Gobierno del Órgano Ejecutivo de Bolivia. Es el centro político, financiero, social, académico y cultural más importante del país, además de ser la ciudad con mayor nivel de desarrollo sostenible en Bolivia'
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
                                    'description': 'Oruro es una ciudad y municipio boliviano, capital del departamento de Oruro y de la Provincia de Cercado. El municipio tiene una población de 264 683 habitantes (según el último Censo boliviano de 2012), convirtiéndose de esa manera en la quinta ciudad más poblada de Bolivia.'
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
                                    'description': 'Cobija es una ciudad y municipio boliviano, capital del Departamento de Pando y de la Provincia Nicolás Suárez. La ciudad es fronteriza con el vecino país de Brasil además de ser la única aglomeración urbana de este departamento al norte de Bolivia.'
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
                                    'description': 'Potosí ―fundada como la Villa Imperial de Potosí― es una ciudad del sur de Bolivia, capital del departamento del mismo nombre y de la provincia de Tomás Frías. Se extiende a las faldas de una legendaria montaña llamada Cerro Rico (en quechua: Sumaq Urqu), en la cual se situó la mina de plata más grande del mundo desde mediados del siglo XVI hasta mediados del siglo XVII.'
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
                                    'description': 'Santa Cruz de la Sierra es una ciudad localizada en los llanos orientales de Bolivia, a orillas del río Piraí. Actualmente es la ciudad más poblada del país con un total aproximado de 2 millones de habitantes, en 2021.2​ Es capital del Departamento de Santa Cruz, el departamento de mayor Producto Regional Bruto en Bolivia'
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
                                    'description': 'San Bernardo de Tarija o Tarija, ciudad originalmente fundada con el nombre de Villa de San Bernardo de la Frontera de Tarixa,4​ es un municipio y una ciudad de Bolivia, capital de la provincia Cercado y del departamento homónimo. Cuenta con una población de aproximadamente 247.000 habitantes en total. Se encuentra ubicada en el valle del río Guadalquivir a 1834 msnm.'
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
                    .setHTML("<strong>" + e.features[0].properties.dep_name + "</strong> </br>" + e.features[0].properties.description)
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

    handleClose () {
        this.setState({ open: false })
    }
    handleToggle () {
        this.setState({ open: true })
    } 

    async getProvinces () {
        try {
            const instance = axios.create({
                baseURL: 'http://localhost:3000',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            this.setState({ open: true })
            const response = await instance.get('/provinces/index')
            this.setState({ open: false })
            console.log(response.data)
            this.drawerProvincias(response.data)
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
                    <label for="scrollZoom">BOLIVIA - DEPARTAMENTOS Y PROVINCIAS</label>
                    <input type="checkbox" id="scrollZoom" onClick={() => {  this.getProvinces() }}/>
                    {/* <button type="button" onClick={() => { this.getProvinces()}}>dsdkskdkskds</button> */}
                    <label for="scrollZoom">PROVINCIAS</label>
                    <input type="checkbox" id="boxZoom" onClick={() => { this.showDepartments() }} />
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
                    {/* <Button onClick={() => { this.handleToggle() }}>Show backdrop</Button> */}
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={this.state.open}
                        onClick={() => { this.handleClose() }}
                    >
                        <Stack gap={1} justifyContent="center" alignItems="center">
                        <CircularProgress color="inherit" />
                        <Typography>Cargando Mapa...</Typography>
                        <Typography>Este proceso puede demorar 1 minuto...</Typography>
                        </Stack>
                    </Backdrop>
                </nav>
            </div>
        );
    }
}

export default Maps;