// Header.js
import React from 'react';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header>
      <h1>LEAVE MANAGEMENT APPLICATION</h1>
      {isLoggedIn && (
        <div>
          <p>Welcome, User!</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
