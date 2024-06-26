import React from 'react';

const PersonalInfo = ({ nextStep, handleChange, userData, handleSubmit }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange('firstName')}
        value={userData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange('lastName')}
        value={userData.lastName}
      />
      <div className="footer">
        <button onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
