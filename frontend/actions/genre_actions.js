import * as APIUtil from '../util/genre_api_util';

export const RECEIVE_GENRES = 'RECEIVE_GENRES';

export const receiveGenres = (genres) => {
  return {
    type: RECEIVE_GENRES,
    genres
  };
};

export const fetchAllGenres = () => dispatch => {
  return APIUtil.fetchAllGenres().then(
    resp => dispatch(receiveGenres(resp))
  );
};
