import merge from 'lodash/merge';
import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  DELETE_LIKE
} from '../actions/like_actions';

const initialState = {};

const likesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_LIKES:
      newState = {};

      action.likes.forEach(like => {
        newState[like.id] = {
          id: like.id,
          user_id: like.user_id,
          song_id: like.song_id
        };
      });

      return newState;
    case RECEIVE_LIKE:
      newState = merge({}, state);

      newState[action.like.id] = {
        id: action.like.id,
        user_id: action.like.user_id,
        song_id: action.like.song_id
      };

      return newState;
    case DELETE_LIKE:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default likesReducer;
