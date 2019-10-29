import React, { useContext, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './utils/history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterForm from './hooks/RegisterForm';
import LoginForm from './hooks/LoginForm';
import Dashboard from './hooks/DashBoard';
import NavBar from './components/NavBar';
// import AuthCheck from './utils/authcheck';

const PrivateRoute = ({component: Component, auth }) => (
  <Route render={props => auth === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{pathname:'/'}} />
  }
  />
)

const Routes = (props) => {


      return(
        <div>
          <Router history={history} >
          <NavBar />
          <br />
          <br />
          <div>
            <Switch>
              <Route exact path='/' component={LoginForm} />
              <Route path='/register' component={RegisterForm} />
              <PrivateRoute path="/dashboard"
                            auth={props.isAuthentificated}
                            component={Dashboard} />
            </Switch>
          </div>
          </Router>
        </div>
  )}

  RegisterForm.propTypes = {
    isAuthentificated: PropTypes.bool,
  };
  
  const mapStateToProps = (state) => ({
    isAuthentificated: state.auth.isAuthentificated
  });

export default connect(mapStateToProps)(Routes);