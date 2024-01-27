import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Sidebar = ({ isLoggedIn }) => {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
