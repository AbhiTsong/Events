import { FormSignUp, FormSignIn } from "../ActionTypes";

const INITAIL_STATE = {
 loading: true,
 user: {},
 error: "",
 token: null,
 isLoggedIn: false
};

export function UserReducer(state = INITAIL_STATE, action){
  switch(action.type){
     case FormSignUp.SIGN_UP_START:
      return{
       ...state,
      };
      case FormSignIn.SIGN_IN_START:
        return{
          ...state
        };
      case FormSignUp.SIGN_UP_SUCCESS:
       return{
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload,
       };
       case FormSignIn.SIGN_IN_SUCCESS:
         return{
           ...state,
           loading: false,
           isLoggedIn: true,
           token: action.payload,
         }
      case FormSignUp.SIGN_UP_FAIL:
       return{
        ...state,
        loading: false,
        error: action.payload
       };
       case FormSignIn.SIGN_IN_FAIL:
         return{
           ...state,
           loading: false,
           error: action.payload
         }
      default: return state
  }
}