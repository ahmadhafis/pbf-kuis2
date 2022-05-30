import React from "react";


const LandingPage = ({handleLogout}) => {
    return(
        <div style={{ 
          backgroundImage: `url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80")`
        }} className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-gray-50">Hello there</h1>
            <p className="mb-5 text-gray-50">Come see our book colection. There is 200+ books in here !</p>
            <div>
            <a
              href="/catalog"
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Get Started
            </a>
            </div>
            <div>
            <br/>
            <button
              onClick={handleLogout}
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Logout
            </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LandingPage;