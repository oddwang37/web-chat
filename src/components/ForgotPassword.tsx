import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { validateEmail } from './LoginForm';
import { forgotPasswordRequest } from 'redux/actions/auth';
import Input from 'components/UI/Input/Input';
import { Button } from 'reactstrap';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const initialValues: formValues = { email: '' };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          dispatch(forgotPasswordRequest(values.email));
          actions.setSubmitting(false);
        }}>
        <StyledForm>
          <Input validate={validateEmail} name="email" label="Email" />
          <ResetPassButton color="primary">Send link for password reset</ResetPassButton>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default ForgotPassword;

interface formValues {
  email: string;
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const ResetPassButton = styled(Button)`
  margin-top: 10px;
`;
