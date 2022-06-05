import React, { useState, useEffect } from "react";
import BookDataService from "./book.services";

const CreateBookList = ({ id, setBookId }) => {
  const [kodebuku, setKodeBuku] = useState("");
  const [judul, setJudul] = useState("");
  const [author, setAuthor] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [stok, setStok] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      kodebuku === "" ||
      judul === "" ||
      author === "" ||
      penerbit === "" ||
      deskripsi === "" ||
      stok === ""
    ) {
      setMessage({ error: true, msg: "Data Kosong !" });
      return;
    }
    const newBook = {
      kodebuku,
      judul,
      author,
      penerbit,
      deskripsi,
      stok,
    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setKodeBuku(docSnap.data().kodebuku);
      setJudul(docSnap.data().judul);
      setAuthor(docSnap.data().author);
      setPenerbit(docSnap.data().penerbit);
      setDeskripsi(docSnap.data().deskripsi);
      setStok(docSnap.data().stok);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <>
      <div className="create-book">
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
    </>
  );
};

export default CreateBookList;
