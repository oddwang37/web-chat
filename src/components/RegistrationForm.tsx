import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { signUpRequest } from 'redux/actions/auth';
import { useNavigate } from 'react-router-dom';

import { validateEmail } from './LoginForm';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button';

const validatePass = (value: string) => {
  let errorMessage;
  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(value) || !(value.length > 7)) {
    errorMessage =
      'Password must contain at least 1 number, letter in upper and lower case and be at leat 8 characters long';
  }
  if (!value) {
    errorMessage = 'This field is required';
  }
  return errorMessage;
};

const validatePassConfirm = (value: string, passwordValue: string) => {
  let errorMessage;
  if (value !== passwordValue) {
    errorMessage = 'Password must be match';
  }
  if (!value) {
    errorMessage = 'This field is required';
  }
  return errorMessage;
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: formValues = { email: '', password: '' };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          dispatch(signUpRequest(values.email, values.password, actions.setErrors, navigate));
          actions.setSubmitting(false);
        }}>
        {({ values }: any) => {
          return (
            <StyledForm>
              <Input validate={validateEmail} name="email" label="Email" />
              <Input validate={validatePass} name="password" label="Password" />
              <Input
                validate={() => validatePassConfirm(values.passwordConfirm, values.password)}
                name="passwordConfirm"
                label="Password confirmation"
              />
              <RegistrationButton>Submit</RegistrationButton>
            </StyledForm>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegistrationForm;

interface formValues {
  email: string;
  password: string;
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const RegistrationButton = styled(Button)`
  margin-top: 10px;
`;
