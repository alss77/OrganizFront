import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import TaskList from './containers/task-list'

function App() {
  return (
    <Provider store={store}>
      
    <div className="App">
      <TaskList/>
    </div>
  </Provider>
  );
}

export default App;
