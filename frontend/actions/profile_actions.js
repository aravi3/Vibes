import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

export const receiveProfile = (profile) => {
  return {
    type: RECEIVE_PROFILE,
    profile
  };
};

export const fetchProfile = (id) => dispatch => {
  return APIUtil.fetchProfile(id).then(
    resp => dispatch(receiveProfile(resp))
  );
};
