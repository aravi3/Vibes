import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

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
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.entities[action.currentUser.id] = {
        id: action.currentUser.id,
        username: action.currentUser.username
      };
      newState.currentUser = action.currentUser;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
