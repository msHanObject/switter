import React from 'react';
import { authService } from 'fbase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const onSignOutClick = () => {
    authService.signOut();
    navigate('/');
  };
  return (
    <>
      <button type="button" onClick={onSignOutClick}>Log out</button>
    </>
  );
};
export default Profile;