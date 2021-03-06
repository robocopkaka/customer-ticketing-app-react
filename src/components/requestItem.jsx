import React from 'react';
import moment from 'moment';
import {Link} from "react-router-dom";

const RequestItem = ({ request, setColor }) => {
  const setBorderColor = {
    borderLeft: `1.5mm solid ${setColor(request.status)}`,
    borderRight: `1.5mm solid ${setColor(request.status)}`,
  };
  return (
    <Link to={`/requests/${request.id}`}>
      <div className="card" style={setBorderColor}>
        <div className="row no-gutters">
          <div className="card-body">
        <span id="subject">
          {request.subject}
        </span>

            <span id="time">
          {moment(request.created_at).format('YYYY-MM-DD')}
        </span>

            <span id="status">
          {request.status}
        </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RequestItem;
