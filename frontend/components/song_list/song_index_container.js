import { connect } from 'react-redux';
import { fetchAllSongs, receiveSong, receiveUser } from '../../actions/song_actions';
import { createLike, deleteLike, fetchUserLikes } from '../../actions/like_actions';
import { fetchAllGenres } from '../../actions/genre_actions';
import {
  selectAllSongs,
  selectAllGenres,
  selectAllLikes,
  selectLoggedIn
} from '../../reducers/selectors';
import SongIndex from './song_index';

const mapStateToProps = (state) => {
  return {
    loggedIn: selectLoggedIn(state.users),
    currentUser: state.users.currentUser,
    songs: selectAllSongs(state.songs.entities),
    genres: selectAllGenres(state.genres),
    likes: selectAllLikes(state.likes),
    query: state.search.query
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
    fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)),
    receiveSong: (song) => dispatch(receiveSong(song)),
    fetchAllGenres: () => dispatch(fetchAllGenres()),
    fetchAllSongs: () => dispatch(fetchAllSongs())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
