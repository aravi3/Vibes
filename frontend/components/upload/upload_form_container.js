import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { fetchAllGenres } from '../../actions/genre_actions';
import { createSong, fetchSong, editSong } from '../../actions/song_actions';
import { selectAllGenres, selectAllSongs } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentSong: state.songs.currentSong,
    songs: selectAllSongs(state.songs.entities),
    user: state.users.currentUser,
    genres: selectAllGenres(state.genres),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSong: (id) => dispatch(fetchSong(id)),
    editSong: (song, id) => dispatch(editSong(song, id)),
    createSong: (song) => dispatch(createSong(song)),
    fetchAllGenres: () => dispatch(fetchAllGenres())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
