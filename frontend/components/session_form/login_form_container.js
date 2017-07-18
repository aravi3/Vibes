import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { selectLoggedIn } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    loggedIn: selectLoggedIn(state.users),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
