import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';

import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button';

const LoginForm = () => {
  const initialValues: formValues = { email: '', password: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
      }}>
      <StyledForm>
        <Input name="email" label="Email" />
        <Input name="password" label="Password" />
        <LoginButton onClick={() => console.log('asdasd')}>Log in</LoginButton>
        <SignUp>
          Need an account? <SignUpLink to="/signup"> SignUp now!</SignUpLink>
        </SignUp>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;

interface formValues {
  email: string;
  password: string;
}

const StyledForm = styled(Form)`
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
