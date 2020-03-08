import { takeLatest, all } from 'redux-saga/effects';
import { FormSignUp, FormSignIn } from '../ActionTypes';
import signUpSaga from './SignUpSaga';
import signInSaga from './SignInSaga';

export default function* watcherSaga(){
 yield all([
  takeLatest(FormSignUp.SIGN_UP_START, signUpSaga),
  takeLatest(FormSignIn.SIGN_IN_START, signInSaga)
 ]);
}