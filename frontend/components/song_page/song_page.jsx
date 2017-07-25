import React from 'react';
import Audio from 'react-audioplayer';
import { Link } from 'react-router-dom';
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
          user_id: this.props.song[0].user_id
        }];

        this.setState({ song });
      }
    );

    this.props.fetchAllComments(parseInt(this.props.match.params.songId));

    this.props.fetchAllUsers();
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
          />

        <span className="show-song-info">
          {this.state.song[0].name}
          <br />
          <span className="show-song-artist">
            by {this.state.song[0].artist}
          </span>
          <br />
          {(this.state.song[0].user_id === this.props.currentUser.id) ?
            <div>
              <button onClick={this.openUploadModal} className="show-modify-button">
                Edit song
              </button>
              <br />
              <button className="show-modify-button">
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
              {this.props.users[comment.user_id].username}
            </li>
            <li className="comment-body" key={`comment-body-${idx}`}>{comment.body} <i onClick={this.deleteComment(comment.id)} className="fa fa-times"></i></li>
          </ul> : ""}
      </div>
    );
    });

    return (
      <div className="song-page-container">
        {this.state.song ? this.renderAudioPlayer() : ""}

        <br />

        <ul className="show-comments">
          {comments}
        </ul>
      </div>
    );
  }
}

export default SongPage;
