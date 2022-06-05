import React, { useEffect, useState } from "react";
import BookDataService from "./book.services";


const BookTable = ({ getBookId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);


  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };

    return (

        <div className="h-screen card-body">
            <button class="btn btn-primary" onClick={getBooks}>
          Refresh List
        </button>
        {/* <Alert data={this.state.Notif}/> */}
          <div class="overflow-x-auto">
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
                {books.map((doc) => {
                    return(
                  <tr className='hover' key={doc.id}>
                  <td class="border border-slate-700">{doc.kodebuku}</td>
                  <td class="border border-slate-700">{doc.judul}</td>
                  <td class="border border-slate-700">{doc.author}</td>
                  <td class="border border-slate-700">{doc.penerbit}</td>
                  <td class="border border-slate-700">{doc.deskripsi}</td>
                  <td class="border border-slate-700">{doc.stok}</td>
                  <td class="border border-slate-700">
                      <button class="btn btn-info px-8" onClick={(e) => getBookId(doc.id)}>Edit</button>
                      <button className="btn btn-error px-8" onClick={(e) => deleteHandler(doc.id)} >Delete</button>
                  </td>
              </tr>
                    )
                }) 
              }
              </tbody>
            </table>
          </div>
        </div>
    );
}

export default BookTable;
