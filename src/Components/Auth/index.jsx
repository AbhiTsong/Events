import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SignUp from './SignUp/SignUpComponent';
import SignIn from './SignIn/SignIn'



function Auth(props) {

 const {
  match: { path },
  } = props;

const signInPath = `${path}/signin`;
const signUpPath = `${path}/signup`

 return (
  <div>
   <Switch>
    <Route  path={signInPath} component = {SignIn}/>
    <Route  path={signUpPath} component = {SignUp}/>
    <Redirect from={path} to={signInPath} />
   </Switch>
  </div>
 )
}

export default Auth;
