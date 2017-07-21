import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { selectAllSongs } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    songs: state.songs.entities,
    currentSong: state.songs.currentSong
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
