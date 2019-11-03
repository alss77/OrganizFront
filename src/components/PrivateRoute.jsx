import React from 'react';
import {
    Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ func: Component, auth }) => (
    <Route
        render={() => (auth ? (
            <Component />
        ) : (
                <Redirect to={{ pathname: '/login' }} />
            )
        )}
    />
);

PrivateRoute.propTypes = {
    func: PropTypes.func.isRequired,
    auth: PropTypes.bool,
};

PrivateRoute.defaultProps = {
    auth: null,
};

export default PrivateRoute;
