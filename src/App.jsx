import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import RegisterForm from './hooks/RegisterForm';
//  import { loadUser } from './store/actions/authActions';

function App() {
  /* useEffect(() => {
    store.dispatch(loadUser());
  }); */

  return (
    <Provider store={store}>
      <div className="App">
        <RegisterForm />
      </div>
    </Provider>
  );
}

export default App;
