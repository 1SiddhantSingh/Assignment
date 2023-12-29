// src/SignupForm.tsx
import React, { useState } from 'react';
import './style.css' ;

interface SignupFormProps {
  onSignup: (
    name: string,
    email: string,
    username: string,
    mobile: string,
    password: string
  ) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    onSignup(name, email, username, mobile, password);
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        <label htmlFor="newName">Name:</label>
        <input
          type="text"
          id="newName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="newEmail">Email:</label>
        <input
          type="text"
          id="newEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
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
        <label htmlFor="newMobile">Mobile:</label>
        <input
          type="text"
          id="newMobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
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

export default SignupForm;
