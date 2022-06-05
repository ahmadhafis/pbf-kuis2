import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import LandingPage from "./LandingPage";
import Catalog from "./Catalog";
import BookDetails from "./BookDetails";
import Peminjaman from "./peminjaman/Peminjaman";
import BookList from "./booklist/BookList";
import Kategori from "./kategori/Kategori";
import TabelUser from "./user/TabelUser";
import Denda from "./denda/Denda";
import Login from "./auth/Login";
import { ProfileUser } from "./user/ProfileUser";
import CreateBookList from "./booklist/CreateBookList";
import EditBookList from "./booklist/EditBookList";

const Home = ({handleLogout}) => {
  return (
    <div>
    <Navbar/>
      <Router>
        <div>
          <Route exact path="/">
           <LandingPage handleLogout={handleLogout}/>
          </Route>
          <Route path="/catalog">
          <Catalog/>
          </Route>
          <Route path="/details">
          <BookDetails/>
          </Route>
          <Route path="/peminjaman">
          <Peminjaman/>
          </Route>
          <Route path="/booklist">
          <BookList/>
          </Route>
          <Route path="/createbook">
            <CreateBookList />
          </Route>
          <Route path="/kategori">
          <Kategori/>
          </Route>
          <Route path="/users">
           <TabelUser/>
          </Route>
          <Route path="/denda">
           <Denda/>
          </Route>
          <Route path="/profil">
          <ProfileUser/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </div>
      </Router>
      </div>
  
  );
}

export default Home;