import React, {useState, useCallback, useEffect} from 'react'
import FormInput from '../../SharedComponent/FormInput/FormInput';
import { signInStart } from  '../../../Redux/Actions/SignInAction';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
 
let count = 1;

const INITIAL_STATE = {
 email: '',
 password: ''
}
 count = count + 1;

 console.log(count);

function SignIn(props) {
   // console.log("Sign In",props);
 const [state, setSignin] = useState(INITIAL_STATE);
 const dispatch = useDispatch();

 const userToken = useSelector(state => state.User.token)
 
 const browserToken = JSON.parse(localStorage.getItem("token"));

//  console.log("browserToken>>>>>>>>>>>>",browserToken)

 useEffect(() => {
   if(userToken && Object.keys(userToken.user).length > 0){
      props.history.push("/console/allevents");
   }
 }, [props.history, userToken, browserToken ])


 const handleChange = useCallback(({target: {name, value}}) => {
  setSignin((prevState) => ({...prevState, [name]: value}) )
 }, [])

 function handleSignIn(e){
   e.preventDefault();
   dispatch(signInStart(state));
 }
 

 return (
  <div>
   <FormInput 
      label = "Email" 
      name = 'email' 
      type = "email" 
      value = {state.email} 
      onChange = {handleChange} 
   />
   <FormInput 
      label = "Password" 
      name = 'password' 
      type = 'password' 
      value = {state.password}  
      onChange = {handleChange} 
   />
   <button onClick = {handleSignIn}>Sign In</button>
</div>
 )
}

export default SignIn;