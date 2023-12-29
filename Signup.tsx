// Signup.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from './authSlice';

const Signup: React.FC = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    dispatch(signup({ username, password }));
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        <label htmlFor="newUsername">Username:</label>
        <input
          type="text"
          id="newUsername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="newPassword">Password:</label>
        <input
          type="password"
          id="newPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
