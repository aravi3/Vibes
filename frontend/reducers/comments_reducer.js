import merge from 'lodash/merge';
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  DELETE_COMMENT,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/comment_actions';

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_COMMENTS:
    case RECEIVE_COMMENT:
    case DELETE_COMMENT:
    case RECEIVE_ERRORS:
    case CLEAR_ERRORS:
    default:
      return state;
  }
};

export default commentsReducer;
