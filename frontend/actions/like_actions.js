import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

export const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

export const removeLike = (like) => {
  return {
    type: DELETE_LIKE,
    like
  };
};

export const createLike = (like) => dispatch => {
  return APIUtil.createLike(like).then(
    resp => dispatch(receiveLike(resp))
  );
};

export const deleteLike = (id) => dispatch => {
  return APIUtil.deleteLike(id).then(
    resp => dispatch(removeLike(resp))
  );
};
