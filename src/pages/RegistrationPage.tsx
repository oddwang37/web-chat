import React from 'react';
import styled from 'styled-components';

import RegistrationForm from 'components/RegistrationForm';
import AuthScreen from 'components/UI/AuthScreen';
import { Title, Footer, SLink } from './LoginPage';

const RegistrationPage = () => {
  return (
    <AuthScreen>
      <Title>Sign Up</Title>
      <RegistrationForm />
      <Footer>
        <SLink to="/login">Log In</SLink>
        <SLink to="/">Forgot password?</SLink>
      </Footer>
    </AuthScreen>
  );
};

export default RegistrationPage;
