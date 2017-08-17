import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { fetchAllSongs } from '../../actions/song_actions';
import { selectAllSongs, selectPlaylist } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    songs: selectAllSongs(state.songs.entities),
    currentSong: state.songs.currentSong,
    playlist: selectPlaylist(state.songs.entities, state.songs.currentSong)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllSongs: () => dispatch(fetchAllSongs())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
