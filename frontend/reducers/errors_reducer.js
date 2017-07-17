import merge from 'lodash/merge';

const initialState = {
  signUp: [],
  logIn: [],
  comment: [],
  song: []
};

const errorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    default:
      return state;
  }
};

export default errorsReducer;
