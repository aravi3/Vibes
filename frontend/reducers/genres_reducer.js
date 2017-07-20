import merge from 'lodash/merge';
import { RECEIVE_GENRES } from '../actions/genre_actions';

const initialState = {};

const genresReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_GENRES:
      newState = merge({}, state);
      action.genres.forEach(genre => {
        newState[genre.id] = {
          id: genre.id,
          name: genre.name
        };
      });
      return newState;
    default:
      return state;
  }
};

export default genresReducer;
