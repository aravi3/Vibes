import { connect } from 'react-redux';
import { fetchAllSongs, fetchSong, deleteSong, receiveSong } from '../../actions/song_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import { fetchAllComments, createComment, deleteComment } from '../../actions/comment_actions';
import { selectAllSongs, selectAllComments, selectLoggedIn } from '../../reducers/selectors';
import SongPage from './song_page';

const mapStateToProps = (state) => {
  return {
    loggedIn: selectLoggedIn(state.users),
    users: state.users.entities,
    currentUser: state.users.currentUser,
    songs: selectAllSongs(state.songs.entities),
    comments: selectAllComments(state.comments)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllComments: (songId) => dispatch(fetchAllComments(songId)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    createComment: (comment) => dispatch(createComment(comment)),
    fetchSong: (id) => dispatch(fetchSong(id)),
    receiveSong: (song) => dispatch(receiveSong(song)),
    deleteSong: (id) => dispatch(deleteSong(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPage);
