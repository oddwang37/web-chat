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
    default:
      return state;
  }
};
