import React, {Component} from "react";
import firebase from "../../Config/Config";

class CreateBookList extends Component{
    constructor(){
        super();
        this.ref = firebase.firestore().collection('books');
        this.state ={
            kodebuku: '',
            judul: '',
            author: '',
            penerbit: '',
            deskripsi: '',
            stok: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { kodebuku, judul, author, penerbit, deskripsi, stok } = this.state;

        this.ref.add({
            kodebuku,
            judul,
            author,
            penerbit,
            deskripsi,
            stok
        }).then((docRef) => {
            this.setState({
                kodebuku: '',
                judul: '',
                author: '',
                penerbit: '',
                deskripsi: '',
                stok: ''
            });
            this.props.history.push("/booklist")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    render() {
        const { kodebuku, judul, author, penerbit, deskripsi, stok } = this.state;
        return(
            <div className="card-body bg-slate-50">
            <div className="card bg-teal-200">
              <div className="text-center text-4xl font-semibold">Edit Book</div>
              <div className="text-center">Edit book here</div>
            </div>
            
            <div className="h-screen container mx-auto">
            <div class="place-content-evenly">
                <form onSubmit={this.onSubmit}>
                <div className="form-control space-y-2">
                    <label htmlFor="kodebuku">Kode Buku :</label>
                    <input type="text" id="kodebuku" name="kodebuku" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" value={kodebuku} onChange={this.onChange}/>
                    <label htmlFor="judul">Judul :</label>
                    <input type="text" id="judul" name="judul" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" value={judul} onChange={this.onChange}/>
                    <label htmlFor="author">Author :</label>
                    <input type="text" id="author" name="author" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" value={author} onChange={this.onChange}/>
                    <label htmlFor="penerbit">Penerbit :</label>
                    <input type="text" id="penerbit" name="penerbit" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" value={penerbit} onChange={this.onChange}/>
                    <label htmlFor="deskripsi">Deskripsi :</label>
                    <textarea id="deskripsi" name="deskripsi" placeholder="Type here" class="textarea textarea-bordered h-24 bg-teal-100" value={deskripsi} onChange={this.onChange}/>
                    <label htmlFor="stok">Stok :</label>
                    <input type="text" id="stok" name="stok" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" value={stok} onChange={this.onChange}/>
                    <div class="flex">
                        <a type="submit" className="btn btn-accent">Simpan</a>
                        <a href="/booklist" class="btn btn-secondary">Back</a>
                    </div>
                    
                </div>

                </form>
            </div>
        </div>
        </div>
        )
    }
}

export default CreateBookList;