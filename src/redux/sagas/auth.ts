import 'firebase/firestore';
import 'firebase/auth';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { toast } from 'react-toastify';

import {
  types,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  confirmPasswordSuccess,
  confirmPasswordFailure,
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

const notifyForgotPassSuccess = () =>
  toast.success('Successfull! Please check your e-mail for password reset link', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifyForgotPassFailure = (errorText: string) =>
  toast.error(errorText, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifyConfirmPassSuccess = () =>
  toast.success('Password successfully changed! Redirecting to log in page...', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
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

export function* forgotPasswordSaga({ payload: { email } }: any): any {
  try {
    const auth = yield getAuth();
    const result = yield call(sendPasswordResetEmail, auth, email);
    yield put(forgotPasswordSuccess(result));
    notifyForgotPassSuccess();
  } catch (error: any) {
    const mes = getErrorMessageFromCode(error.code);
    yield put(forgotPasswordFailure(mes));
    notifyForgotPassFailure(mes.text);
  }
}

export function* confirmPasswordSaga({ payload: { password, navigate, oobCode } }: any): any {
  try {
    const auth = yield getAuth();
    const result = yield call(confirmPasswordReset, auth, oobCode, password);
    yield put(confirmPasswordSuccess(result));
    notifyConfirmPassSuccess();
    setTimeout(() => {
      navigate('../login', { replace: true });
    }, 3000);
  } catch (error: any) {
    const mes = getErrorMessageFromCode(error.code);
    yield put(confirmPasswordFailure(mes));
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

export function* watchUpdatePasswordSaga() {
  yield takeLatest(types.CONFIRMPASSWORD_REQUEST, confirmPasswordSaga);
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
