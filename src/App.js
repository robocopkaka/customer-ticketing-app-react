import React, {Component} from 'react';
import './App.css';

import Main from "./components/main";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userType: localStorage.getItem('userType'),
      isLoggedIn: localStorage.getItem('isLoggedIn'),
    };

    this.updateStorageEntry = this.updateStorageEntry.bind(this);
  }

  updateStorageEntry(entry) {
    this.setState({
      [entry]: localStorage.getItem(entry)
    })
  }
  render() {
    const { userType, isLoggedIn } = this.state;
    return (
      <div className="App">
        <Navbar updateLocalStorageEntry={this.updateStorageEntry} isLoggedIn={isLoggedIn} />
        <div id="site-body">
          <Main
            userType={userType}
            isLoggedIn={isLoggedIn}
            updateLocalStorageEntry={this.updateStorageEntry}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
