import 'firebase/firestore';
import 'firebase/auth';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA2rx-X0gLNmCS2c4ghJHYhhYbWUwuEd5M',

  authDomain: 'react-noorchat.firebaseapp.com',

  projectId: 'react-noorchat',

  storageBucket: 'react-noorchat.appspot.com',

  messagingSenderId: '976331836763',

  appId: '1:976331836763:web:60ea19a7b1407f53af9e7e',
};

initializeApp(firebaseConfig);

export function* signInSaga(action: any): any {
  try {
    const auth = yield getAuth();
    const result = yield call(signInWithEmailAndPassword, auth, 'vladislav@gmail.com', 'qwe123qwe');
    yield put({ type: 'SIGNIN_SUCCESS', payload: result });
  } catch (error) {
    const errorMessage = error;
    yield put({ type: 'SIGNIN_FAILURE', payload: errorMessage });
  }
}

export function* watchSignInSaga() {
  yield takeLatest('SIGNIN_REQUEST', signInSaga);
}
