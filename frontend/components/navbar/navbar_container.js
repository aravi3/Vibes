import { connect } from 'react-redux';
import { login, logout, clearErrors } from '../../actions/session_actions';
import { fetchAllSongs } from '../../actions/song_actions';
import { receiveSearch } from '../../actions/search_action';
import Navbar from './navbar';
import { selectLoggedIn } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
    loggedIn: selectLoggedIn(state.users),
    query: state.search.query
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveSearch: (query) => dispatch(receiveSearch(query)),
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    clearErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
