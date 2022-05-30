import React, { Component } from 'react';
// import firebase from "./components/Firebase";
 
class TabelPeminjaman extends Component {
 
    render() {
        const dataPeminjaman = this.props.data;
        return (
            <tr className='hover'>
                <td class="border border-slate-700">{dataPeminjaman.kodePeminjaman}</td>
                <td class="border border-slate-700">{dataPeminjaman.nama}</td>
                <td class="border border-slate-700">{dataPeminjaman.alamat}</td>
                <td class="border border-slate-700">{dataPeminjaman.hp}</td>
                <td class="border border-slate-700">{dataPeminjaman.email}</td>
                <td class="border border-slate-700">{dataPeminjaman.hp}</td>
                <td class="border border-slate-700">
                    <button className="btn btn-info px-8" onClick={() => this.props.update(dataPeminjaman)} >Edit</button>
                    <button className="btn btn-error px-8" onClick={() => this.props.remove(dataPeminjaman.id)} >Delete</button>
                </td>
            </tr>
        );
    }
}
 
export default TabelPeminjaman;