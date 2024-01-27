// LandingPage.js
import React from 'react';
import LoginForm from 'C:\Users\Siddhant\frontend\src/LoginForm';

const LeaveManagementApplication = () => {
  return (
    <div className="leave-management-container">
      <h1>LEAVE MANAGEMENT APPLICATION</h1>
      <div className="content-wrapper">
        {/* Remove the Calendar component */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LeaveManagementApplication;
