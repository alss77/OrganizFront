import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store';
// import Routes from './routes';
import DashBoard from './hooks/DashBoard';

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <div className="App">
            <DashBoard />
        </div>
    </Provider>,
    document.getElementById('root'),
);
