import React from "react";
import classNames from 'classnames';

const CommentInput = (
  { body, save, handleChange, customerCanPost, errorMessages }
  ) => {
  const bodyClasses = classNames('form-control', { 'is-invalid': errorMessages.body.length > 0 });
  const bodyError = classNames('invalid-feedback', { 'display-none': errorMessages.body.length > 0 });
  return (
    <div id="comment-form">
      <form onSubmit={save}>
        <div className="form-group">
          <label>Body</label>
          <textarea
            value={body}
            rows={5}
            name="body"
            className={bodyClasses}
            onChange={handleChange}
          />
          <p className={bodyError}>{errorMessages.body}</p>
        </div>

        <div className="button-group">
          <button className="btn" type="submit" disabled={customerCanPost}>Submit</button>
        </div>
      </form>
    </div>
  );
};


export default CommentInput;