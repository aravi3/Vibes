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
      newState = merge({}, state);

      action.songs.forEach(song => {
        newState.entities[song.id] = {
          id: song.id,
          user_id: song.user_id,
          genre_id: song.genre_id,
          title: song.title,
          artist: song.artist,
          track: song.track,
          image: song.image
        };
      });

      return newState;
    case RECEIVE_SONG:
      newState = merge({}, state);

      newState.entities[action.song.id] = {
        id: action.song.id,
        user_id: action.song.user_id,
        genre_id: action.song.genre_id,
        title: action.song.title,
        artist: action.song.artist,
        track: action.song.track,
        image: action.song.image
      };

      newState.currentSong = action.song.id;

      return newState;
    case DELETE_SONG:
    default:
      return state;
  }
};

export default songsReducer;
