import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { validateEmail } from './LoginForm';
import { forgotPasswordRequest } from 'redux/actions/auth';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button';

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues: formValues = { email: '', password: '' };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          dispatch(forgotPasswordRequest(values.email, actions.setErrors));
          actions.setSubmitting(false);
        }}>
        <StyledForm>
          <Input validate={validateEmail} name="email" label="Email" />
          <ResetPassButton>Reset password</ResetPassButton>
        </StyledForm>
      </Formik>
    </div>
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

const ResetPassButton = styled(Button)`
  margin-top: 10px;
`;
