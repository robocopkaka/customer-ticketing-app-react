import React, { Fragment } from "react";

const RequestDescription = ({ request, resolveRequest, userType }) => (
  <Fragment>
    <div>Placeholder</div>
    <div className="card">
      <div className="card-body">
        <h5 className="header">Subject</h5>
        <div className="request-description-text">{request.subject}</div>
        <br />
        <h5 className="header">Description</h5>
        <div className="request-description-text">{request.description}</div>
        <br/>
        <h5 className="header">Assigned to</h5>
        <div className="request-description-text">{request.assignee_id || 'N/A'}</div>
        <br />
        { userType !== 'supp' ? (
          ""
        ) : (
          <div className="button-group">
            <button className="btn" type="submit" disabled={request.resolved_at} onClick={resolveRequest}>
              Resolve
            </button>
          </div>
        )}
      </div>
    </div>
  </Fragment>
);

export default RequestDescription;
