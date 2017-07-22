import { connect } from 'react-redux';
import { fetchAllSongs, receiveSong } from '../../actions/song_actions';
import { fetchAllGenres } from '../../actions/genre_actions';
import { selectAllSongs, selectAllGenres } from '../../reducers/selectors';
import SongIndex from './song_index';

const mapStateToProps = (state) => {
  return {
    songs: selectAllSongs(state.songs.entities),
    genres: selectAllGenres(state.genres)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveSong: (song) => dispatch(receiveSong(song)),
    fetchAllGenres: () => dispatch(fetchAllGenres()),
    fetchAllSongs: () => dispatch(fetchAllSongs())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
