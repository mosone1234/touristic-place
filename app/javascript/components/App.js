import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserContent from './user/user-content/UserContent'

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }
    render() {
        const { children } = this.props;
        return (
            <div className="d-flex" id="wrapper">
                <div>
                    <UserContent body={children}></UserContent>
                </div>
            </div>
        )
    }
}

export default App;