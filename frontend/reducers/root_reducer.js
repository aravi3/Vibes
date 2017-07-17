import { combineReducers } from 'redux';

import commentsReducer from './comments_reducer';
import genresReducer from './genres_reducer';
import profileReducer from './profile_reducer';
import songsReducer from './songs_reducer';
import usersReducer from './users_reducer';
import errorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  comments: commentsReducer,
  genres: genresReducer,
  profile: profileReducer,
  songs: songsReducer,
  users: usersReducer,
  errors: errorsReducer
});

export default RootReducer;
