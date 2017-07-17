import merge from 'lodash/merge';

const initialState = {
  entities: {},
  currentUser: undefined
};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    default:
      return state;
  }
};

export default usersReducer;
