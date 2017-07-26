import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SHOW_USER = 'SHOW_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const fetchAllUsers = () => dispatch => {
  return APIUtil.fetchAllUsers().then(
    users => {
      dispatch(receiveUsers(users));
      dispatch(clearErrors());
    }
  );
};

export const fetchUser = (id) => dispatch => {
  return APIUtil.fetchUser(id).then(
    user => {
      dispatch(showUser(user));
      dispatch(clearErrors());
    }
  );
};

export const editUser = (user, id) => dispatch => {
  return APIUtil.editUser(user, id).then(
    resp => {
      dispatch(showUser(resp));
      dispatch(clearErrors());
    }
  );
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then(
    currentUser => {
      dispatch(receiveCurrentUser(currentUser));
      dispatch(clearErrors());
    },
    err => {
      if (err.responseJSON) {
        dispatch(receiveErrors(err.responseJSON));
      }
      else {
        dispatch(receiveErrors([err.statusText]));
      }
    }
  );
};

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(
    currentUser => {
      dispatch(receiveCurrentUser(currentUser));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
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

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const showUser = (user) => {
  return {
    type: SHOW_USER,
    user
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
