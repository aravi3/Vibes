import React from 'react';
import Audio from 'react-audioplayer';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import UploadFormContainer from '../upload/upload_form_container';

class SongPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: undefined
    };

    this.renderAudioPlayer = this.renderAudioPlayer.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.openUploadModal = this.openUploadModal.bind(this);
  }

  addComment(body) {
    if (!this.props.loggedIn) {
      window.globalSignupModal();
      return;
    }

    let comment = {
      body: body,
      user_id: this.props.currentUser.id,
      song_id: parseInt(this.props.match.params.songId)
    };

    this.props.createComment(comment);
  }

  deleteComment(id) {
    return e => this.props.deleteComment(id);
  }

  deleteSong(id) {
    return e => {
      this.props.deleteSong(id);
    };
  }

  openUploadModal(e) {
    e.preventDefault();
    window.globalUploadModal(parseInt(this.props.match.params.songId));
  }

  componentDidMount() {
    this.props.fetchSong(parseInt(this.props.match.params.songId)).then(
      () => {
        let song = [{
          name: this.props.song[0].title,
          src: this.props.song[0].track,
          img: this.props.song[0].image,
          comments: [],
          artist: this.props.song[0].artist,
          user_id: this.props.song[0].user_id,
          id: this.props.song[0].id
        }];

        this.setState({ song });
      }
    );

    this.props.fetchAllComments(parseInt(this.props.match.params.songId));

    this.props.fetchAllUsers();
  }

  componentWillUnmount() {
    if (this.audioComponent) {
      ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-pause'));
    }
  }

  renderAudioPlayer() {
    const audioStyles = {
      backgroundColor: 'white',
      width: '600px',
      height: '500px',
      opacity: '0.95',
      position: 'absolute',
      top: '30px',
      left: '220px'
    };

    return (
      <center>
        <div className="show-song-container">
          <Audio
            style={audioStyles}
            comment={true}
            onCommentSubmit={this.addComment}
            fullPlayer={true}
            autoPlay={false}
            playlist={this.state.song}
            ref={audioComponent => {this.audioComponent = audioComponent;}}
          />

        <span className="show-song-info">
          {this.state.song[0].name}
          <br />
          <span className="show-song-artist">
            by <Link to={`/api/users/${this.state.song[0].user_id}`}>{this.state.song[0].artist}</Link>
          </span>
          <br />
          {(this.state.song[0].user_id === this.props.currentUser.id) ?
            <div>
              <button onClick={this.openUploadModal} className="show-modify-button">
                Edit song
              </button>
              <br />
              <button onClick={this.deleteSong(this.state.song[0].id)} className="show-modify-button">
                Delete song
              </button>
            </div> : "" }
          </span>
        </div>
      </center>
    );
  }

  render() {
    let comments = this.props.comments.reverse().map((comment, idx) => {
      return (
        <div key={`comment-container-${idx}`}>
          {this.props.users[comment.user_id] ?
          <ul style={{listStyleImage: `url(${this.props.users[comment.user_id].profile_img})`}} className="comment-details" key={`comment-${idx}`}>
            <li className="comment-author" key={`comment-author-${idx}`}>
              <Link to={`/api/users/${comment.user_id}`}>{this.props.users[comment.user_id].username}</Link>
            </li>
            <li className="comment-body" key={`comment-body-${idx}`}>{comment.body} <i onClick={this.deleteComment(comment.id)} className="fa fa-times"></i></li>
          </ul> : ""}
      </div>
    );
    });

    return (
      <ul className="song-page-container">
        <li className="song-page-left">
          {this.state.song ? this.renderAudioPlayer() : ""}
        </li>

        <li clasName="song-page-right">
          <br />
          <ul className="show-comments">
            {comments}
          </ul>
        </li>
      </ul>
    );
  }
}

export default withRouter(SongPage);
