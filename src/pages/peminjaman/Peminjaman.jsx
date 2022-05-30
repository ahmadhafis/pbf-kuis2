import React, { Component } from "react";
import { Link } from "react-router-dom";
import TabelPeminjaman from "./TabelPeminjaman";
import Alert from "./components/Alert";
// import firebase from "./components/Firebase";

class Peminjaman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPeminjaman: [],
      totalData: 0,
      isUpdate: false,
      Notif: {
        alertShow: false,
        actionType: "",
        responCode: 0,
      },
      insertPeminjaman: {
        id: 1,
        kodePeminjam: "",
        nama: "",
        alamat: "",
        hp: "",
        email: "",
        buku: "",
      },
    };
  }

  componentDidMount() {
    this.getDataPeminjaman();
  }

  getDataPeminjaman() {
    fetch("http://localhost:3002/peminjaman")
      .then((res) => {
        if (res.status === 200) return res.json();
        else return <p>No data Found</p>;
      })
      .then((resdata) => {
        console.log(resdata);
        // console.log('Numrow', resdata.length)
        this.setState({
          dataPeminjaman: resdata,
          totalData: resdata.length
        });
      });
  }

  ClearForm = () => {
    this.setState({
      isUpdate: false,
      insertPeminjaman: {
        id: 1,
        kodePeminjam: "",
        nama: "",
        alamat: "",
        hp: "",
        email: "",
        buku: "",
      },
    });

    // Mengembalikan Nilai Awal Notif
    setInterval(() => {
      this.setState({
        Notif: {
          alertShow: false,
          actionType: "",
          responCode: 0,
        },
      });
    }, 4500);
  };

  handleTombolSimpan= () => {
    const Newdata = this.state.insertPeminjaman;
 
    fetch("http://localhost:3002/peminjaman", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Newdata)
    }).then((res) => {
        console.log(res)
        console.log("Status Create", res.status)

        // Untuk Tampung respon Dari Server
        this.setState({
            Notif: {
                alertShow: true,
                actionType: 'created',
                responCode: res.status,
            }
        })

        this.getDataPeminjaman()
        this.ClearForm()
   });
  }

  handleTombolUpdate= () => {
    const dataUpdate = this.state.insertPeminjaman;
    const id = dataUpdate.id;

    fetch(`http://localhost:3002/peminjaman/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    }).then((res) => {
        console.log(res)
        console.log("Status Update", res.status)

        // Untuk Tampung respon Dari Server
        this.setState({
            Notif: {
                alertShow: true,
                actionType: 'updated',
                responCode: res.status,
            }
        })

        this.getDataPeminjaman()
        this.ClearForm()
    });
  }

  handleTombolHapus= (data) => {
    const id = data;
        
    fetch(`http://localhost:3002/peminjaman/${id}`, {
        method: 'DELETE',
    }).then((res) => {
        console.log(res)
        console.log("Status Delete", res.status)

        // Untuk Tampung respon Dari Server
        this.setState({
            Notif: {
                alertShow: true,
                actionType: 'deleted',
                responCode: res.status,
            }
        })

        this.getDataPeminjaman()
        this.ClearForm()
    });
  }

  handleOnChange=(event)=>{
    const NumberingId = this.state.totalData + 1; // Untuk ID New Data
    let catInsert = { ...this.state.insertPeminjaman }; // Copy State
    if (!this.state.isUpdate) { //Cek Jika Update Data Idnya Tidak Di Ubah
        catInsert['id'] = NumberingId;
    }
    catInsert[event.target.name] = event.target.value;
    this.setState({
        insertPeminjaman: catInsert
    })
  }

  handleSimpan = () => {
    if (this.state.isUpdate) {
        this.handleTombolUpdate();
    } else {
        this.handleTombolSimpan();
    }
  }

  handleUpdate = (data) => {
    console.log('Update id', data.id);
    console.log('Update array', data);
    this.setState({
        insertPeminjaman: data,
        isUpdate: true
    })
  }

  handleDelete = (data) => {
    console.log('Id delete =', data)
    const id = data;

    if (window.confirm('Apakah data pada id ke' + id + 'akan dihapus ?')) {
        this.handleTombolHapus(id)
    }
  }

  render() {
    return (
      <div className="card-body bg-slate-50">
          <div className="card bg-teal-200">
            <div className="text-center text-4xl font-semibold">Peminjaman</div>
            <div className="text-center">Berikut peminjam yang terdaftar di perpustakaan</div>
          </div>

        <div className="container mx-auto">
            <div class="place-content-evenly">
                <div className="form-control">
                    <label htmlFor="kodekategori">Kode Peminjam : </label>
                    <input type="text" id="kodePeminjam" name="kodePeminjam" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertPeminjaman.kodePeminjam}/>
                    <label htmlFor="kategori">Nama : </label>
                    <input type="text" id="nama" name="nama" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertPeminjaman.nama}/>
                    <label htmlFor="kategori">Alamat : </label>
                    <input type="text" id="alamat" name="alamat" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertPeminjaman.alamat}/>
                    <label htmlFor="kategori">No HP : </label>
                    <input type="text" id="hp" name="hp" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertPeminjaman.hp}/>
                    <label htmlFor="kategori">Email : </label>
                    <input type="text" id="email" name="email" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertPeminjaman.email}/>
                    <label htmlFor="kategori">Judul Buku : </label>
                    <input type="text" id="buku" name="buku" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertPeminjaman.buku}/>
                    <button className="btn btn-accent rounded-full" onClick={this.handleSimpan}>Simpan</button>
                </div>
            </div>
        </div>

        <div className="h-screen card-body">
        <Alert data={this.state.Notif}/>
          <div class="overflow-x-auto">
          <div class="text-center">Total data Peminjam ada {this.state.totalData} record</div>
            <table class="table-auto border-collapse w-full bg-gray-400">
              <thead>
                <tr>
                  <th class="border border-slate-700">Kode Peminjam {this.state.kodePeminjam} </th>
                  <th class="border border-slate-700">Nama</th>
                  <th class="border border-slate-700">Alamat</th>
                  <th class="border border-slate-700">Email</th>
                  <th class="border border-slate-700">No HP</th>
                  <th class="border border-slate-700">Judul Buku</th>
                </tr>
              </thead>
              <tbody>
                {this.state.dataPeminjaman.map((dataPeminjaman) => {
                  return <TabelPeminjaman key={dataPeminjaman.id} data={dataPeminjaman} update={this.handleUpdate} remove={this.handleDelete}/>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Peminjaman;