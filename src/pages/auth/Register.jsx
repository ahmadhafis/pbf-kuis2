import React, {Component} from "react";

class Register extends Component {

  state = {
      listUser: [],
      insertUser: {
          id: 1,
          nama: "",
          email: "",
          password: ""
      }
  }

  ambilDataDariServerAPI = () => {
      fetch('http://localhost:3001/posts')
          .then(response => response.json())
          .then(jsonHasilAmbilDariAPI => {
              this.setState({
                  listUser: jsonHasilAmbilDariAPI
              })
          })
  }

  componentDidMount() {
      this.ambilDataDariServerAPI()
  }

  handleHapusUser = (data) => {
      fetch(`http://localhost:3001/posts/${data}`, { method: 'DELETE' })
          .then(res => {
              this.ambilDataDariServerAPI()
          })
  }

  handleTambahUser = (event) => {
      let formInsertUser = { ...this.state.insertUser };
      let timestamp = new Date().getTime();
      formInsertUser['id'] = timestamp;
      formInsertUser[event.target.name] = event.target.value;
      this.setState({
          insertUser: formInsertUser
      });
  }

  handleTombolSimpan = () => {
      fetch('http://localhost:3001/posts', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.insertUser)
      })

          .then((Response) => {
              this.ambilDataDariServerAPI();
          });
  }

  render() {
    return (
      <div className="h-screen flex items-center justify-center py-40 px-16 sm:px-6 lg:px-8 bg-green-50">
      <div className="max-w-md w-full space-y-8 ">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          ></img>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register to get Account
          </h2>
        </div>

        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true"></input>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="name" className="sr-only">
                Name
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                onChange={this.handleTambahUser}
                autocomplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-300 focus:border-emerald-300 focus:z-10 sm:text-sm"
                placeholder="Name"
              ></input>
            </div>

            <div>
              <label for="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="text"
                onChange={this.handleTambahUser}
                autocomplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-300 focus:border-emerald-300 focus:z-10 sm:text-sm"
                placeholder="Email address"
              ></input>
            </div>
            
            <div>
              <label for="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={this.handleTambahUser}
                autocomplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-300 focus:border-emerald-300 focus:z-10 sm:text-sm"
                placeholder="Password"
              ></input>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-emerald-200 focus:ring-emerald-500 border-gray-300 rounded"
              ></input>
              <label for="remember-me" className="ml-2 block text-sm text-gray-900">
                {" "}
                Remember me{" "}
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div>

          <div>
          <a 
            href="/users"
          type="submit" 
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" 
          onClick={this.handleTombolSimpan} >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          Sign In</a>
          {/* <button
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          type="submit"
          onClick={this.handleTombolSimpan}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            Sign Up</button> */}
          </div>
        </form>
      </div>
    </div>
            
    );
  }

}

export default Register;