import { connect } from 'react-redux';
import { fetchUser, editUser } from '../../actions/session_actions';
import { selectAllSongs, selectAllUsers } from '../../reducers/selectors';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    loggedIn: selectLoggedIn(state.users),
    currentUser: state.users.currentUser,
    users: selectAllUsers(state.users.entities),
    songs: selectAllSongs(state.songs.entities)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (user, id) => dispatch(editUser(user, id)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
