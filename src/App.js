import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import DashBoard from './screens/DashBoard';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <DashBoard />
    </div>
  </Provider>
  );
}

export default App;
