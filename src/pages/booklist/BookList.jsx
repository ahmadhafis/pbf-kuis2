import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Alert from "./components/Alert";
import fire from "../../Config/Config";


class BookList extends Component {
  constructor(props) {
    super(props);
    this.ref = fire.firestore().collection('books');
    this.unsubscribe = null;
    this.state ={
      books: []
    };
  }


  onCollectionUpdate = (querySnapshot) => {
    const books =[];
    querySnapshot.forEach((doc) => {
      const { kodebuku, judul, author, penerbit, deskripsi, stok } = doc.data();
      books.push({
        key: doc.id,
        doc,
        kodebuku,
        judul,
        author,
        penerbit,
        deskripsi,
        stok,
      });
    });
    this.setState({
      books
    });
  }
  componentDidMount() {
    this.unsubscribe= this.ref.onSnapshot(this.onCollectionUpdate);
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
      <div className="card-body bg-slate-50">
          <div className="card bg-teal-200">
            <div className="text-center text-4xl font-semibold">Book List</div>
            <div className="text-center">Lots of book</div>
          </div>

        <div className="h-screen card-body">
        {/* <Alert data={this.state.Notif}/> */}
          <div class="overflow-x-auto">
          <a href="createbook" type="submit" class="btn btn-primary">Create</a>
            <table class="table-auto border-collapse w-full bg-gray-400">
              <thead>
                <tr>
                  <th class="border border-slate-700">#Code</th>
                  <th class="border border-slate-700">Judul</th>
                  <th class="border border-slate-700">Author</th>
                  <th class="border border-slate-700">Penerbit</th>
                  <th class="border border-slate-700">Deskripsi</th>
                  <th class="border border-slate-700">Stok</th>
                  <th class="border border-slate-700"> Options</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map((book) => 
                   <tr className='hover'>
                   <td class="border border-slate-700">{book.kodebuku}</td>
                   <td class="border border-slate-700">{book.judul}</td>
                   <td class="border border-slate-700">{book.author}</td>
                   <td class="border border-slate-700">{book.penerbit}</td>
                   <td class="border border-slate-700">{book.deskripsi}</td>
                   <td class="border border-slate-700">{book.stok}</td>
                   <td class="border border-slate-700">
                       <Link to={`editbook/${this.state.key}`} class="btn btn-info px-8">Edit</Link>
                       <button className="btn btn-error px-8" onClick={this.delete.bind(this, this.state.key)} >Delete</button>
                   </td>
               </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
