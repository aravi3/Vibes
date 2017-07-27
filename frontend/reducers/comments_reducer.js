import merge from 'lodash/merge';
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  DELETE_COMMENT,
} from '../actions/comment_actions';

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_COMMENTS:
      newState = {};

      action.comments.forEach(comment => {
        newState[comment.id] = {
          id: comment.id,
          body: comment.body,
          user_id: comment.user_id,
          song_id: comment.song_id,
          time: comment.time
        };
      });

      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state);

      newState[action.comment.id] = {
        id: action.comment.id,
        body: action.comment.body,
        user_id: action.comment.user_id,
        song_id: action.comment.song_id,
        time: action.comment.time
      };

      return newState;
    case DELETE_COMMENT:
      newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
