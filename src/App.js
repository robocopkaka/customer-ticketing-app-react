import React from 'react';
import './App.css';

import Main from "./components/main";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="site-body"><Main /></div>
      <Footer/>
    </div>
  );
}

export default App;
