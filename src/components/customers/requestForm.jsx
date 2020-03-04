import React from "react";

const RequestForm = ({ subject, description, handleChange, create }) => (
  <div id="new-request">
    <form onSubmit={create} id="request-form">
      <h2>Create Request</h2>
      <div className="form-group">
        <label htmlFor="email">Subject</label>
        <input
          value={subject}
          type="text" name="subject"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>description</label>
        <textarea
          value={description}
          type="textarea"
          name="description"
          className="form-control"
          onChange={handleChange}
          rows={5}
        />
      </div>

      <div className="button-group">
        <button className="btn" type="submit">Create</button>
      </div>
    </form>
  </div>
);

export default RequestForm;