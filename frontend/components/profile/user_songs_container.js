import { connect } from 'react-redux';
import { fetchAllSongs, receiveSong } from '../../actions/song_actions';
import { createLike, deleteLike, fetchUserLikes } from '../../actions/like_actions';
import {
  selectAllSongs,
  selectAllLikes,
  selectLoggedIn
} from '../../reducers/selectors';
import UserSongs from './user_songs';

const mapStateToProps = (state) => {
  return {
    loggedIn: selectLoggedIn(state.users),
    currentUser: state.users.currentUser,
    songs: selectAllSongs(state.songs.entities),
    likes: selectAllLikes(state.likes)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
    fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)),
    receiveSong: (song) => dispatch(receiveSong(song)),
    fetchAllSongs: () => dispatch(fetchAllSongs())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSongs);
