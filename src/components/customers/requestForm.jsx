import React from "react";
import classNames from"classnames";

const RequestForm = (
  { subject, description, handleChange, create, errorMessages
  }) => {
  const subjectClasses = classNames('form-control', { 'is-invalid': errorMessages.subject.length > 0 });
  const descriptionClasses = classNames('form-control', { 'is-invalid': errorMessages.description.length > 0 });
  const subjectError = classNames('invalid-feedback', { 'display-none': errorMessages.subject.length > 0 });
  const descriptionError = classNames('invalid-feedback', { 'display-none': errorMessages.description.length > 0 });
  return (
    <div id="new-request">
      <form onSubmit={create} id="request-form">
        <h2>Create Request</h2>
        <div className="form-group">
          <label htmlFor="email">Subject</label>
          <input
            value={subject}
            type="text" name="subject"
            className={subjectClasses}
            onChange={handleChange}
          />
          <p className={subjectError}>{errorMessages.subject}</p>
        </div>

        <div className="form-group">
          <label>description</label>
          <textarea
            value={description}
            type="textarea"
            name="description"
            className={descriptionClasses}
            onChange={handleChange}
            rows={5}
          />
          <p className={descriptionError}>{errorMessages.description}</p>
        </div>

        <div className="button-group">
          <button className="btn" type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;