import React, {useState, useEffect} from 'react';
import './NavBarStyles.scss'
import { Link } from 'react-router-dom';

function NavBar(){

 const [userStatus, setUseStatus] = useState({});

 useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  setUseStatus(user)
 }, [])

 return(
  <nav className="nav-heading">
   <h1>Logo</h1>
   <div>
    <h3>Create Event</h3>
    {
     userStatus
      ? <Link
         to="/auth/signin"
         onClick={() => localStorage.clear()}>
         <h3> Log Out </h3>
        </Link>
      : <Link
         to="/auth/signin">
          <h3> SignUp </h3>
         </Link>
    }
   </div>
  </nav>
 )
}

export default NavBar;