import React from 'react';

import UpdatePassword from 'components/ConfirmPassword';
import AuthScreen from 'components/UI/AuthScreen';
import { Title, Footer, SLink } from './LoginPage';

const ConfirmPasswordPage = () => {
  return (
    <AuthScreen>
      <Title>Update password</Title>
      <UpdatePassword />
      <Footer>
        <SLink to="/login">Log In</SLink>
        <SLink to="/signup">Sign Up</SLink>
      </Footer>
    </AuthScreen>
  );
};

export default ConfirmPasswordPage;
