import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from "./components/main";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar isLoggedIn={localStorage.getItem('isLoggedIn')} />
      <Main />
    </div>
  );
}

export default App;
