import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { selectLoggedIn } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    loggedIn: selectLoggedIn(state.users),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
