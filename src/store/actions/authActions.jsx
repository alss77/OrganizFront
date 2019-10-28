import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from local storage
  const { token } = getState().auth;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};

// Check token && load user
export const loaduser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });
  axios.get('', tokenConfig(getState))
    .then((res) => dispatch({
      type: USER_LOADED,
      payload: res.data,
    }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// Register User
export const register = ({
  firstName, lastName, email, password,
}) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({
    firstName, lastName, email, password,
  });
  axios.post('http://localhost:4000/auth/register', body, config)
    .then((res) => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    }))
    .catch((/* err */) => {
      // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const login = ({ email, password }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ email, password });
  axios.post('http://localhost:4000/auth/login', body, config)
    .then((res) => dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    }))
    .catch((/* err */) => {
      // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logout = () => ({
  type: LOGOUT_SUCCESS,
});
