import { connect } from 'react-redux';
import { fetchAllSongs } from '../../actions/song_actions';
import { selectAllSongs, selectAllUsers } from '../../reducers/selectors';
import TrendingSongs from './trending_songs';

const mapStateToProps = (state) => {
  return {
    users: selectAllUsers(state.users.entities),
    songs: selectAllSongs(state.songs.entities)
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
)(TrendingSongs);
