import React from 'react';
import './App.css';
import Header from './components/header'
import Helmet from 'react-helmet'

function App() {
  return (      
    <div className="App">
      <Helmet>
                <style>{'body { background-color: #F7F5FF; }'}</style>
      </Helmet>
      <Header/>
    </div>
  );
}

export default App;
