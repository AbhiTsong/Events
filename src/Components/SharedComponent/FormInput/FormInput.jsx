import React from 'react'

function FormInput(props) {
 return (
  <div>
  <form>
   <label>{props.label}</label><br/>
   <input 
    {...props}
   />
  </form>
  <br/>
  </div>
 )
}

export default FormInput 