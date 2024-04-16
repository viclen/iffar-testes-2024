import React from 'react';

const Confirmation = ({ prevStep, userData, handleSubmit }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Username: {userData.username}</p>
      <div className="footer">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  );
};

export default Confirmation;
