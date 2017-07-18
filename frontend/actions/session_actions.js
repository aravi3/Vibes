import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const signup = (user) => dispatch => {
  APIUtil.signup(user).then(
    currentUser => {
      console.log(currentUser);
      dispatch(receiveCurrentUser(currentUser));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const login = (user) => dispatch => {
  APIUtil.login(user).then(
    currentUser => {
      console.log(currentUser);
      dispatch(receiveCurrentUser(currentUser));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const logout = () => dispatch => {
  APIUtil.logout().then(
    currentUser => {
      dispatch(receiveCurrentUser({
        id: undefined,
        username: undefined
      }));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
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
