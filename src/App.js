import React, {Component} from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import './App.css';

import Main from "./components/main";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import * as sessionActions from '../src/actions/sessionActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: localStorage.getItem('userType'),
      isLoggedIn: localStorage.getItem('isLoggedIn'),
    };

    this.updateStorageEntry = this.updateStorageEntry.bind(this);
    this.clearLocalStorage = this.clearLocalStorage.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchSession()
      .catch(() => {
        this.clearLocalStorage();
      });
  }

  updateStorageEntry(entry) {
    this.setState({
      [entry]: localStorage.getItem(entry)
    })
  }

  clearLocalStorage() {
    localStorage.clear();
    this.setState({
      isLoggedIn: localStorage.getItem('isLoggedIn'),
      userType: localStorage.getItem('userType'),
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
            clearLocalStorage={this.clearLocalStorage}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
