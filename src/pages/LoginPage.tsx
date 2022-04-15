import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LoginForm from 'components/LoginForm';
import AuthScreen from 'components/UI/AuthScreen';

const LoginPage = () => {
  return (
    <AuthScreen>
      <Logo>Noorchat</Logo>
      <Title>Log in!</Title>
      <LoginForm />
      <Footer>
        <SLink to="/signup">Sign up</SLink>
        <SLink to="/">Forgot password?</SLink>
      </Footer>
    </AuthScreen>
  );
};

export default LoginPage;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #80abd3;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 5px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
export const SLink = styled(Link)`
  color: #2ecde8;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
