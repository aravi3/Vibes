import merge from 'lodash/merge';
import {
  RECEIVE_SONGS,
  RECEIVE_SONG,
  SHOW_SONG,
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
      newState = {
        entities: {},
        currentSong: state.currentSong
      };

      action.songs.forEach(song => {
        newState.entities[song.id] = {
          id: song.id,
          user_id: song.user_id,
          genre_id: song.genre_id,
          title: song.title,
          artist: song.artist,
          track: song.track,
          image: song.image,
          likes: song.likes,
          time: song.time
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
        image: action.song.image,
        likes: action.song.likes,
        time: action.song.time
      };

      newState.currentSong = action.song.id;

      return newState;
    case SHOW_SONG:
      newState = {
        entities: {},
        currentSong: undefined
      };

      newState.entities[action.song.id] = {
        id: action.song.id,
        user_id: action.song.user_id,
        genre_id: action.song.genre_id,
        title: action.song.title,
        artist: action.song.artist,
        track: action.song.track,
        image: action.song.image,
        likes: action.song.likes,
        time: action.song.time
      };

      return newState;
    case DELETE_SONG:
      newState = merge({}, state);
      delete newState[action.song.id];
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
