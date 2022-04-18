import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Form } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { confirmPasswordRequest } from 'redux/actions/auth';
import { validatePass, validatePassConfirm } from './RegistrationForm';
import Input from 'components/UI/Input/Input';
import { Button } from 'reactstrap';

const ConfirmPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const notifyError = () =>
    toast.error('Oops! An error occured. Please try again later', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const initialValues: formValues = { password: '', confirmPassword: '' };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const oobCode = searchParams.get('oobCode');
          if (oobCode === null) {
            notifyError();
          } else {
            dispatch(confirmPasswordRequest(values.password, navigate, oobCode));
            actions.setSubmitting(false);
          }
        }}>
        {({ values }) => {
          return (
            <Form>
              <Input validate={validatePass} name="password" label="Password" />
              <Input
                validate={() => validatePassConfirm(values.confirmPassword, values.password)}
                name="confirmPassword"
                label="Confirm assword"
              />
              <ResetPassButton color="primary">Update password</ResetPassButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ConfirmPassword;

interface formValues {
  password: string;
  confirmPassword: string;
}

const ResetPassButton = styled(Button)`
  margin-top: 10px;
`;
