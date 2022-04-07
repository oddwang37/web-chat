import React from 'react';
import styled from 'styled-components';

import LoginForm from 'components/LoginForm';

const LoginPage = () => {
  return (
    <Root>
      <Logo>Noorchat</Logo>
      <Title>Log in!</Title>
      <LoginForm />
    </Root>
  );
};

export default LoginPage;

export const Root = styled.div`
  width: 30%;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  align-self: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Logo = styled.div`
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
