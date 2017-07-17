import merge from 'lodash/merge';

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    default:
      return state;
  }
};

export default commentsReducer;
