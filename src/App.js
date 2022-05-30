import React, {useState, useEffect} from "react";
import fire from "./Config/Config";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

const App = () => {
  
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListener();
  }, []);



  return (
    <div className="App">
      {user ? (
        <Home handleLogout={handleLogout}/>
      ) : (
        <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
      )}
    </div>
  );

};



// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from './pages/auth/Login';
// // import RegisterAdmin from './AdminPage/AdminPage';
// // import AdminPage from './AdminPage/AdminPage';
// import Register from './pages/auth/Register';
// import Catalog from './pages/Catalog'
// import LandingPage from './pages/LandingPage';
// import BookDetails from "./pages/BookDetails";
// import Peminjaman from "./pages/peminjaman/Peminjaman";
// import BookList from "./pages/booklist/BookList";
// import Navbar from "./components/Navbar"
// import Kategori from "./pages/kategori/Kategori";
// import TabelUser from "./pages/user/TabelUser";
// import Denda from "./pages/denda/Denda";
// import { ProfileUser } from "./pages/user/ProfileUser";
// import CreateBookList from "./pages/booklist/CreateBookList";

// function App() {
//   return (
//     <>
//     <div className="App">
//     <Navbar />
//       <Router>
//         <div>
//           <Route exact path="/">
//             <LandingPage />
//           </Route>
//           <Route path="/register">
//             <Register />
//           </Route>
//           <Route path="/catalog">
//             <Catalog />
//           </Route>
//            <Route path="/createbook">
//              <CreateBookList />
//            </Route>

//            <Route path="/details">
//              <BookDetails/>
//            </Route>
//            <Route path="/login">
//              <Login />
//            </Route>
//            <Route path="/peminjaman">
//              <Peminjaman />
//            </Route>
//            <Route path="/booklist">
//              <BookList />
//            </Route>
//            <Route path="/kategori">
//              <Kategori />
//            </Route>
//            <Route path="/users">
//              <TabelUser />
//            </Route>
//            <Route path="/denda">
//              <Denda />
//            </Route>
//            <Route path="/profil">
//              <ProfileUser />
//            </Route>
//            {/* <Route path="/dashboard">
//             //  <Dashboard />
//            </Route> */}
//          </div>
//        </Router>
//        </div>
//      </>
//    );
//  }

export default App;