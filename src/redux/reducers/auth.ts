import { types } from 'redux/actions/auth';

const initialState = {
  answer: {},
  error: '',
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SIGNIN_SUCCESS:
      return { answer: action.payload, error: '' };
    case types.SIGNIN_FAILURE:
      return { answer: state.answer, error: action.payload };
    case types.SIGNUP_SUCCESS:
      return { answer: action.payload, error: '' };
    case types.SIGNUP_FAILURE:
      return { answer: action.payload, error: '' };
    case types.FORGOTPASSWORD_SUCCESS:
      return state;
    case types.FORGOTPASSWORD_FAILURE:
      return state;
    case types.CONFIRMPASSWORD_SUCCESS:
      return { answer: action.payload, error: '' };
    case types.CONFIRMPASSWORD_FAILURE:
      return { answer: action.payload, error: '' };
    default:
      return state;
  }
};
