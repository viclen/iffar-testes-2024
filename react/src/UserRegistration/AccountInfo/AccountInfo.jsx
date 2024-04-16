import React from 'react';

const AccountInfo = ({ nextStep, prevStep, handleChange, userData, handleSubmit }) => {
  return (
    <div>
      <h2>Account Information</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange('email')}
        value={userData.email}
      />
      <input
        type="text"
        placeholder="Username"
        onChange={handleChange('username')}
        value={userData.username}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handleChange('password')}
        value={userData.password}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default AccountInfo;
