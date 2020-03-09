import update  from 'immutability-helper';
import initialState from "./initialState";

export default function commentReducer(state=initialState.comment, action) {
  let newState = {};

  switch (action.type) {
    case 'ADD_COMMENT_SUCCESS':
      newState = update(state, {
        body: { $set: action.data.body },
        message: { $set: 'Comment created successfully' },
      });
      return newState;
    case 'ADD_COMMENT_FAILURE':
      newState = update(state, {
        message: { $set: 'Comment could not created' },
      });
      return newState;
    case 'FETCH_COMMENTS_SUCCESS':
      newState = update(state, {
        comments: { $set: action.data.comments },
      });
      return newState;
    default:
      return state;
  }
}