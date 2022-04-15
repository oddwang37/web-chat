import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { siginInRequest } from 'redux/actions/auth';

import { validateEmail, validatePass } from './LoginForm';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button';

const validatePassConfirm = (value: string) => {
  let errorMessage;
  if (!value) {
    errorMessage = 'This field is required';
  }
  return errorMessage;
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues: formValues = { email: '', password: '' };
  return (
    <div>
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
          <Input
            validate={validatePassConfirm}
            name="password-confirm"
            label="Password confirmation"
          />
          <RegistrationButton>Submit</RegistrationButton>
        </StyledForm>
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
