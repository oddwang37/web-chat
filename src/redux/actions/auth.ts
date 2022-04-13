export const types = {
  SIGNIN_REQUEST: 'SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNIN_FAILURE: 'SIGNIN_FAILURE',
};

export const siginInRequest = (email: string, password: string) => ({
  type: types.SIGNIN_REQUEST,
  payload: {
    email,
    password,
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
