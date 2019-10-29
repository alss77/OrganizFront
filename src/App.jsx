import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
//  import { loadUser } from './store/actions/authActions';

function App() {
  /* useEffect(() => {
    store.dispatch(loadUser());
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
