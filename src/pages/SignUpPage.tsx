import React from 'react';
import styled from 'styled-components';

import SignUpForm from 'components/SignUpForm';
import { Root, Logo, Title } from 'pages/LoginPage';

const SignUpPage = () => {
  return (
    <Root>
      <Logo>Noorchat</Logo>
      <Title>Join now</Title>
      <Text>Free to use</Text>
      <SignUpForm />
    </Root>
  );
};

export default SignUpPage;

const Text = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`;
