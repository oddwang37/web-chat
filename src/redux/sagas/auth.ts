import 'firebase/firestore';
import 'firebase/auth';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import { types, signInSuccess, signInFailure } from 'redux/actions/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA2rx-X0gLNmCS2c4ghJHYhhYbWUwuEd5M',

  authDomain: 'react-noorchat.firebaseapp.com',

  projectId: 'react-noorchat',

  storageBucket: 'react-noorchat.appspot.com',

  messagingSenderId: '976331836763',

  appId: '1:976331836763:web:60ea19a7b1407f53af9e7e',
};

initializeApp(firebaseConfig);

export function* signInSaga({ payload: { email, password, setErrors } }: any): any {
  try {
    const auth = yield getAuth();
    const result = yield call(signInWithEmailAndPassword, auth, email, password);
    yield put(signInSuccess(result));
  } catch (error: any) {
    const mes = getErrorMessageFromCode(error.code);
    setErrors({ [email]: mes });
    yield put(signInFailure(mes));
  }
}

export function* watchSignInSaga() {
  yield takeLatest(types.SIGNIN_REQUEST, signInSaga);
}

const getErrorMessageFromCode = (code: string) => {
  switch (code) {
    case 'auth/user-not-found':
      return 'User not found';
    case 'auth/wrong-password':
      return 'Wrong password!';
    default:
      return `An error occured: ${code}`;
  }
};
