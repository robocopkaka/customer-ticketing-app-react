import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const RequestsInfo = (
  {
    open, closed, fetchOpenRequests, fetchClosedRequests, fetchAllRequests,
    baseUrl, openOrAssigned
  }
  ) => (
  <Fragment>
    <Link to={`${baseUrl}`} onClick={fetchAllRequests}>
      <div className="card">
        <div className="row no-gutters">
          <div className="card-body">
            All requests
          </div>
        </div>
      </div>
    </Link>

    <Link to={`${baseUrl}?query=${openOrAssigned}`} onClick={fetchOpenRequests}>
      <div className="card">
        <div className="row no-gutters">
          <div className="card-body">
            Pending requests <div className="number">{open}</div>
          </div>
        </div>
      </div>
    </Link>

    <Link to={`${baseUrl}?query=opened`} onClick={fetchClosedRequests}>
      <div className="card">
        <div className="row no-gutters">
          <div className="card-body">
            Resolved requests <span className="number">{closed}</span>
          </div>
        </div>
      </div>
    </Link>
  </Fragment>
);

export default RequestsInfo;