import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import Navbar from './navbar';
import { selectLoggedIn } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    loggedIn: selectLoggedIn(state.users)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
