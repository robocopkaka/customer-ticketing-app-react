import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import './stylesheets/navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="navbar-section">
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-brand">
            <div className="nav-item">
              Ticketyyyy
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Add tickets</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">View tickets</a>
              </li>
            </ul>
          </div>

          <div className="buttons">
            <button className="btn btn-light">
              Login
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
