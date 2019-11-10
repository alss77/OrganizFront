import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RECEIVE_GROUP,
} from '../actions/types';

const initialState = {
  token: null,
  isAuthentificated: null,
  isLoading: false,
  user: null,
  listenGroup: false,
  listenTask: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthentificated: true,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthentificated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
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
    case RECEIVE_GROUP:
      return {
        ...state,
        user: {
          ...state.user,
          teams: [
            ...state.user.teams,
            action.paylod,
          ],
        },
      };
    default:
      return state;
  }
}
