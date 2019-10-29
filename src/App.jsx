import React/* , { useEffect } */from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
// import { loaduser } from './store/actions/authActions';

function App() {
  /* useEffect(() => {
    store.dispatch(loaduser());
  }); */

  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
