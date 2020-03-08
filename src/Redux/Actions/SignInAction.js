import {FormSignIn} from '../ActionTypes'

export function signInStart(userInfo){
 return{
  type: FormSignIn.SIGN_IN_START,
  payload: userInfo
 }
}

export function signInSuccess(userInfo){
return{
 type: FormSignIn.SIGN_IN_SUCCESS,
 payload: userInfo
 }
}

export function signInFail(error){
 return {
  type: FormSignIn.SIGN_IN_FAIL,
  payload: error
 }
}