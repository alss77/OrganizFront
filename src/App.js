import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Header from './containers/header'
import TaskList from './containers/task-list'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <TaskList/>
    </div>
  </Provider>
  );
}

export default App;
