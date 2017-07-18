import merge from 'lodash/merge';
import {
  RECEIVE_SONGS,
  RECEIVE_SONG,
  DELETE_SONG
} from '../actions/song_actions';

const initialState = {
  entities: {},
  currentSong: undefined
};

const songsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_SONGS:
    case RECEIVE_SONG:
    case DELETE_SONG:
    default:
      return state;
  }
};

export default songsReducer;
