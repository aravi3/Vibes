import { combineReducers } from 'redux';

import commentsReducer from './comments_reducer';
import genresReducer from './genres_reducer';
import songsReducer from './songs_reducer';
import usersReducer from './users_reducer';
import likesReducer from './likes_reducer';
import errorsReducer from './errors_reducer';
import searchReducer from './search_reducer';

const RootReducer = combineReducers({
  comments: commentsReducer,
  genres: genresReducer,
  songs: songsReducer,
  users: usersReducer,
  likes: likesReducer,
  search: searchReducer,
  errors: errorsReducer
});

export default RootReducer;
