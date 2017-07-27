import React from 'react';
import Audio from 'react-audioplayer';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import UploadFormContainer from '../upload/upload_form_container';

class SongPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    };

    this.renderAudioPlayer = this.renderAudioPlayer.bind(this);
    this.addCommentAudio = this.addCommentAudio.bind(this);
    this.addCommentBox = this.addCommentBox.bind(this);
    this.setComment = this.setComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.openUploadModal = this.openUploadModal.bind(this);
    this.renderSongDetails = this.renderSongDetails.bind(this);
  }

  addCommentAudio(body) {
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

  setComment(e) {
    e.preventDefault();
    this.setState({ comment: e.target.value });
  }

  addCommentBox() {
    if (!this.props.loggedIn) {
      window.globalSignupModal();
      return;
    }

    let comment = {
      body: this.state.comment,
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
    this.props.fetchSong(parseInt(this.props.match.params.songId));

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
      marginRight: '50px'
    };

    return (
      <Audio
        style={audioStyles}
        comment={true}
        onCommentSubmit={this.addCommentAudio}
        fullPlayer={true}
        autoPlay={true}
        playlist={[{name: this.props.song[0].title, src: this.props.song[0].track, img: this.props.song[0].image, comments: []}]}
        ref={audioComponent => {this.audioComponent = audioComponent;}}
      />
    );
  }

  renderSongDetails() {
    return (
      <span className="show-song-info">
        {this.props.song[0].title}
        <br />
          <span className="by">by </span><span className="show-song-artist"><Link to={`/api/users/${this.props.song[0].user_id}`}>{this.props.song[0].artist}</Link>
        </span>
        <br />
        {(this.props.song[0].user_id === this.props.currentUser.id) ?
          <div>
            <button onClick={this.openUploadModal} className="show-modify-button">
              Edit song
            </button>
            <br />
            <button onClick={this.deleteSong(this.props.song[0].id)} className="show-modify-button">
              Delete song
            </button>
          </div> : "" }
      </span>
    );
  }

  render() {
    let comments = this.props.comments.map((comment, idx) => {
      return (
        <div key={`comment-container-${idx}`}>
          {this.props.users[comment.user_id] ?
          <ul style={{listStyleImage: `url(${this.props.users[comment.user_id].profile_img})`}} className="comment-details" key={`comment-${idx}`}>
            <li className="comment-author" key={`comment-author-${idx}`}>
              <Link to={`/api/users/${comment.user_id}`}>{this.props.users[comment.user_id].username}</Link>
            </li>
            <li className="comment-body" key={`comment-body-${idx}`}>{comment.body} <i onClick={this.deleteComment(comment.id)} className="fa fa-times"></i></li>
            <li className="comment-time" key={`comment-time-${idx}`}>{comment.time}</li>
          </ul> : ""}
      </div>
    );
    });

    return (
      <ul className="song-page-container">
        <li className="full-audio-player">
          {this.props.song[0] ? this.renderAudioPlayer() : ""}

          <br />

          <div className="comments-section">
            <ul className="show-comments">
              {comments}
            </ul>

            <div>
              <textarea onChange={this.setComment} className="submit-comment"></textarea>
              <br />
              <center>
                <button onClick={this.addCommentBox} className="submit-comment-button">Submit Comment</button>
              </center>
            </div>
          </div>
        </li>
        <li>
          <br /><br /><br /><br /><br /><br /><br /><br />
          {this.props.song[0] ? this.renderSongDetails() : ""}
        </li>
      </ul>
    );
  }
}

export default withRouter(SongPage);
