import { Navigate } from "react-router-dom";

export const Signout = () =>{
  localStorage.removeItem('userData');
    return <Navigate to={"/signin"} />
  }