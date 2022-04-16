import 'firebase/firestore';
import 'firebase/auth';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import {
  types,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  forgotPasswordSuccess,
  forgotPasswordFailure,
} from 'redux/actions/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA2rx-X0gLNmCS2c4ghJHYhhYbWUwuEd5M',

  authDomain: 'react-noorchat.firebaseapp.com',

  projectId: 'react-noorchat',

  storageBucket: 'react-noorchat.appspot.com',

  messagingSenderId: '976331836763',

  appId: '1:976331836763:web:60ea19a7b1407f53af9e7e',
};

initializeApp(firebaseConfig);

export function* signInSaga({ payload: { email, password, setErrors, navigate } }: any): any {
  try {
    const auth = yield getAuth();
    const result = yield call(signInWithEmailAndPassword, auth, email, password);
    yield put(signInSuccess(result));
    navigate('../main', { replace: true });
  } catch (error: any) {
    const mes = getErrorMessageFromCode(error.code);
    setErrors({ [mes.field]: mes.text });
    yield put(signInFailure(mes));
  }
}

export function* signUpSaga({ payload: { email, password, setErrors, navigate } }: any): any {
  try {
    const auth = yield getAuth();
    const result = yield call(createUserWithEmailAndPassword, auth, email, password);
    yield put(signUpSuccess(result));
    navigate('../main', { replace: true });
  } catch (error: any) {
    const mes = getErrorMessageFromCode(error.code);
    setErrors({ [mes.field]: mes.text });
    yield put(signUpFailure(mes));
  }
}

export function* forgotPasswordSaga({ payload: { email, setErrors } }: any): any {
  try {
    const auth = yield getAuth();
    const result = yield call(sendPasswordResetEmail, auth, email);
    yield put(forgotPasswordSuccess(result));
  } catch (error: any) {
    const mes = getErrorMessageFromCode(error.code);
    setErrors({ [mes.field]: mes.text });
    yield put(forgotPasswordFailure(mes));
  }
}

export function* watchSignInSaga() {
  yield takeLatest(types.SIGNIN_REQUEST, signInSaga);
}

export function* watchSignUpSaga() {
  yield takeLatest(types.SIGNUP_REQUEST, signUpSaga);
}

export function* watchForgotPasswordSaga() {
  yield takeLatest(types.FORGOTPASSWORD_REQUEST, forgotPasswordSaga);
}

export const getErrorMessageFromCode = (code: string) => {
  switch (code) {
    case 'auth/user-not-found':
      return { field: 'email', text: 'User not found' };
    case 'auth/wrong-password':
      return { field: 'password', text: 'Wrong password' };
    case 'auth/too-many-requests':
      return { field: 'email', text: 'Too many requests. Please, try  again later' };
    default:
      return { field: 'email', text: `An error occured: ${code}` };
  }
};
