import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Header from './containers/header'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
    </div>
  </Provider>
  );
}

export default App;
