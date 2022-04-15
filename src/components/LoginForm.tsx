import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { siginInRequest } from 'redux/actions/auth';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button';

const validateEmail = (value: string) => {
  let errorMessage;
  if (!value) {
    errorMessage = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = 'Invalid email adress';
  }
  return errorMessage;
};

const validatePass = (value: string) => {
  let errorMessage;
  if (!value) {
    errorMessage = 'This field is required';
  }
  return errorMessage;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues: formValues = { email: '', password: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        dispatch(siginInRequest(values.email, values.password, actions.setErrors));
        actions.setSubmitting(false);
      }}>
      <StyledForm>
        <Input validate={validateEmail} name="email" label="Email" />
        <Input validate={validatePass} name="password" label="Password" />
        <LoginButton>Log in</LoginButton>
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

const LoginButton = styled(Button)`
  margin-top: 10px;
`;
