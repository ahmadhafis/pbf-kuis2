import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../../Config/Config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const CreateBookList = () => {
  const [kodebuku, setKodeBuku] = useState("");
  const [judul, setJudul] = useState("");
  const [author, setAuthor] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [stok, setStok] = useState("");

  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "books"), {
        kodebuku: kodebuku,
        judul: judul,
        author: author,
        penerbit: penerbit,
        deskripsi: deskripsi,
        stok: stok,
        created: Timestamp.now(),
      }).then(() => {
        history.push('/booklist');
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className="create-book">
        <div className="card-body bg-slate-50">
          <div className="card bg-teal-200">
            <div className="text-center text-4xl font-semibold">Edit Book</div>
            <div className="text-center">Edit book here</div>
            <a href="/booklist" class="btn btn-secondary">
              Back
            </a>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="h-screen container mx-auto">
              <div class="place-content-evenly">
                <div className="form-control space-y-2">
                  <label htmlFor="kodebuku">Kode Buku :</label>
                  <input
                    type="text"
                    id="kodebuku"
                    name="kodebuku"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs bg-teal-100"
                    value={kodebuku}
                    onChange={(e) => setKodeBuku(e.target.value)}
                  />
                  <label htmlFor="judul">Judul :</label>
                  <input
                    type="text"
                    id="judul"
                    name="judul"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs bg-teal-100"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                  />
                  <label htmlFor="author">Author :</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs bg-teal-100"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  <label htmlFor="penerbit">Penerbit :</label>
                  <input
                    type="text"
                    id="penerbit"
                    name="penerbit"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs bg-teal-100"
                    value={penerbit}
                    onChange={(e) => setPenerbit(e.target.value)}
                  />
                  <label htmlFor="deskripsi">Deskripsi :</label>
                  <textarea
                    id="deskripsi"
                    name="deskripsi"
                    placeholder="Type here"
                    class="textarea textarea-bordered h-24 bg-teal-100"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                  />
                  <label htmlFor="stok">Stok :</label>
                  <input
                    type="text"
                    id="stok"
                    name="stok"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs bg-teal-100"
                    value={stok}
                    onChange={(e) => setStok(e.target.value)}
                  />
                  <div class="flex">
                    <button type="submit" className="btn btn-accent">
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBookList;
