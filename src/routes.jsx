import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from './components/PrivateRoute';
import RegisterForm from './hooks/RegisterForm';
import LoginForm from './hooks/LoginForm';
import Dashboard from './hooks/DashBoard';
import NavBar from './components/NavBar';
import { history } from './store';
import TaskList from './hooks/TaskList';
import Header from './components/Header';
import NotFound from './hooks/NotFound';

const Routes = ({ isAuthentificated }) => (
  <div>
    <ConnectedRouter history={history}>
      {
        (isAuthentificated) ? (
          // mettre ton header
          <Header />
        ) : (
            <NavBar />
          )
      }
      <br />
      <div>
        <Switch>
          <PrivateRoute
            path="/group/:name"
            auth={isAuthentificated}
            funct={TaskList}
          />
          <PrivateRoute
            path="/:firstname/:lastname/dashboard"
            auth={isAuthentificated}
            funct={Dashboard}
          />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/*" component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </div>
);

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
