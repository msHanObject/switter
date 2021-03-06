import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Auth from 'routes/Auth';

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
          <Route path="/" element={<Home userObj={userObj} />} />
          <Route path="profile" element={<Profile />} />
          </>
        ) : (
          <>
          <Route path="/" element={<Auth />} />
          </>
        )}
      </Routes>
    </Router>
  )
};
export default AppRouter;