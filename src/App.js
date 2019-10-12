import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Header from './containers/header'
import TaskList from './containers/task-list'
import Helmet from 'react-helmet'

function App() {
  return (
    <Provider store={store}>
      <Helmet>
        <style>{'body { background-color: #F7F5FF; }'}</style>
      </Helmet>
    <div className="App">
      <Header/>
      <TaskList/>
    </div>
  </Provider>
  );
}

export default App;
