import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../../config/constants";
import { SubmitHandler, useForm } from "react-hook-form";


type Inputs={
  email: string;
  password: string;
  remember: boolean;
}
const  SigninForm: React.FC = ()=> {
 
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const navigate = useNavigate();
  localStorage.setItem("authenticated", "false");

  
  const [showPassword, setShowPassword] = useState(false);
  const [showHide, setShowHide] = useState("show");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email,password, remember } = data
    console.log(email, password, remember)
    // Next, I'll call the addProject function with two arguments: 
    //`dispatchProjects` and an object with `name` attribute. 
    // As it's an async function, we will await for the response.
    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email, password: password}),
        });
  
        if (!response.ok) {
          throw new Error('Sign-in failed');
        }
        console.log('Sign-in successful');
        const data = await response.json();
       localStorage.setItem('authenticated', "true");

       localStorage.setItem('authToken', data.token);
      
      localStorage.setItem('userData', JSON.stringify(data.user));
     
     
    // After successful signin, first we will save the token in localStorage
    
    navigate("/account"); 
  } catch (error) {
      console.error('Sign-in failed:', error);
      
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sign In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email",{required: true})}
             
              placeholder="Enter your Email"
              className="w-full border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mt-4 ">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <div className="relative w-full">
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <input className="hidden js-password-toggle" id="toggle" type="checkbox" value={showPassword?"true":"fale"}
                onChange={() =>{
                  setShowPassword((prev) => !prev)
                  !showPassword?setShowHide("Hide"):setShowHide("Show")

                }
                  
                } />
              <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-slate-600 font-mono cursor-pointer js-password-label" htmlFor="toggle">{showHide}</label>
            </div>
            <input
              type={
                showPassword ? "text" : "password"
              }
              id="password"
             { ...register("password", {required: true})}
              
              placeholder="Enter your password"
              className="w-full border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            />
         {errors.password && <span>This field is required</span>}
          </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <input type="checkbox" name="rememberMe" id="rememberMe" className="accent-pink-500" />
              <label htmlFor="rememberMe" className=" text-gray-700 font-semibold mb-2 "> Remember me</label>

            </div>
            <div>
              <a href="/forgotpassword" className="text-blue-700 font-semibold mb-2">Forgot Password?</a>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray"
            >
              Sign In
            </button>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="/signup" className="text-blue-700 font-semibold mb-2">New here? Create new account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;