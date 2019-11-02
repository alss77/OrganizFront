import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  error: errorReducer,
  auth: authReducer,
});

export default createRootReducer;
