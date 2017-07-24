import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const SHOW_SONG = 'SHOW_SONG';
export const DELETE_SONG = 'DELETE_SONG';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveSongs = (songs) => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

export const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

export const showSong = (song) => {
  return {
    type: SHOW_SONG,
    song
  };
};

export const removeSong = (song) => {
  return {
    type: DELETE_SONG,
    song
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const fetchAllSongs = () => dispatch => {
  return APIUtil.fetchAllSongs().then(
    resp => dispatch(receiveSongs(resp))
  );
};

export const fetchSong = (id) => dispatch => {
  return APIUtil.fetchSong(id).then(
    resp => {
      dispatch(showSong(resp));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const createSong = (song) => dispatch => {
  return APIUtil.createSong(song).then(
    resp => {
      dispatch(receiveSong(resp));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors([err.statusText]))
  );
};

export const deleteSong = (id) => dispatch => {
  return APIUtil.deleteSong(id).then(
    resp => {
      dispatch(removeSong(resp));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
