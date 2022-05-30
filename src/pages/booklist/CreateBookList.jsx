import React, {Component} from "react";
import fire from "../../Config/Config";

class CreateBookList extends Component{
    constructor(){
        super();
        this.ref = fire.firestore().collection('books');
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
              <div className="text-center text-4xl font-semibold">Create Book</div>
              <div className="text-center">Insert book here</div>
            </div>
            
            <div className="h-screen container mx-auto">
            <div class="place-content-evenly">
                <div className="form-control space-y-2" onSubmit={this.onSubmit}>
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
                        <button className="btn btn-accent" >Simpan</button>
                        <a href="/booklist" class="btn btn-secondary">Back</a>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default CreateBookList;