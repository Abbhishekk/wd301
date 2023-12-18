import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [organisation, setOrganisation] = useState("");
    const navigate = useNavigate();
    localStorage.setItem("authenticated", "false");
  
    function handleSignin(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (username === "admin" && password === "admin") {
        localStorage.setItem("authenticated", "true");
        navigate("/home");
      } else {
        alert("Invalid username or password");
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

export default SignUp;