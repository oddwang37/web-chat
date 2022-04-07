import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Input from 'components/UI/Input';
import Button from 'components/UI/Button';

const LoginForm = () => {
  return (
    <Root>
      <Input name="email" label="Email" />
      <Input name="password" label="Password" />
      <LoginButton onClick={() => console.log('asdasd')}>Log in</LoginButton>
      <SignUp>
        Need an account? <SignUpLink to="/signup"> SignUp now!</SignUpLink>
      </SignUp>
    </Root>
  );
};

export default LoginForm;

const Root = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignUp = styled.div`
  text-align: center;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.7);
`;

const LoginButton = styled(Button)`
  margin-top: 10px;
`;

const SignUpLink = styled(Link)`
  color: #2ecde8;
  text-decoration: none;
`;
