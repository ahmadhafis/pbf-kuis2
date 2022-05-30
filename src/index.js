import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Catalog from './pages/Catalog';
import LandingPage from './pages/LandingPage';


class StateFullComponent extends React.Component{
  render(){
    return<p>StateFullComponent</p>
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Catalog />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Register />,
//   document.getElementById('root')
// );

// ReactDOM.render(<AdminPage/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();