// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from '../_helpers';
import AppRoutes from '../routes/AppRoutes';
import './index.css';
import 'mapbox-gl/src/css/mapbox-gl.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

    <Router history={history}>
      <AppRoutes />
    </Router>
    ,
    document.body.appendChild(document.createElement('div')),
  )
})
