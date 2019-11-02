import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from 'react-private-route';
import RegisterForm from './hooks/RegisterForm';
import LoginForm from './hooks/LoginForm';
import Dashboard from './hooks/DashBoard';
import NavBar from './components/NavBar';
import { history } from './store';

const Routes = (props) => {
  const isLogged = () => props.isAuthentificated;
  return (
    <div>
      <ConnectedRouter history={history}>
        <NavBar />
        <br />
        <br />
        <div>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <PrivateRoute
              path="/dashboard"
              isAuthenticated={isLogged}
              component={Dashboard}
            />
          </Switch>
        </div>
      </ConnectedRouter>
    </div>
  );
};

Routes.propTypes = {
  isAuthentificated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthentificated: state.auth.isAuthentificated,
});

Routes.defaultProps = {
  isAuthentificated: null,
};

export default connect(mapStateToProps)(Routes);
