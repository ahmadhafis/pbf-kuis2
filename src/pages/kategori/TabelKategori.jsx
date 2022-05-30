import React, { Component } from 'react';
 
class TabelKategori extends Component {
 
    render() {
        const dataKategori = this.props.data;
        return (
            <tr className='hover'>
                <td class="border border-slate-700">{dataKategori.kodekategori}</td>
                <td class="border border-slate-700">{dataKategori.kategori}</td>
                <td class="border border-slate-700">
                    <button className="btn btn-info px-8" onClick={() => this.props.update(dataKategori)} >Edit</button>
                    <button className="btn btn-error px-8" onClick={() => this.props.remove(dataKategori.id)} >Delete</button>
                </td>
            </tr>
        );
    }
}
 
export default TabelKategori;