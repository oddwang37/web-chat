export const types = {
  SIGNIN_REQUEST: 'SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNIN_FAILURE: 'SIGNIN_FAILURE',
};

export const siginInRequest = () => ({
  type: types.SIGNIN_REQUEST,
});

export const signInSuccess = (answer: any) => ({
  type: types.SIGNIN_SUCCESS,
  payload: answer,
});

export const signInFailure = (error: string) => ({
  type: types.SIGNIN_FAILURE,
  payload: error,
});
