import React from 'react';
import './App.css';
import Helmet from 'react-helmet';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #F7F5FF; }'}</style>
      </Helmet>
      <Header />
    </div>
  );
}

export default App;
