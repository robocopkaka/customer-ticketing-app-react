import React, { Fragment } from "react";
import moment from "moment";

const CommentsList = ({ comment }) => (
  <Fragment>
    <div id="commenter-name">
      <span id="name">{comment.commenter_name}</span>
      <span id="created-at">{moment(comment.created_at).format('YYYY-MM-DD hh:mm')}</span>
    </div>
    <p id="comment">{comment.body}</p>
    <hr />
  </Fragment>
);

export default CommentsList;
