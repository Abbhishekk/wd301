import { Navigate } from "react-router-dom";

export const Signout = () =>{
    localStorage.setItem("authenticated", "false");
    return <Navigate to={"/signin"} />
  }