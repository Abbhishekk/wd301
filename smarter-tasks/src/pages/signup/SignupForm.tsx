import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from '../../config/constants';
const SignupForm: React.FC = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [organisation, setOrganisation] = useState("");
    const navigate = useNavigate();
    localStorage.setItem("authenticated", "false");
  
    const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await fetch(`${API_ENDPOINT}/organisations`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: organisation, user_name: username, email: email, password: password}),
        });
  
        if (!response.ok) {
          throw new Error('Sign-up failed');
        }
        console.log('Sign-up successful');
        const data = await response.json();

    // if successful, save the token in localStorage
    localStorage.setItem('authToken', data.token);
    navigate("/account")
        // Dialogue: After successful signup we have to redirect the user to the secured page. We will do that later.
      } catch (error) {
        console.error('Sign-up failed:', error);
      }
    }
    const [showPassword, setShowPassword] = useState(false);
    const [showHide, setShowHide] = useState("show");
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sign Up
        </h2>
        <form onSubmit={handleSignin}>
            <div>
            <label
              htmlFor="organisationName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Organisation Name
            </label>
            <input
              type="text"
              id="organisationName"
              name="organisationName"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
              placeholder="Enter your organisation name"
              className="w-full border rounded-md py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            />
            </div>
          <div className="mt-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full border rounded-md py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-full border rounded-md py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            />
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
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-md py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            />
         
          </div>
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray"
            >
              Create account
            </button>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="/signin" className="text-blue-700 font-semibold mb-2">Have an account? Login Here</a>
          </div>
        </form>
      </div>
    </div>
    )
}

export default SignupForm;