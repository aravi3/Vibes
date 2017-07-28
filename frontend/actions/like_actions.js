import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

export const receiveLikes = (likes) => {
  return {
    type: RECEIVE_LIKES,
    likes
  };
};

export const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

export const removeLike = (id) => {
  return {
    type: DELETE_LIKE,
    id
  };
};

export const fetchUserLikes = (userId) => dispatch => {
  return APIUtil.fetchUserLikes(userId).then(
    resp => {
      dispatch(receiveLikes(resp));
    }
  );
};

export const createLike = (like) => dispatch => {
  return APIUtil.createLike(like).then(
    resp => {
      dispatch(receiveLike(resp));
    }
  );
};

export const deleteLike = (id) => dispatch => {
  return APIUtil.deleteLike(id).then(
    resp => dispatch(removeLike(resp.id))
  );
};
