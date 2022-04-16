import { FormikErrors } from 'formik';

export const types = {
  SIGNIN_REQUEST: 'SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNIN_FAILURE: 'SIGNIN_FAILURE',
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',
};

export const siginInRequest = (
  email: string,
  password: string,
  setErrors: (errors: FormikErrors<any>) => void,
  navigate: any,
) => ({
  type: types.SIGNIN_REQUEST,
  payload: {
    email,
    password,
    setErrors,
    navigate,
  },
});

export const signInSuccess = (answer: any) => ({
  type: types.SIGNIN_SUCCESS,
  payload: answer,
});

export const signInFailure = (error: string | unknown) => ({
  type: types.SIGNIN_FAILURE,
  payload: error,
});

export const signUpRequest = (
  email: string,
  password: string,
  setErrors: (errors: FormikErrors<any>) => void,
  navigate: any,
) => ({
  type: types.SIGNUP_REQUEST,
  payload: {
    email,
    password,
    setErrors,
    navigate,
  },
});

export const signUpSuccess = (answer: any) => ({
  type: types.SIGNUP_SUCCESS,
  payload: answer,
});

export const signUpFailure = (error: string | unknown) => ({
  type: types.SIGNUP_FAILURE,
  payload: error,
});
