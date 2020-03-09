import React from "react";

const CommentInput = (
  { body, save, handleChange, customerCanPost }) => (
  <div id="comment-form">
    <form onSubmit={save}>
      <div className="form-group">
        <label>Body</label>
        <textarea
          value={body}
          rows={5}
          name="body"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="button-group">
        <button className="btn" type="submit" disabled={customerCanPost}>Submit</button>
      </div>
    </form>
  </div>
);


export default CommentInput;