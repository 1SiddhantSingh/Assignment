// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>Suhora Login page </h1>
        {user ? (
          <Dashboard />
        ) : (
          <div className="auth-container">
            <Login />
            <Signup />
          </div>
        )}
      </div>
    </Provider>
  );
};

export default App;
