import React, {Component} from "react";
import fire from "../../Config/Config";

class EditBookList extends Component {

    constructor(props) {
        super(props);
        this.state ={
            key: '',
            kodebuku: '',
            judul: '',
            author: '',
            penerbit: '',
            deskripsi: '',
            stok:''
        };
    }

    componentDidMount() {
        const ref = fire.firestore().collection('books').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists){
                const book = doc.data();
                this.setState({
                    key: doc.id,
                    kodebuku: book.kodebuku,
                    judul: book.judul,
                    author: book.author,
                    penerbit: book.penerbit,
                    deskripsi: book.deskripsi,
                    stok: book.stok
                });
            } else {
                console.log(" Tidak ada dokumen ");
            }
        });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({book:state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { kodebuku, judul, author, penerbit, deskripsi, stok } = this.state;

        const updateRef = fire.firestore().collection('books').doc(this.state.key);
        updateRef.set({
            kodebuku,
            judul,
            author,
            penerbit,
            deskripsi,
            stok
        }).then((docRef) => {
            this.setState({
                key: '',
                kodebuku: '',
                judul: '',
                author: '',
                penerbit: '',
                deskripsi: '',
                stok:''
            });
            this.props.history.push("/booklist")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
          });
    }

    render() {
        return(
            <div className="card-body bg-slate-50">
            <div className="card bg-teal-200">
              <div className="text-center text-4xl font-semibold">Edit Book</div>
              <div className="text-center">Edit book here</div>
            </div>
            
            <div className="h-screen container mx-auto">
            <div class="place-content-evenly">
                <div className="form-control space-y-2">
                    <label htmlFor="kodebuku">Kode Buku :</label>
                    <input type="text" id="kodebuku" name="kodebuku" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" value={this.state.kodebuku} onChange={this.onChange}/>
                    <label htmlFor="judul">Judul :</label>
                    <input type="text" id="judul" name="judul" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" value={this.state.judul} onChange={this.onChange}/>
                    <label htmlFor="author">Author :</label>
                    <input type="text" id="author" name="author" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" value={this.state.author} onChange={this.onChange}/>
                    <label htmlFor="penerbit">Penerbit :</label>
                    <input type="text" id="penerbit" name="penerbit" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" value={this.state.penerbit} onChange={this.onChange}/>
                    <label htmlFor="deskripsi">Deskripsi :</label>
                    <textarea id="deskripsi" name="deskripsi" placeholder="Type here" class="textarea textarea-bordered h-24 bg-teal-100" value={this.state.deskripsi} onChange={this.onChange}/>
                    <label htmlFor="stok">Stok :</label>
                    <input type="text" id="stok" name="stok" placeholder="Type here" class="input input-bordered w-full max-w-xs bg-teal-100" value={this.state.stok} onChange={this.onChange}/>
                    <div class="flex">
                        <button className="btn btn-accent" onSubmit={this.onSubmit}>Simpan</button>
                        <a href="/booklist" class="btn btn-secondary">Back</a>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default EditBookList;