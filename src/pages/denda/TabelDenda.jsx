import React, { Component } from 'react';
 
class TabelDenda extends Component {
 
    render() {
        const dataDenda = this.props.data;
        return (
            <tr className='hover'>
                <td class="border border-slate-700">{dataDenda.kodeDenda}</td>
                <td class="border border-slate-700">{dataDenda.nama}</td>
                <td class="border border-slate-700">{dataDenda.tglPinjam}</td>
                <td class="border border-slate-700">{dataDenda.tglKembali}</td>
                <td class="border border-slate-700">{dataDenda.telat}</td>
                <td class="border border-slate-700">{dataDenda.bayarDenda}</td>
                <td class="border border-slate-700">
                    <button className="btn btn-info px-8" onClick={() => this.props.update(dataDenda)} >Edit</button>
                    <button className="btn btn-error px-8" onClick={() => this.props.remove(dataDenda.id)} >Delete</button>
                </td>
            </tr>
        );
    }
}
 
export default TabelDenda;