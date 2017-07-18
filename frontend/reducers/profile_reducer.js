import merge from 'lodash/merge';
import { RECEIVE_PROFILE } from '../actions/profile_actions';

const initialState = {};

const profileReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_PROFILE:
    default:
      return state;
  }
};

export default profileReducer;
