import React, { Component } from "react";
import './stylesheets/home.scss';
import img from '../managed_by_q.png'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
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
                  <a href="#">Create New Ticket</a>
                </button>

                <button id="view">
                  <a href="#">View all tickets</a>
                </button>
              </div>
            </div>
          </div>
          
          <div id="image-div">
            <img
              src={img}
              alt="Image credit: Managed by Q image"
              id="managed-image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
