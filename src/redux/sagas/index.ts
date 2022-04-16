import { call, all } from 'redux-saga/effects';
import { watchSignInSaga, watchSignUpSaga } from './auth';

export default function* rootSaga() {
  yield all([call(watchSignUpSaga), call(watchSignInSaga)]);
}
