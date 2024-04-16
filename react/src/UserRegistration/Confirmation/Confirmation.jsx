import React from 'react';

const Confirmation = ({ prevStep, userData, handleSubmit }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Username: {userData.username}</p>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};

export default Confirmation;
