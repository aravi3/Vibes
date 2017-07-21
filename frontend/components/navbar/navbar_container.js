import { connect } from 'react-redux';
import { login, logout, clearErrors } from '../../actions/session_actions';
import Navbar from './navbar';
import { selectLoggedIn } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
    loggedIn: selectLoggedIn(state.users)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
