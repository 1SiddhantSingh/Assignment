// Dashboard.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { logout, addDetail, removeDetail } from './authSlice';
import './Dashboard.css' ;

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const details = useSelector((state: RootState) => state.auth.details);

  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleAddDetail = () => {
    const newDetail = {
      id: details.length + 1,
      name: `Detail ${details.length + 1}`,
    };
    dispatch(addDetail(newDetail));
  };

  const handleRemoveDetail = (id: number) => {
    dispatch(removeDetail({ id }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredDetails = details.filter((detail) =>
    detail.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Welcome, {user?.username}!</h2>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <label htmlFor="search">Search Detail:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul>
        {filteredDetails.map((detail) => (
          <li key={detail.id}>
            {detail.name}{' '}
            <button onClick={() => handleRemoveDetail(detail.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddDetail}>Add Detail</button>
    </div>
  );
};

export default Dashboard;
