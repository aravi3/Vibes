import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USERS,
  SHOW_USER
} from '../actions/session_actions';

const initialState = {
  entities: {},
  currentUser: {
    id: undefined,
    username: undefined
  }
};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_USERS:
      newState = merge({}, state);

      action.users.forEach(user => {
        newState.entities[user.id] = {
          id: user.id,
          username: user.username,
          profile_img: user.profile_img
        };
      });

      return newState;
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);

      newState.entities[action.currentUser.id] = {
        id: action.currentUser.id,
        username: action.currentUser.username
      };

      newState.currentUser = action.currentUser;

      return newState;
    case SHOW_USER:
      newState = {
        entities: {},
        currentUser: state.currentUser
      };

      newState.entities[action.user.id] = {
        id: action.user.id,
        username: action.user.username,
        profile_img: action.user.profile_img,
        cover_img: action.user.cover_img,
        description: action.user.description
      };

      return newState;
    default:
      return state;
  }
};

export default usersReducer;
