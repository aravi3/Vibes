import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const removeComment = (comment) => {
  return {
    type: DELETE_COMMENT,
    comment
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

export const fetchAllComments = (songId) => dispatch => {
  return APIUtil.fetchAllComments(songId).then(
    resp => dispatch(receiveComments(resp))
  );
};

export const createComment = (comment) => dispatch => {
  return APIUtil.createComment(comment).then(
    resp => {
      dispatch(receiveComment(resp));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err))
  );
};

export const deleteComment = (id) => dispatch => {
  return APIUtil.deleteComment(id).then(
    resp => {
      dispatch(removeComment(resp));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err))
  );
};
