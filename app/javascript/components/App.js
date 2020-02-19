import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserContent from './user/user-content/UserContent';
import Sidebar from './user/sidebar/Sidebar';

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }
    render() {
        const { children } = this.props;
        return (
            <div id="wrapper" className="row">
                <div className="col-md-12">
                    <UserContent body={children}></UserContent>
                </div>
                <div className="col-md-12">
                    <Sidebar></Sidebar>
                </div>
            </div>
        )
    }
}

export default App;