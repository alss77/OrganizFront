import React from 'react';
import {
    Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ funct: Component, auth }) => (
    <Route
        render={(props) => (auth ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/login' }} />
            )
        )}
    />
);

export default PrivateRoute;
