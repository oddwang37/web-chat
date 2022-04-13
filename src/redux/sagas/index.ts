import { watchSignInSaga } from './auth';

export default function* rootSaga() {
  yield watchSignInSaga();
}
