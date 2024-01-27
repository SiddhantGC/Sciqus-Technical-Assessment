import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import LandingPage from './LandingPage';
import RegistrationForm from './RegistrationForm';
import StudentList from './StudentList';
import StudentDetails from './StudentDetails';
import EditStudent from './EditStudent';
import Login from './Login';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to true after successful login
  const [userRole, setUserRole] = useState(''); // Set user role after successful login

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
  
  };

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="app-container">
          {isLoggedIn && <Sidebar />}
          <Switch>
            <Route path="/" exact>
              {isLoggedIn ? <LandingPage /> : <Login onLogin={handleLogin} />}
            </Route>
            <Route path="/registration" component={RegistrationForm} />
            <Route path="/students" component={StudentList} />
            <Route path="/student/:id" component={StudentDetails} />
            <Route
              path="/edit-student/:id"
              render={(props) => <EditStudent {...props} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
