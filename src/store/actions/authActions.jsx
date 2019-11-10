import axios from 'axios';
// import { returnErrors } from './errorActions';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

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
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
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
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ email, password });
  axios.post('http://localhost:4000/auth/local', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
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
