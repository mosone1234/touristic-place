import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserContent extends Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    }
    render() {
        const { body } = this.props;
        return (
            <div className="container">
                <div>
                    {body}
                </div>
                <div>

                </div>
            </div>
        )
    };
}

export default UserContent;