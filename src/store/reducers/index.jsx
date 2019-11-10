import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import socketReducer from './socketReducer';
import langReducer from './langReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  error: errorReducer,
  auth: authReducer,
  socket: socketReducer,
  lang: langReducer,
});

export default createRootReducer;
