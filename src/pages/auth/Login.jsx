import React from "react";
// import { Link } from "react-router-dom";
// import Register from "./Register";
// import Catalog from "../Catalog";

const Login = (props) => {

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;


  return (
    <div class="h-screen flex items-center justify-center py-40 px-16 sm:px-6 lg:px-8 bg-green-50">
    <div class="max-w-md w-full space-y-8 ">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        ></img>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login or Register
        </h2>
      </div>
    
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-300 focus:border-emerald-300 focus:z-10 sm:text-sm"
              placeholder="Email address"
            ></input>
            <p className="errorMsg">{emailError}</p>
          </div>
          <div>
            <label for="password" class="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-300 focus:border-emerald-300 focus:z-10 sm:text-sm"
              placeholder="Password"
            ></input>
            <p className="errorMsg">{passwordError}</p>
          </div>
        </div>
        <div>
          {hasAccount ? (
            <>
              <button
              onClick={handleLogin}
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Login
              </button>
              <p class="ml-2 block text-sm text-gray-900">Don't have an account ? {" "}
                <span class="font-medium text-emerald-600 hover:text-emerald-500" onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button
                onClick={handleSignup}
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Register
              </button>
              <p class="ml-2 block text-sm text-gray-900">Have an account ? {" "}
                <span class="font-medium text-emerald-600 hover:text-emerald-500" onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
             </p>
            </>
          )}
        </div>
        <div>
         
        </div>
      
    </div>
  </div>
  );
}

export default Login;