import React from 'react';

import ForgotPassword from 'components/ForgotPassword';
import AuthScreen from 'components/UI/AuthScreen';
import { Title, Footer, SLink } from './LoginPage';

const ForgotPasswordPage = () => {
  return (
    <AuthScreen>
      <Title>Forgot password?</Title>
      <ForgotPassword />
      <Footer>
        <SLink to="/login">Log In</SLink>
        <SLink to="/signup">Sign Up</SLink>
      </Footer>
    </AuthScreen>
  );
};

export default ForgotPasswordPage;
