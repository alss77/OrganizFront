import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';

const initialState = {
  token: null,
  isAuthentificated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthentificated: true,
        isLoading: false,
      };
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        user: null,
        isAuthentificated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
