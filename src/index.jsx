import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routes from './routes';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <Routes />
    </div>
  </Provider>,
  document.getElementById('root'),
);
