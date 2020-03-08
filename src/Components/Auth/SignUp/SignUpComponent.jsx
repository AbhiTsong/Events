import React, {useState} from 'react'
import FormInput from '../../SharedComponent/FormInput/FormInput';
import { signUser } from '../../../Redux/Actions/SignUpAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const INITIAL_STATE = {
 firstName: '',
 lastName: '',
 email: '',
 password: '',
 confirmPassword: ''
}

function SignUp(props) {
 // console.log(props);
  const [state, setSignUp] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const userData = useSelector(state => state.User)

  
  React.useEffect(() => {
    // console.log("User Token =====>", userData);
    if(userData.users && Object.keys(userData.users).length > 0){
      props.history.replace("/signIn")
    }
  }, [userData.users, props.history, userData])

  //  console.log("User Data", userData.users);

  const handleChange = React.useCallback(({ target: { name, value }}) => {
    setSignUp((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSignUp = React.useCallback((e) => {
    e.preventDefault();

    const copyState = {...state};
    
    // copyState.password === copyState.confirmPassword 
      dispatch(signUser(copyState))
      // : alert("Your Passowrds Dont match");
  }, [state, dispatch]);

  return (
    <div className="SignUp">
    <FormInput name = "firstName" onChange = {handleChange} value = {state.firstName} label = "First Name"/>
    <FormInput name = "lastName" onChange = {handleChange} value = {state.lastName} label = "Last Name"/>
    <FormInput name = "email" onChange = {handleChange} value = {state.email} label = "Email"/>
    <FormInput name = "password" type="password" autoComplete="new-password" onChange = {handleChange} value = {state.password} label = "Password"/>
    <FormInput name = "confirmPassword" type="password" autoComplete="new-password" onChange = {handleChange} value = {state.confirmPassword} label = "Confirm Password"/>
    <button onClick={handleSignUp}>Signn Up</button>
    <div>
      <Link to='/auth/signin'>Sign In</Link>
   </div>
    </div>
  )
}

export default SignUp;
