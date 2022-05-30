import React, {Component} from "react";
import PostUser from "./PostUser";

class TabelUser extends Component {

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
        <div className="card-body bg-slate-50">
        <div className="card bg-teal-200">
          <div className="text-center text-4xl font-semibold">User</div>
          <div className="text-center">Berikut akun user yang terdaftar di perpustakaan</div>
        </div>

      <div className="container mx-auto">
          <div class="place-content-evenly">
              <div className="form-control">
                  <label htmlFor="nama">Nama : </label>
                  <input type="text" id="nama" name="nama" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleTambahUser} />
                  
                  <label htmlFor="email">Email : </label>
                  <input type="text" id="email" name="email" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleTambahUser} />
                  
                  <label htmlFor="password">Password : </label>
                  <input type="password" id="password" name="password" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleTambahUser} />
                  
                  <button className="btn btn-accent rounded-full" onClick={this.handleTombolSimpan}>Simpan</button>
              </div>
          </div>
      </div>

      <div className="h-screen card-body">
        <div class="overflow-x-auto">
          <table class="table-auto border-collapse w-full bg-gray-400">
            <thead>
              <tr>
                <th class="border border-slate-700">Nama</th>
                <th class="border border-slate-700">Email</th>
                <th class="border border-slate-700">Password</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listUser.map((user) => {
                return <PostUser
                key={user.id} 
                nama={user.nama}
                email={user.email}
                password={user.password}
                idUser={user.id}
                hapusUser={this.handleHapusUser} 
                />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }

}

export default TabelUser;