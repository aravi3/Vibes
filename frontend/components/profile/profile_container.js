import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';
import { selectAllSongs, selectAllUsers } from '../../reducers/selectors';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    users: selectAllUsers(state.users.entities),
    songs: selectAllSongs(state.songs.entities)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
