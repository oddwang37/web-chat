import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { siginInRequest } from 'redux/actions/auth';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';

export const validateEmail = (value: string) => {
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

const vkIcon = <FontAwesomeIcon icon={faVk} fontSize={28} />;
const googleIcon = <FontAwesomeIcon icon={faGoogle} fontSize={28} />;

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: formValues = { email: '', password: '' };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          dispatch(siginInRequest(values.email, values.password, actions.setErrors, navigate));
          actions.setSubmitting(false);
        }}>
        <StyledForm>
          <Input validate={validateEmail} name="email" label="Email" />
          <Input validate={validatePass} name="password" label="Password" />
          <LoginButton>Log in</LoginButton>
        </StyledForm>
      </Formik>
      <Inner>
        <AuthLink href="#">
          {googleIcon}
          <span>Log In with Google</span>
        </AuthLink>
        <AuthLink href="#">
          {vkIcon}
          <span>Log In with VK</span>
        </AuthLink>
      </Inner>
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

const LoginButton = styled(Button)`
  margin-top: 10px;
`;

const AuthLink = styled.a`
  display: block;
  color: #000;
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  &:visited {
    color: #000;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
