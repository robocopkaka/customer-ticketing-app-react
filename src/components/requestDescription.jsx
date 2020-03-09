import React, { Fragment } from "react";

const RequestDescription = ({ request }) => (
  <Fragment>
    <div>Placeholder</div>
    <div className="card">
      <div className="card-body">
        <h5 className="header">Subject</h5>
        <div>{request.subject}</div>
        <br />
        <h5 className="header">Description</h5>
        <div>{request.description}</div>
        <br/>
        <h5 className="header">Assigned to</h5>
        <div>{request.assignee_id || 'N/A'}</div>
      </div>
    </div>
  </Fragment>
);

export default RequestDescription;
