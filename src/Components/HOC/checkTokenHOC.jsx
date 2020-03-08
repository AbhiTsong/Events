import React from 'react';
import { Link } from 'react-router-dom'

function CheckAuthToken(IncomingComponent){
 
 console.log("HOC >>>>>>", IncomingComponent);
 class AuthToken extends React.Component{
  
  checkToken(){
   let authToken = localStorage.getItem("token");
   if(authToken){
    return true;
   }
  }


   render(){
    if(!this.checkToken()){
     console.log("auth token", this.checkToken());
    return <Link to="/auth/signin" />
   }
   return (
     <IncomingComponent />
   )
  }
 }
 return AuthToken;
}

export default CheckAuthToken;