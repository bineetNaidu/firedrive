import React from 'react';
import Signup from '../Auth/Signup';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from '../Auth/Profile';
import Login from '../Auth/Login';
import PrivateRoute from '../Auth/PrivateRoute';
import ForgotPassword from '../Auth/ForgotPassword';
import UpdateProfile from '../Auth/UpdateProfile';
import Dashboard from '../Drive/Dashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Firedrives */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />
          {/* Profiles */}
          <PrivateRoute exact path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          {/* Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
