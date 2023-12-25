import React, { useEffect } from 'react';
import SigninForm from './SigninForm';

// Let's define the Signin component
const Signin: React.FC = () => {
  useEffect(()=>{
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken")
  })
  return (
    <SigninForm />
  );
}

//And finally, we've to export the component
export default Signin;