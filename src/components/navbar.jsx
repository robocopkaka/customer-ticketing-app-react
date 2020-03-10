import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import './stylesheets/navbar.scss';
import {Link} from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from '../actions/authActions';
import history from "../history";

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props.actions.logout()
    history.push('/');
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
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/create-requests" className="nav-link">Add tickets</Link>
              </li>
              <li className="nav-item">
                <Link to="/requests" className="nav-link">View tickets</Link>
              </li>
            </ul>
          </div>

          <div className="buttons">
            {localStorage.getItem('isLoggedIn') ? (
              <Link to="#">
                <button className="btn btn-light" onClick={this.logout}>
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
                <Link to="/signup">
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
