import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions';
import { createComment } from '../../actions/comment_actions';
import { selectAllSongs } from '../../reducers/selectors';
import SongPage from './song_page';

const mapStateToProps = (state) => {
  return {
    song: selectAllSongs(state.songs.entities)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    fetchSong: (id) => dispatch(fetchSong(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPage);
