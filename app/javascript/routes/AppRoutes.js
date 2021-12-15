import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Home from '../components/user/home/Home';
import Maps from '../components/user/map/Maps';

const AppRoutes = () =>
    <App>
        <Switch>
            {/* <Route path="/" exact component={Maps} /> */}
            <Route path="/map" exact component={Maps} />
        </Switch>
    </App>;

export default AppRoutes;