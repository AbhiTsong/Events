import { FormSignUp } from '../ActionTypes';

export function signUser(user){
 return{
  type: FormSignUp.SIGN_UP_START,
  payload: user
 }
};

export function signUpSuccess(user){
  return{
   type: FormSignUp.SIGN_UP_SUCCESS,
   payload: user
  }
};

export function signUpFail(error){
 return{
  type: FormSignUp.SIGN_UP_FAIL,
  payload: error
 }
}