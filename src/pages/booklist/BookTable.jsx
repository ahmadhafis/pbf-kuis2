import { doc } from 'firebase/firestore';
import React, { Component } from 'react';
import fire from '../../Config/Config';
import { Link } from 'react-router-dom';
 
class BookTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            book: {},
            key: ''
        };
    }

    componentDidMount() {
        const ref = fire.firestore().collection('books').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    book: doc.data(),
                    key: doc.id,
                    isLoading: false
                });
            } else {
                console.log("Tidak ada dokumen!");
            }
        });
    }

    delete(id) {
        fire.firestore().collection('books').doc(id).delete().then(() => {
            console.log("Dokumen berhasil di-hapus");
            this.props.history.push("/booklist")
        }).catch((error) => {
            console.error("data di-hapus mengalami error: ", error);
        });
    }
    
 
    render() {
        
        return (
            <tr className='hover'>
                <td class="border border-slate-700">{this.state.book.kodebuku}</td>
                <td class="border border-slate-700">{this.state.book.judul}</td>
                <td class="border border-slate-700">{this.state.book.author}</td>
                <td class="border border-slate-700">{this.state.book.penerbit}</td>
                <td class="border border-slate-700">{this.state.book.deskripsi}</td>
                <td class="border border-slate-700">{this.state.book.stok}</td>
                <td class="border border-slate-700">
                    <Link to={`/booklist/editbook/${this.state.key}`} class="btn btn-info px-8">Edit</Link>
                    <button className="btn btn-error px-8" onClick={this.delete.bind(this, this.state.key)} >Delete</button>
                </td>
            </tr>
        );
    }
}
 
export default BookTable;