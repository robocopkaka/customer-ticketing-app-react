import React, { Component } from "react";
import './stylesheets/home.scss';
import img from '../managed_by_q.png'
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div id="home">
          <div id="head-section">
            <div id="headers">
              <h1 id="site-header">
                Customer Ticketing Application
              </h1><br />
              <h2 id="site-description">
                Log and keep track of support request tickets
              </h2>
            </div>

            <div className="container">
              <div className="button-set">
                <button id="create">
                  <Link to="/create-requests">Create New Ticket</Link>
                </button>

                <button id="view">
                  <Link to="/fetch-requests">View all tickets</Link>
                </button>
              </div>
            </div>
          </div>
          
          <div id="image-div">
            <img
              src={img}
              alt="credit: Managed by Q"
              id="managed-image"
            />
          </div>
        </div>
    );
  }
}

export default Home;
