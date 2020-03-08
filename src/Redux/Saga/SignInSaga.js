import { put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import gql from 'graphql-tag';
import client from '../../ApolloClient/ApolloClient'

import { signInSuccess, signInFail } from '../Actions/SignInAction';

function *signInSaga({payload: {email, password}}){
 // console.log("Inside Sign IN saga ---> ", props);
 try{
  const signInQuery = gql`
  mutation signInUser($email: String!, $password: String!){
   signInUser(input:{
      email: $email
      password: $password
    }){
      token
      user{
        _id
        firstName
        lastName
        email
        password
      }
    }
  }`;

  const signInData = yield client.mutate({
   variables: {
    email: email,
    password: password,
   },
   mutation: signInQuery,
  })

const token = signInData.data.signInUser.token;
const user = signInData.data.signInUser.user;

yield put(signInSuccess(signInData.data.signInUser))
yield  localStorage.setItem("user", JSON.stringify(user));
yield  localStorage.setItem("token", JSON.stringify(token));

}catch(error){
   yield put(signInFail(error));
   yield toast.error("Error:", error.message)
 }
}

export default signInSaga;