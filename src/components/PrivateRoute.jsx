import React from 'react';
import {
  Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ funct: Component, auth }) => (
  <Route
    render={() => (auth ? (
      <Component />
    ) : (<Redirect to={{ pathname: '/login' }} />)
    )}
  />
);

PrivateRoute.propsTypes = {
  funct: PropTypes.node.isRequired,
  auth: PropTypes.bool.isRequired,
};

PrivateRoute.defaultTypes = {
  auth: false,
};

export default PrivateRoute;
