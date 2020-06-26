import React from 'react';
import './App.css';

import Main from "./components/main";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="site-body"><Main userType={getUser()} /></div>
      <Footer/>
    </div>
  );
}

function getUser() {
  return localStorage.getItem('userType')
}

export default App;
