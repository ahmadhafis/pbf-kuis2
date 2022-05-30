import React, { Component } from "react";
import { Link } from "react-router-dom";
import TabelDenda from "./TabelDenda";
import Alert from "./components/Alert";

class Denda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDenda: [],
      totalData: 0,
      isUpdate: false,
      Notif: {
        alertShow: false,
        actionType: "",
        responCode: 0,
      },
      insertDenda: {
        id: 1,
        kodeDenda: "",
        nama: "",
        tglPinjam: "",
        tglKembali: "",
        telat: "",
        bayarDenda: "",
      },
    };
  }

  componentDidMount() {
    this.getDataDenda();
  }

  getDataDenda() {
    fetch("http://localhost:3005/denda")
      .then((res) => {
        if (res.status === 200) return res.json();
        else return <p>No data Found</p>;
      })
      .then((resdata) => {
        console.log(resdata);
        this.setState({
          dataDenda: resdata,
          totalData: resdata.length
        });
      });
  }

  ClearForm = () => {
    this.setState({
      isUpdate: false,
      insertDenda: {
        id: 1,
        kodeDenda: "",
        nama: "",
        tglPinjam: "",
        tglKembali: "",
        telat: "",
        bayarDenda: "",
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
    const Newdata = this.state.insertDenda;
 
    fetch("http://localhost:3005/denda", {
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

        this.getDataDenda()
        this.ClearForm()
   });
  }

  handleTombolUpdate= () => {
    const dataUpdate = this.state.insertDenda;
    const id = dataUpdate.id;

    fetch(`http://localhost:3005/denda/${id}`, {
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

        this.getDataDenda()
        this.ClearForm()
    });
  }

  handleTombolHapus= (data) => {
    const id = data;
        
    fetch(`http://localhost:3005/denda/${id}`, {
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

        this.getDataDenda()
        this.ClearForm()
    });
  }

  handleOnChange=(event)=>{
    const NumberingId = this.state.totalData + 1; // Untuk ID New Data
    let catInsert = { ...this.state.insertDenda }; // Copy State
    if (!this.state.isUpdate) { //Cek Jika Update Data Idnya Tidak Di Ubah
        catInsert['id'] = NumberingId;
    }
    catInsert[event.target.name] = event.target.value;
    this.setState({
        insertDenda: catInsert
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
        insertDenda: data,
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
            <div className="text-center text-4xl font-semibold">Denda</div>
            <div className="text-center">Berikut adalah denda yang harus dibayarkan peminjam</div>
          </div>

        <div className="container mx-auto">
            <div class="place-content-evenly">
                <div className="form-control">
                    <label htmlFor="kodeDenda">Kode Denda : </label>
                    <input type="text" id="kodeDenda" name="kodeDenda" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertDenda.kodeDenda}/>
                    <label htmlFor="nama">Nama : </label>
                    <input type="text" id="nama" name="nama" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertDenda.nama}/>
                    <label htmlFor="tglPinjam">Tanggal Pinjam : </label>
                    <input type="text" id="tglPinjam" name="tglPinjam" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertDenda.tglPinjam}/>
                    <label htmlFor="tglKembali">No HP : </label>
                    <input type="text" id="tglKembali" name="tglKembali" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertDenda.tglKembali}/>
                    <label htmlFor="telat">Total Telat Pengembalian  : </label>
                    <input type="text" id="telat" name="telat" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertDenda.telat}/>
                    <label htmlFor="bayarDenda">Total Denda : </label>
                    <input type="text" id="bayarDenda" name="bayarDenda" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertDenda.bayarDenda}/>
                    <button className="btn btn-accent rounded-full" onClick={this.handleSimpan}>Simpan</button>
                </div>
            </div>
        </div>

        <div className="h-screen card-body">
        <Alert data={this.state.Notif}/>
          <div class="overflow-x-auto">
          <div class="text-center">Total data {this.state.totalData} record</div>
            <table class="table-auto border-collapse w-full bg-gray-400">
              <thead>
                <tr>
                  <th class="border border-slate-700">#Code </th>
                  <th class="border border-slate-700">Nama</th>
                  <th class="border border-slate-700">Tanggal Pinjam</th>
                  <th class="border border-slate-700">Tanggal Kembali</th>
                  <th class="border border-slate-700">Total Telat Pengembalian</th>
                  <th class="border border-slate-700">Total Denda</th>
                </tr>
              </thead>
              <tbody>
                {this.state.dataDenda.map((dataDenda) => {
                  return <TabelDenda key={dataDenda.id} data={dataDenda} update={this.handleUpdate} remove={this.handleDelete}/>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Denda;