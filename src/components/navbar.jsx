import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import './stylesheets/navbar.scss';
import {Link} from "react-router-dom";
import { bindActionCreators } from "redux";
import classNames from "classnames";
import * as actions from '../actions/authActions';
import history from "../history";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
    this.logout = this.logout.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  componentDidMount() {
    this.props.actions.loggedIn();
  }

  toggleCollapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  logout(event) {
    event.preventDefault();
    this.props.actions.logout();
    history.push('/');
  }
  render() {
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
          <a className="navbar-brand">
            Ticketyyyy
          </a>
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

          {/*<div className="buttons">*/}
          {/*  {this.props.authenticated ? (*/}
          {/*    <Link to="#">*/}
          {/*      <button className="btn btn-light" onClick={this.logout}>*/}
          {/*        Logout*/}
          {/*      </button>*/}
          {/*    </Link>*/}
          {/*  ) : (*/}
          {/*    <Fragment>*/}
          {/*      <Link to="/customers/login">*/}
          {/*        <button className="btn btn-light">*/}
          {/*          Login*/}
          {/*        </button>*/}
          {/*      </Link>*/}
          {/*      <Link to="/signup">*/}
          {/*        <button className="btn btn-light">*/}
          {/*          Signup*/}
          {/*        </button>*/}
          {/*      </Link>*/}
          {/*    </Fragment>*/}
          {/*  )}*/}
          {/*</div>*/}
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
