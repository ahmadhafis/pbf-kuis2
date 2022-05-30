import React, { Component } from "react";
import { Link } from "react-router-dom";
import TabelKategori from "./TabelKategori"
import Alert from "./components/Alert";

class Kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKategori: [],
      totalData: 0,
      isUpdate: false,
      Notif: {
        alertShow: false,
        actionType: "",
        responCode: 0,
      },
      insertKategori: {
        id: 1,
        kodekategori: "",
        kategori: "",
      },
    };
  }

  componentDidMount() {
    this.getDataCategories();
  }

  getDataCategories() {
    fetch("http://localhost:3007/categories")
      .then((res) => {
        if (res.status === 200) return res.json();
        else return <p>No data Found</p>;
      })
      .then((resdata) => {
        console.log(resdata);
        // console.log('Numrow', resdata.length)
        this.setState({
          dataKategori: resdata,
          totalData: resdata.length
        });
      });
  }

  ClearForm = () => {
    this.setState({
      isUpdate: false,
      insertKategori: {
        id: 1,
        kodekategori: "",
        kategori: "",
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
    const Newdata = this.state.insertKategori;
 
    fetch("http://localhost:3007/categories", {
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

        this.getDataCategories()
        this.ClearForm()
   });
  }

  handleTombolUpdate= () => {
    const dataUpdate = this.state.insertKategori;
    const id = dataUpdate.id;

    fetch(`http://localhost:3007/categories/${id}`, {
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

        this.getDataCategories()
        this.ClearForm()
    });
  }

  handleTombolHapus= (data) => {
    const id = data;
        
    fetch(`http://localhost:3007/categories/${id}`, {
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

        this.getDataCategories()
        this.ClearForm()
    });
  }

  handleOnChange=(event)=>{
    const NumberingId = this.state.totalData + 1; // Untuk ID New Data
    let catInsert = { ...this.state.insertKategori }; // Copy State
    if (!this.state.isUpdate) { //Cek Jika Update Data Idnya Tidak Di Ubah
        catInsert['id'] = NumberingId;
    }
    catInsert[event.target.name] = event.target.value;
    this.setState({
        insertKategori: catInsert
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
    console.log('Update arry', data);
    this.setState({
        insertKategori: data,
        isUpdate: true
    })
  }

  handleDelete = (data) => {
    console.log('Id delete =', data)
    const id = data;

    if (window.confirm('Apakah data ' + id + ' ?')) {
        this.handleTombolHapus(id)
    }
  }

  render() {
    return (
      <div className="card-body bg-slate-50">
          <div className="card bg-teal-200">
            <div className="text-center text-4xl font-semibold">Kategori</div>
            <div className="text-center">Berikut kategori yang terdaftar di perpustakaan</div>
          </div>

        <div className="container mx-auto">
            <div class="place-content-evenly">
                <div className="form-control">
                    <label htmlFor="kodekategori">Kode Kategori : </label>
                    <input type="text" id="kodekategori" name="kodekategori" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertKategori.kodekategori}/>
                    <label htmlFor="kategori">Kategori : </label>
                    <input type="text" id="kategori" name="kategori" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" onChange={this.handleOnChange} value={this.state.insertKategori.kategori}/>
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
                  <th class="border border-slate-700">#Code</th>
                  <th class="border border-slate-700">Kategori</th>
                  <th class="border border-slate-700"> Options</th>
                </tr>
              </thead>
              <tbody>
                {this.state.dataKategori.map((dataKategori) => {
                  return <TabelKategori key={dataKategori.id} data={dataKategori} update={this.handleUpdate} remove={this.handleDelete}/>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Kategori;