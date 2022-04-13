import { types } from 'redux/actions/auth';

const initialState = {
  answer: {},
  error: false,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SIGNIN_SUCCESS:
      return { answer: action.payload, error: false };
    case types.SIGNIN_FAILURE:
      return { answer: action.payload, error: true };
    default:
      return state;
  }
};
