import merge from 'lodash/merge';

const initialState = {
  entities: {},
  currentSong: undefined
};

const songsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    default:
      return state;
  }
};

export default songsReducer;
