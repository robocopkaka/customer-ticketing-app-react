import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import './stylesheets/navbar.scss';
import {Link} from "react-router-dom";

class Navbar extends Component {
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
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/create-requests" className="nav-link">Add tickets</Link>
              </li>
              <li className="nav-item">
                <Link to="/fetch-requests" className="nav-link">View tickets</Link>
              </li>
            </ul>
          </div>

          <div className="buttons">
            {this.props.isLoggedIn ? (
              <Link to="#">
                <button className="btn btn-light">
                  Logout
                </button>
              </Link>
            ) : (
              <Fragment>
                <Link to="/customers/login">
                  <button className="btn btn-light">
                    Login
                  </button>
                </Link>
                <Link to="#">
                  <button className="btn btn-light">
                    Signup
                  </button>
                </Link>
              </Fragment>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Navbar);
