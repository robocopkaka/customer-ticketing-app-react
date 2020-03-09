import CommentApi from "../api/commentApi";

export function addCommentSuccess(data) {
  return { type: 'ADD_COMMENT_SUCCESS', data }
}

export function addCommentFailure() {
  return { type: 'ADD_COMMENT_FAILURE' }
}

export function fetchCommentsSuccess(data) {
  return { type: 'FETCH_COMMENTS_SUCCESS', data }
}

export function create(id, body) {
  return (dispatch) => {
    return CommentApi.create(id, body)
      .then((response) => {
        dispatch(addCommentSuccess(response.data))
      })
      .catch(() => {
        dispatch(addCommentFailure())
      });
  };
}

export function fetchComments(id) {
  return (dispatch) => {
    return CommentApi.fetchComments(id)
      .then((response) => {
        dispatch(fetchCommentsSuccess(response.data))
      })
  }
}