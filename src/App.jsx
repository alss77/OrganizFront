import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import DashBoard from './hooks/DashBoard';

function App() {
  return (
    <div className="App">
      <DashBoard />
    </div>
  );
}

export default App;
