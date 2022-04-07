import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Input from 'components/UI/Input';
import Button from 'components/UI/Button';

const SignUpForm = () => {
  return (
    <Root>
      <Input name="email" label="Email" />
      <Input name="password" label="Password" />
      <Input name="repeat-password" label="Repeat password" />
      <RegButton onClick={() => console.log('asd')}>Submit</RegButton>
      <LogIn>
        Already have an account?<LogInLink to="/login"> Log In now!</LogInLink>
      </LogIn>
    </Root>
  );
};

export default SignUpForm;

const Root = styled.form`
  display: flex;
  flex-direction: column;
`;

const LogIn = styled.div`
  text-align: center;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.7);
`;

const RegButton = styled(Button)`
  margin-top: 10px;
`;

const LogInLink = styled(Link)`
  color: #2ecde8;
  text-decoration: none;
`;
