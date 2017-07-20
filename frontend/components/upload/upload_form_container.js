import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { fetchAllGenres } from '../../actions/genre_actions';
import { selectAllGenres } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    user: state.users.currentUser,
    genres: selectAllGenres(state.genres),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGenres: () => dispatch(fetchAllGenres())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
