import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import gql from 'graphql-tag';

import client from '../../ApolloClient/ApolloClient';
import { signUpSuccess, signUpFail } from '../Actions/SignUpAction';

function* signUpSaga({payload: {firstName, lastName, email, password}}) {
   // console.log("Sign Up Saga --->", {firstName, lastName, email, password});
   try {
      const signUpQuery = gql`
      mutation signUpUser($firstName: String!, $lastName: String!, $email: String!, $password: String!){
         signUpUser(input: {
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
         })
         {
            firstName
            lastName
            email
            password
         }
      }`;
      const signUpData = yield client.mutate({
         variables: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
         },
         mutation: signUpQuery,
      });
      // const res = yield axios.post('/api/users/signUp', users);
      yield put(signUpSuccess(signUpData.data.signUpUser));
      yield toast.success("Success Fully SignUp Now Please Sign in with your rejistered email account");

      yield toast.success('signup', signUpData.data.signUpUser);
   } catch (error) {
      yield put(signUpFail(error));
      yield toast.error(`Error:${error.message}`);
   }
}

export default signUpSaga;
