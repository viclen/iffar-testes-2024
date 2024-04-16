import React, { useMemo, useState } from 'react';
import PersonalInfo from './PersonalInfo';
import AccountInfo from './AccountInfo';
import Confirmation from './Confirmation';

const UserRegistration = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const handleChange = input => e => {
    setUserData({ ...userData, [input]: e.target.value });
  };

  const handlePersonalInfoSubmit = () => {
    // handle personal info submission/validation
    nextStep();
  };

  const handleAccountInfoSubmit = () => {
    // handle account info submission/validation
    nextStep();
  };

  const handleConfirmationSubmit = () => {
    // handle confirmation submission/validation
    // submit user data to backend
    nextStep();
  };

  const currentStep = useMemo(() => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            nextStep={nextStep}
            handleChange={handleChange}
            userData={userData}
            handleSubmit={handlePersonalInfoSubmit}
          />
        );
      case 2:
        return (
          <AccountInfo
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            userData={userData}
            handleSubmit={handleAccountInfoSubmit}
          />
        );
      case 3:
        return (
          <Confirmation
            prevStep={prevStep}
            userData={userData}
            handleSubmit={handleConfirmationSubmit}
          />
        );
      case 4:
        return (
          <div>
            User created!
          </div>
        );
      default:
        return null;
    }
  }, []);

  return (
    <div>
      <h1>User registration</h1>

      <div>
        {currentStep}
      </div>
    </div>
  );
};

export default UserRegistration;
