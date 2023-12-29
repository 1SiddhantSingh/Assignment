// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { RootState, store } from './store';
import  Login  from './Login';
import  Signup  from './Signup';
import Dashboard  from './Dashboard';

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Provider store={store}>
      <div>
        <h1>Your App</h1>
        {! user: void ? (
          <>
            <Login />
            <Signup />
          </>
        ) : (
          <Dashboard />
        )}
      </div>
    </Provider>
  );
};

export default App;
function useSelector(arg0: (state: RootState) => User | null) {
  throw new Error('Function not implemented.');
}

