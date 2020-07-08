import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import './stylesheets/navbar.scss';
import {Link} from "react-router-dom";
import { bindActionCreators } from "redux";
import classNames from "classnames";
import * as actions from '../actions/authActions';
import * as sessionActions from '../actions/sessionActions';
import history from "../history";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
    this.logout = this.logout.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  logout(event) {
    event.preventDefault();
    this.props.actions.logout();
    this.props.updateLocalStorageEntry('isLoggedIn');
    history.push('/');
  }
  render() {
    const isLoggedIn = this.props.isLoggedIn === "true";
    const { collapsed } = this.state;
    const collapseClasses = classNames(
      'collapse', 'navbar-collapse', { 'show': collapsed }
    );
    const togglerClasses = classNames(
      'navbar-toggler', { 'collapsed': collapsed }
    );
    return (
      <div id="navbar-section">
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            Ticketyyyy
          </Link>
          <button
            className={togglerClasses}
            type="button"
            data-toggle="collapse"
            data-target="#main-navbar"
            onClick={this.toggleCollapse}
            aria-controls="main-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ><span className="navbar-toggler-icon" /></button>

          <div className={collapseClasses} id="main-navbar">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={this.toggleCollapse}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/create-requests" className="nav-link" onClick={this.toggleCollapse}>Add tickets</Link>
              </li>
              <li className="nav-item">
                <Link to="/requests" className="nav-link" onClick={this.toggleCollapse}>View tickets</Link>
              </li>
            </ul>
            <div className="buttons">
              {isLoggedIn ? (
                <Link to="">
                  <button className="btn btn-light" onClick={this.logout}>
                    Logout
                  </button>
                </Link>
              ) : (
                <Fragment>
                  <Link to="/customers/login">
                    <button
                      className="btn btn-light"
                      onClick={this.toggleCollapse}
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      className="btn btn-light"
                      onClick={this.toggleCollapse}
                    >
                      Signup
                    </button>
                  </Link>
                </Fragment>
              )}
            </div>
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
    actions: bindActionCreators(Object.assign({}, actions, sessionActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
